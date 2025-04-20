"use client";

import { useState } from "react";
import css from "./index.module.css";
import header_css from "../../index.module.css";
import { LinkItem } from "../../../shared/link-item";
import { ButtonItem } from "../../../shared/button-item";
import clsx from "clsx";
import { HEADER_MENU } from "@/model/header";
import { transliterate } from "transliteration";
import Link from "next/link";

interface BurgerProps {
  page: string;
  setPage: Function;
}

export default function Burger({ page, setPage }: BurgerProps) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);

    const header = document.querySelector("header");
    const html = document.documentElement;
    const grad = document.querySelector("gradient_blur") as HTMLElement;

    if (header) {
      header.style.backgroundColor = !isOpen
        ? "var(--background)"
        : "transparent";
    }

    if (html) {
      html.style.overflow = !isOpen ? "hidden" : "auto";
    }

    if (grad) {
      grad.style.visibility = !isOpen ? "hidden" : "visible";
    }

    if (isOpen) {
      if (header) header.style.backgroundColor = "transparent";
      if (html) html.style.overflow = "auto";
      if (grad) grad.style.visibility = "visible";
    }
  };

  return (
    <div className={css.burger__container}>
      <button
        className={css.burger}
        onClick={toggleMenu}
        aria-label="Toggle menu"
      >
        <div className={clsx(css.menu_icon, isOpen && css.active)}>
          <span className={clsx(css.top_line, isOpen && css.active)} />
          <span className={clsx(css.middle_line, isOpen && css.active)} />
          <span className={clsx(css.bottom_line, isOpen && css.active)} />
        </div>
      </button>

      <dialog
        className={clsx(css.mobile_nav, isOpen && css.visible)}
        id="mob-nav"
      >
        <nav className={css.mob__navigation}>
          <ul className={css.mob__nav__list}>
            {HEADER_MENU.map((item) => (
              <li
                key={item.id}
                onClick={() => setPage(item.href)}
                className={clsx(css.mob__nav_item, {
                  [css.active_nav]: page === item.href,
                })}
              >
                <Link aria-label={item.title} href={item.href}>
                  <span>{item.title}</span>
                </Link>
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
        onClick={toggleMenu}
        className={clsx(css.burger__backdrop, { [css.active]: isOpen })}
      ></section>
    </div>
  );
}
