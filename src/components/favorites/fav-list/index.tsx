"use client";

import Link from "next/link";
import {
  List,
  ListItem,
} from "../../../../store/slices/interface/listInterface";
import DetailItem from "@/components/shared/cases-detail";
import css from "./index.module.css";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../../store";

export default function FavList() {
  const storeFavs = useSelector((state: RootState) => state.list.favs);

  return (
    <ul className={css.list}>
      {storeFavs.length !== 0 &&
        storeFavs.map((item: ListItem, index) => (
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
  );
}
