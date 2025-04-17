import { baseURL } from "@/model/url";

export interface Detail {
  slug: string;
  poster: {
    image: {
      src: string;
      alt: string;
      current: string;
    };
  };
  tagsDisplayed: string;
  title: string;
}

const params = new Set(["slug", "title", "tagsDisplayed", "poster"]);

export async function getDetail(slug: string): Promise<Detail> {
  const res = await fetch(
    `${baseURL}/page/work?limit=0&offset=0`,
    {
      next: { revalidate: 10 },
    }
  );

  if (!res) {
    throw new Error("Faild to load");
  }

  const data = await res.json();

  const result = data.items.find((item:Record<string, any>) => item.slug === slug)

  return result;
}
