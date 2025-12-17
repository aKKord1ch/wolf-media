const visitedIPs = new Map<string, number>();

export async function GET(req: Request) {
  const forwarded = req.headers.get("x-forwarded-for");
  const realIP = req.headers.get("x-real-ip");

  const ip =
    forwarded?.split(",")[0].trim() ||
    realIP ||
    req.headers.get("cf-connecting-ip") ||
    "unknown";

  const now = Date.now();
  const lastVisit = visitedIPs.get(ip);

  // Отправляем уведомление только если IP не посещал сайт в последние 5 минут
  if (lastVisit && now - lastVisit < 300000) {
    return new Response(
      JSON.stringify({
        success: true,
        message: "Already tracked",
      }),
      { status: 200 }
    );
  }

  visitedIPs.set(ip, now);

  // Очистка старых записей (старше 1 часа)
  for (const [
    storedIP,
    timestamp,
  ] of visitedIPs.entries()) {
    if (now - timestamp > 3600000) {
      visitedIPs.delete(storedIP);
    }
  }

  const TOKEN_BOT =
    "7212690316:AAEQGyMZC9jtU6tBeDOTfaVQa-nhvLO3f8c";
  const CHAT_ID = "1012292802";

  const userAgent =
    req.headers.get("user-agent") || "unknown";
  const referer = req.headers.get("referer") || "direct";

  const text = `🔔 Новый посетитель!\n\nIP: ${ip}\nUser-Agent: ${userAgent}\nReferer: ${referer}\nВремя: ${new Date().toLocaleString(
    "ru-RU"
  )}`;

  try {
    const responseBot = await fetch(
      `https://api.telegram.org/bot${TOKEN_BOT}/sendMessage`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          chat_id: CHAT_ID,
          text: text,
        }),
      }
    );

    const response = await responseBot.json();

    if (response.ok) {
      return new Response(
        JSON.stringify({ success: true }),
        { status: 200 }
      );
    } else {
      return new Response(
        JSON.stringify({
          success: false,
          error: response.description,
        }),
        { status: 500 }
      );
    }
  } catch (error) {
    return new Response(
      JSON.stringify({
        success: false,
        error: String(error),
      }),
      { status: 500 }
    );
  }
}
