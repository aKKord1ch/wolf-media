"use client";
import { useState } from "react";
import css from "./index.module.css";
import clsx from "clsx";
import { scrollTop } from "@/helpers/scrollToTop";
import { PaginationProps } from "../interface/interface";

const Pagination = ({ length, onSendData, isLoadedMore }: PaginationProps) => {
  const [curIndex, setCurIndex] = useState(1);

  const pagination: number[] = [];

  for (let i = 1; i <= Math.ceil(length / 10); i++) {
    pagination.push(i);
  }

  const sendData = (id: number) => {
    onSendData(id);
    setCurIndex(id);
    scrollTop();
  };

  return (
    <div className={css.pagination}>
      {pagination.map((item: number, index: number) => (
        <span
          key={index}
          onClick={() => sendData(item)}
          className={clsx(css.span, {
            [css.active]: curIndex === item && !isLoadedMore,
          })}
        >
          {item}
        </span>
      ))}
    </div>
  );
};

export default Pagination;
