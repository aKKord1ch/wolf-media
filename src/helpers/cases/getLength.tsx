import { baseURL } from "@/model/url";

export async function getLength():Promise<string> {

  const res = await fetch(`${baseURL}/page/work?limit=0`, {
    next: { revalidate: 10 },
  });

  if (!res) {
    throw new Error("Faild to load");
  }

  const data = await res.json();

  return data.length
}
