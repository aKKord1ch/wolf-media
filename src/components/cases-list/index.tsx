"use client";

import React, { Suspense, useEffect, useState } from "react";
import css from "./index.module.css";
import global from "@/app/globals.module.css";
import clsx from "clsx";
import { getItems } from "@/helpers/cases/getItems";
import Link from "next/link";
import Pagination from "./pagination";
import DetailItem from "../shared/cases-detail";
import { Categories, DataResponse, Item } from "./interface/interface";
import {
  getLocalStorageData,
  setLocalStorageData,
} from "@/helpers/localStorage";
import CasesTabs from "../cases-tabs";
import { useRouter, useSearchParams } from "next/navigation";

const CasesList: React.FC = () => {
  const [length, setLength] = useState<number>(0);
  const [show, setShow] = useState<Item[]>([]);
  const [incrementalLength, setIncrementalLength] = useState<number>(0);
  const [isLoadedMore, setIsLoadedMore] = useState<boolean>(false);
  const [categ, setCateg] = useState<Categories[]>();

  const router = useRouter();
  const searchParams = useSearchParams();
  let curCategory = searchParams.get("category") || "all";

  const setStates = (
    length: number,
    items: Item[],
    incLenght: number = 0,
    categories: Categories[] = []
  ) => {
    setLength(length);
    setShow(items);
    setIncrementalLength(incLenght);
    setCateg(categories);
  };

  const handleClick = async (slug: string) => {
    const params = new URLSearchParams(searchParams.toString());
    params.set("category", slug);
    router.push(`?${params.toString()}`);

    const data: DataResponse = await getItems(10, 0, slug);

    console.log(data);

    setStates(data.length, data.items, data.items.length, data.categories);

    setLocalStorageData(`${slug}`, data);
    setLocalStorageData("categories", data.categories);
  };

  const fetchData = async () => {
    const data: DataResponse = await getItems(10, 0, curCategory);
    console.log(curCategory);

    setStates(data.length, data.items, data.items.length, data.categories);

    setLocalStorageData(`${curCategory}`, data);
    setLocalStorageData("categories", data.categories);
  };

  useEffect(() => {
    if (curCategory === "") curCategory = "all";
    const lsDataCards = getLocalStorageData(`${curCategory}`);
    const lsDataCategories = getLocalStorageData("categories");

    if (lsDataCards !== "") {
      setStates(
        lsDataCards.length,
        lsDataCards.items,
        lsDataCards.items.length,
        lsDataCategories
      );
      console.log(curCategory);
      console.log(show);
    } else {
      fetchData();
    }
  }, []);

  const loadMore = async () => {
    if (incrementalLength < length) {
      const newIncrementalLength = incrementalLength + 10;
      setIncrementalLength(newIncrementalLength);

      const showArr: DataResponse = await getItems(
        10,
        incrementalLength,
        curCategory
      );
      setShow((prev) => [...prev, ...showArr.items]);
      setIsLoadedMore(true);
    }
  };

  const loadSelectedSlice = async (id: number) => {
    let offset = id * 10 - 10;
    const response: DataResponse = await getItems(10, offset, curCategory);
    setShow(response.items);
    setIncrementalLength(id * 10);
  };

  const paginationCallback = (id: number) => {
    loadSelectedSlice(id);
    setIsLoadedMore(false);
  };

  return (
    <Suspense fallback={<div>Загрузка...</div>}>
      <section className={clsx(css.section, global.container)}>
        <span className={css.main_title}>cases</span>

        {categ && (
          <CasesTabs
            categories={categ}
            curCategory={curCategory}
            observeClick={handleClick}
          />
        )}

        <ul className={css.list}>
          {show.map((item: Item, index) => (
            <li key={`li-${item.slug}-${index}`}>
              <Link
                aria-label={`карточка с названием ${item.title}`}
                href={`/cases/${item.slug}`}
                key={`${item.slug}-${index}`}
              >
                <DetailItem data={item} index={index} />
              </Link>
            </li>
          ))}
        </ul>

        <div className={css.pargination_load__container}>
          <Pagination
            onSendData={paginationCallback}
            length={length}
            isLoadedMore={isLoadedMore}
          />

          <button
            onClick={loadMore}
            disabled={incrementalLength >= length}
            className={clsx(
              css.button,
              { [css.abled]: !(incrementalLength >= length) },
              { [css.disabled]: incrementalLength >= length }
            )}
          >
            Загрузить еще
          </button>
        </div>
      </section>
    </Suspense>
  );
};

export default CasesList;
