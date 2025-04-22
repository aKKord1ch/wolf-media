"use client";

import React, { useEffect, useState } from "react";
import css from "./index.module.css";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../../../store";
import {
  addToFavorites,
  removeFromFavorites,
} from "../../../../store/slices/listReducer";
import { ListItem } from "../../../../store/slices/interface/listInterface";
import { getLocalStorageData } from "@/helpers/localStorage";
import clsx from "clsx";

interface StarProps {
  data: ListItem;
}

export default function Star({ data }: StarProps) {
  const favs = useSelector((state: RootState) => state.list.favs);
  const dispatch = useDispatch();

  const isFavorite = favs.some((item) => item.slug === data.slug);

  const action = (data: ListItem) => {
    isFavorite
      ? dispatch(removeFromFavorites(data))
      : dispatch(addToFavorites(data));
  };

  return (
    <div
      className={clsx(css.heart, {[css.disabled]: !isFavorite})}
      onClick={(e) => {
        e.preventDefault();
        e.stopPropagation();
        action(data);
      }}
    >
    </div>
  );
}
