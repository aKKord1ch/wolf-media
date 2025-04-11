"use client";

import { useEffect, useState } from "react";
import css from "./index.module.css";
import clsx from "clsx";
import { HOW_DO_WE_WORK__SLIDER } from "@/model/how_do_we_work";

interface Slide {
  id: number;
  src: string;
  metaAlt: string;
  metaTitle: string;
}

export default function Slider() {
  const initialSlidersArray: Slide[] = Object.assign(
    [],
    HOW_DO_WE_WORK__SLIDER
  );

  /*   const [slidersArray, setSlidersArray] = useState<Slide[]>(() => {
    return [...initialSlidersArray];
  }); */

  const [curSlide, setCurSlide] = useState<Slide>(initialSlidersArray[0]);

  const updateSlide = () => {
    setCurSlide((prev) => {
      const curIndex = initialSlidersArray.findIndex(
        (item) => item.id === prev.id
      );
      return initialSlidersArray[curIndex + 1]
        ? initialSlidersArray[curIndex + 1]
        : initialSlidersArray[0];
    });
  };

  useEffect(() => {
    const intervalId = setInterval(() => {
      updateSlide();
    }, 3000);

    return () => clearInterval(intervalId);
  }, [initialSlidersArray]);

  /* const updateSlidersArray = () => {

    setSlidersArray((prevSlides) => {
      const newSlides = [...prevSlides];
      const lastSlide = newSlides.shift();

      if (lastSlide) {
        newSlides.push(lastSlide);
      }

      return newSlides.map((item, index) => ({
        ...item,
        id: index,
      }));
    });

    setCurSlide((prev) => {
      const curIndex = slidersArray.findIndex((item) => item.id === prev.id);

      console.log(slidersArray[curIndex], curSlide)

      return curIndex !== -1 ? slidersArray[curIndex + 1] : slidersArray[0];
    });
  }; */

  return (
    <figure className={css.slider}>
      <picture>
        <img
          src={curSlide.src}
          alt={curSlide.metaAlt}
          title={curSlide.metaTitle}
          className={css.main_img}
        />
      </picture>

      <ul className={css.slides_list}>
        {initialSlidersArray.map((item, index) => (
          <li
            className={clsx(
              css.slide_item,
              curSlide.id === item.id && css.active
            )}
            key={item.id}
          >
            <img
              src={item.src}
              alt={item.metaAlt}
              title={item.metaTitle}
              onClick={() => setCurSlide(item)}
              className={css.slider_img}
            />
          </li>
        ))}
      </ul>
    </figure>
  );
}
