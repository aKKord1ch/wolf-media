import clsx from "clsx";
import css from "./index.module.css";
import global from "@/app/globals.module.css";
import Slider from "./slider";
import { HOW_DO_WE_WORK__LEFT_LIST } from "@/model/how_do_we_work";
import React from "react";

export default function Section4() {
  return (
    <section className={clsx(global.container, css.section)} id="target">
      <span className={global.main_title}>Как мы работаем</span>

      <ul className={css.list_main}>
        <li className={css.main_item}>
          <ul className={css.list_inner}>
            {HOW_DO_WE_WORK__LEFT_LIST.map((item) => (
              <li className={css.inner_item} key={item.id}>
                <p key={"HOW_DO_WE_WORK__LEFT_LIST-p" + item.id}>{item.text.map(textItem => (
                  <React.Fragment key={`p-inner-list-${item.id}-${textItem.id}`}>
                    {textItem.text}
                  </React.Fragment>
                ))}</p>
              </li>
            ))}
          </ul>
        </li>

        <li className={css.main_item}>
          <Slider />
        </li>
      </ul>
    </section>
  );
}
