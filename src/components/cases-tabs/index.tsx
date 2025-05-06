"use client";

import css from "./index.module.css";
import { Categories } from "../cases-list/interface/interface";
import clsx from "clsx";

interface CasesTabsProps {
  categories: Categories[];
  curCategory: string;
  observeClick: (slug: string) => void;
}

export default function CasesTabs({
  categories,
  curCategory,
  observeClick,
}: CasesTabsProps) {
  let customCategories = [...categories];
  customCategories.unshift({ slug: "", title: "Все" });

  return (
    <nav className={css.nav}>
      <ul className={css.list}>
        {customCategories.map((item) => (
          <li
            className={clsx(css.item, {
              [css.active]:
                curCategory === item.slug ||
                ((!curCategory || curCategory === "all") && item.slug === ""),
            })}
            key={`${item.slug}`}
            onClick={() => observeClick(item.slug)}
          >
            <span key={`span-${item.slug}`}>{item.title}</span>
          </li>
        ))}
      </ul>
    </nav>
  );
}
