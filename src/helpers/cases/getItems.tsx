import { DataResponse } from "@/components/cases-list/interface/interface";
import { baseURL } from "@/model/url";

const params = new Set(["slug", "title", "tagsDisplayed", "poster"]);

export async function getItems(
  itemsCount: number = 0,
  offset: number = 0,
  category: string = ""
): Promise<DataResponse> {
  if (category === "all") category = "";

  const res = await fetch(
    `${baseURL}/page/work?limit=${itemsCount}&offset=${offset}&category=${category}`,
    {
      next: { revalidate: 10 },
    }
  );

  if (!res) {
    throw new Error("Faild to load");
  }

  const data = await res.json();

  const filteredData = data.items.map((item: Record<string, any>) => {
    const filtred = Object.fromEntries(
      Object.entries(item).filter(([key]) => params.has(key))
    );

    return filtred;
  });

  let result = {
    length: data.total,
    items: filteredData,
    categories: data.categories,
  };

  return result;
}
