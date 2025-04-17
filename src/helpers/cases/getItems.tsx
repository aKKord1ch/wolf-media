import { DataResponse } from "@/components/cases-list";
import { baseURL } from "@/model/url";
/* import { DeviceType, getDeviceType } from "../getDeviceType"; */

const params = new Set(["slug", "title", "tagsDisplayed", "poster"]);

export async function getItems(
  itemsCount: number = 0,
  offset: number = 0
): Promise<DataResponse> {
  
  /*   const device: DeviceType = await getDeviceType(); */

  const res = await fetch(
    `${baseURL}/page/work?limit=${itemsCount}&offset=${offset}`,
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

    /* const imageObject = {
      mobile: filtred.poster.image.mobile,
      tablet: filtred.poster.image.tablet,
      desktop: filtred.poster.image.src,
    };

    filtred.poster.image = {
      ...imageObject,
      current: imageObject[device],
    }; */

    return filtred;
  });

  let result = {length: data.total, items: filteredData}

  return result;
}
