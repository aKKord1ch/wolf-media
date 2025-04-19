"use client";

import Logo from "./ui/logo";
import Burger from "./ui/burger";
import css from "./index.module.css";
import { LinkItem } from "../shared/link-item";
import { ButtonItem } from "../shared/button-item";
import { HEADER_MENU, HEADER_SOCIALS } from "@/model/header";
import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import clsx from "clsx";
import { transliterate } from "transliteration";
import { usePathname } from "next/navigation";

export default function HeaderDefault() {
  const [curPage, setCurPage] = useState("");
  const path = usePathname();

  useEffect(() => {
    setCurPage(path);
  });

  const setPage = (pg: string) => {
    setCurPage(pg);
  };

  return (
    <header className={css.header}>
      <ul className={css.list_items}>
        <li className={css.header__item + " " + css.hidden}>
          <Burger page={curPage} setPage={setPage} />
        </li>

        <li className={css.header__item}>
          <div className={css.item__image}>
            <Link href={"/"} className={css.link}>
              <Logo
                def="/header/WolfMEdia.svg"
                tablet="/header/logo600.svg"
                mobile="/header/WolfMEdia.svg"
              />
            </Link>
          </div>

          <nav className={css.navigation}>
            <ul className={css.nav__list}>
              {HEADER_MENU.map((item) => (
                <li
                  onClick={() => setCurPage(item.href)}
                  className={clsx(css.nav__item, {
                    [css.active_nav]: curPage === item.href,
                  })}
                  key={item.id}
                >
                  <Link href={item.href} key={`link-${item.id}`}>
                    <span>{item.title}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </li>

        <li className={css.header__item}>
          <ul className={css.socials__list}>
            {HEADER_SOCIALS.map((item) => (
              <li className={css.soc__item} key={item.id}>
                <Link href={item.href} target="_blank">
                  <Image
                    width={24}
                    height={24}
                    src={item.src}
                    alt={item.alt}
                    title={item.title}
                  />
                </Link>
              </li>
            ))}
          </ul>

          <LinkItem tel="+7 495 257 55 65" />

          <ButtonItem />
        </li>
      </ul>

      <div className={css.gradient_blur}>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </header>
  );
}
