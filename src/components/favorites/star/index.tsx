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
        className={clsx(css.star)}
        onClick={(e) => {
          e.preventDefault();
          e.stopPropagation();
          action(data);
        }}
      >
        {isFavorite ? (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          fill="#FFD700"
          viewBox="0 0 24 24"
        >
          <path d="M12 .587l3.668 7.568L24 9.75l-6 5.85 1.416 8.4L12 19.897 4.584 24 6 15.6 0 9.75l8.332-1.595z" />
        </svg>
      ) : (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          fill="none"
          stroke="#FFD700"
          strokeWidth="2"
          viewBox="0 0 24 24"
        >
          <path d="M12 .587l3.668 7.568L24 9.75l-6 5.85 1.416 8.4L12 19.897 4.584 24 6 15.6 0 9.75l8.332-1.595z" />
        </svg>)}
      </div>
  );
}
