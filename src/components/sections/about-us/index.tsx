"use client"

import clsx from "clsx";
import css from "./index.module.css";
import global from "@/app/globals.module.css";
import Button from "./button";
import { useMediaQuery } from "@mui/material";
import { ABOUT_US__DESCRIPTION, ABOUT_US__TIMELINE } from "@/model/about_us";
import TimelineRow from "./timeline-row";

export default function AboutUs() {
  const isMobile = useMediaQuery("(width <= 600px)");

  return (
    <section className={clsx(css.section, global.container)}>
      <span className={global.main_title}>О нас</span>

      <ul className={css.list}>
        <li className={css.item}>
          {ABOUT_US__DESCRIPTION.map(item => (
            <p key={item.id}>
              {item.text}
            </p>
          ))}

          {!isMobile && <Button />}

        </li>
        <li className={css.item}>
          <div className={css.timeline}>
          {ABOUT_US__TIMELINE.map(item => (
            <TimelineRow event={item.event} year={item.year} keyId={item.id} key={'ABOUT_US__TIMELINE-item' + item.id}/>
          ))}
          </div>

          {isMobile && <Button />}
          
        </li>
      </ul>
    </section>
  );
}
