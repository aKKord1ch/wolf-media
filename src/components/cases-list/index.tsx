"use client";

import React, { useEffect, useState } from "react";
import css from "./index.module.css";
import global from "@/app/globals.module.css";
import clsx from "clsx";
import { getItems } from "@/helpers/cases/getItems";
import Link from "next/link";
import Pagination from "./pagination";
import DetailItem from "../shared/cases-detail";
import { DataResponse, Item } from "./interface/interface";

const CasesList: React.FC = () => {
  // какашки
  // я бы сделал все по fsd, но тогда нарушится логика всего что есть уже в этои проекте
  const [length, setLength] = useState<number>(0);
  const [show, setShow] = useState<Item[]>([]);
  const [incrementalLength, setIncrementalLength] = useState<number>(0);
  const [isLoadedMore, setIsLoadedMore] = useState<boolean>(false);

  useEffect(() => {
    const fetchData = async () => {
      const data: DataResponse = await getItems(10);
      setLength(data.length);
      setShow(data.items);
      setIncrementalLength(data.items.length);
    };

    fetchData();
  }, []);

  const loadMore = async () => {
    if (incrementalLength <= length) {
      setIncrementalLength((prev) => prev + 10);

      const showArr = await getItems(10, incrementalLength);

      setShow((prev) => [...prev, ...showArr.items]);
      setIsLoadedMore(true);
    } else return;
  };

  const loadSelectedSlice = async (id: number) => {
    let offset = id * 10 - 10;
    const data: DataResponse = await getItems(10, offset);
    setShow(data.items);
    setIncrementalLength((prev) => (prev = id * 10));
  };

  const paginationCallback = (id: number) => {
    loadSelectedSlice(id);
    setIsLoadedMore(false);
    console.log();
  };

  return (
    <section className={clsx(css.section, global.container)}>
      <span className={css.main_title}>cases</span>

      <ul className={css.list}>
        {show.map((item: any, index) => (
          <Link
            href={`/cases/${item.slug}`}
            key={`${item.slug}-${index}`}
            target="_blank"
          >
            <li key={`li-${item.slug}-${index}`}>
              <DetailItem data={item} index={index} />
            </li>
          </Link>
        ))}
      </ul>

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
    </section>
  );
};

export default CasesList;
