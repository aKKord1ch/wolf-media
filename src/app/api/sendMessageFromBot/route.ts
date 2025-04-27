export async function POST(req: Request) {
  const forwarded = req.headers.get('x-forwarded-for')
  const ip = forwarded ? forwarded : 'undefined'

  const TOKEN_BOT = "7212690316:AAEQGyMZC9jtU6tBeDOTfaVQa-nhvLO3f8c";

  const CHAT_ID = "1012292802";

  const body = await req.json();

  const text = `Имя: ${body.name}\nТелефон: ${body.phone}\nСообщение: ${body.message}\nIP: ${ip}`;

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
    return new Response(JSON.stringify({ success: true }), { status: 200 });
  } else {
    return new Response(JSON.stringify({ success: false }), { status: 500 });
  }
}
