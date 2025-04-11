"use client";

import { useEffect, useState } from "react";
import css from "./index.module.css";
import header_css from "../../index.module.css";
import { LinkItem } from "../../../shared/link-item";
import { ButtonItem } from "../../../shared/button-item";
import clsx from "clsx";
import { HEADER_MENU } from "@/model/header";

export default function Burger() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  useEffect(() => {
    const header = document.querySelector("header");
    if (!header) return;

    header.style.backgroundColor = isOpen ? "var(--background)" : "transparent";

    const html = document.documentElement;
    if (!html) return;

    html.style.overflow = isOpen ? "hidden" : "auto";

    return () => {
      header.style.backgroundColor = "transparent";
      html.style.overflow = "auto";
    };
  }, [isOpen]);

  return (
    <div className={css.burger__container}>
      <button
        className={css.burger}
        onClick={toggleMenu}
        aria-label="Toggle menu"
      >
        <svg
          className={css.menu_icon}
          viewBox="0 0 40 40"
          xmlns="http://www.w3.org/2000/svg"
        >
          <line className={css.top_line} x1="8" y1="12" x2="32" y2="12" />
          <line className={css.middle_line} x1="8" y1="20" x2="32" y2="20" />
          <line className={css.bottom_line} x1="8" y1="28" x2="32" y2="28" />
        </svg>
      </button>

      <dialog
        className={clsx(css.mobile_nav, isOpen && css.visible)}
        id="mob-nav"
      >
        <nav className={css.mob__navigation}>
          <ul className={css.mob__nav__list}>
            {HEADER_MENU.map((item) => (
              <li className={css.mob__nav_item} key={item.id}>
                <span>{item.title}</span>
              </li>
            ))}
          </ul>
        </nav>

        <section className={css.nav_feedback}>
          <LinkItem tel="+7 495 257 55 65" className={css.link} />

          <ButtonItem className={css.mobile_button} />
        </section>
      </dialog>

      <section
        className={clsx(css.burger__backdrop, { [css.active]: isOpen })}
      ></section>
    </div>
  );
}
