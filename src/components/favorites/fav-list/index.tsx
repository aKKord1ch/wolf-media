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
import { useEffect, useState } from "react";
import {
  getLocalStorageData,
  setLocalStorageData,
} from "@/helpers/localStorage";
import { addToFavorites } from "../../../../store/slices/listReducer";

export default function FavList() {
  const [favs, setFavs] = useState<{ favs: ListItem[] }>({ favs: [] });
  const storeFavs = useSelector((state: RootState) => state.list.favs);
  const dispatch = useDispatch();

  useEffect(() => {
    const lsList = getLocalStorageData("fav-cards");

    if (lsList.length !== 0) {
      setFavs({ favs: lsList });

      lsList.forEach((item: ListItem) => {
        dispatch(addToFavorites(item));
      });

      console.log('stor',storeFavs);
      console.log("local", lsList);

    } else {
      setFavs({ favs: storeFavs });
      setLocalStorageData("fav-cards", storeFavs);

      console.log("store");
    }
  }, []);

  return (
    <ul className={css.list}>
      {favs?.favs.length !== 0 &&
        favs?.favs.map((item: ListItem, index) => (
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
