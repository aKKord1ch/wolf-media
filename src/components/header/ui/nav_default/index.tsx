"use client";

import { HEADER_MENU } from "@/model/header";
import clsx from "clsx";
import Link from "next/link";
import css from "./index.module.css";
import { getCookie } from "@/helpers/cookie";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../../../../store";

interface NavProps {
  classList: string;
  classNavItem: string;
  classActive: string;
  curPage: string;
  setPage: Function;
  classNavigation: string;
}

export default function NavigationDefault({
  setPage,
  curPage,
  classList,
  classNavItem,
  classActive,
  classNavigation,
}: NavProps) {
  const countCookie = getCookie("count-fav-cards");
  const store = useSelector((state: RootState) => state.list.favs);
  console.log(store)

  const [count, setCount] = useState(0);

  useEffect(() => {
    if (countCookie) {
      setCount(countCookie);

      setTimeout(() => {
        setCount(store.length);
        console.log(store.length)
      }, 100);
    } else {
      setCount(store.length);
    }
  }, []);

  return (
    <nav className={clsx(classNavigation)}>
      <ul className={clsx(classList)}>
        {HEADER_MENU.map((item) => (
          <li
            onClick={() => setPage(item.href)}
            className={clsx(classNavItem, {
              [classActive]: curPage === item.href,
            })}
            key={item.id}
          >
            <Link
              aria-label={item.title}
              href={item.href}
              key={`link-${item.id}`}
              className={clsx(css.link, {
                [css.favs]: item.href === "/favorites",
              })}
            >
              <span>{item.title}</span>
              {item.href === "/favorites" && (
                <span className={css.count}>{count}</span>
              )}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
