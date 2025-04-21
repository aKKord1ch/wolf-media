"use client";

import Logo from "./ui/logo";
import Burger from "./ui/burger";
import css from "./index.module.css";
import { LinkItem } from "../shared/link-item";
import { ButtonItem } from "../shared/button-item";
import { HEADER_SOCIALS } from "@/model/header";
import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { Provider, useDispatch } from "react-redux";
import store, { AppDispatch } from "../../../store";
import NavigationDefault from "./ui/nav_default";
import { getLocalStorageData } from "@/helpers/localStorage";
import { addToFavorites } from "../../../store/slices/listReducer";
import { ListItem } from "../../../store/slices/interface/listInterface";

export default function HeaderDefault() {
  const [curPage, setCurPage] = useState("");
  const path = usePathname();

  useEffect(() => {
    setCurPage(path);

    const lsList = getLocalStorageData("fav-cards");

    if (lsList.length !== 0) {
      lsList.forEach((item: ListItem) => {
        dispatch(addToFavorites(item));
      });
    }
  });

  const dispatch = useDispatch<AppDispatch>();

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
            <Link aria-label="Home" href={"/"} className={css.link}>
              <Logo
                def="/header/WolfMEdia.svg"
                tablet="/header/logo600.svg"
                mobile="/header/WolfMEdia.svg"
              />
            </Link>
          </div>

          <Provider store={store}>
            <NavigationDefault
              classNavigation={css.navigation}
              classActive={css.active_nav}
              classList={css.nav__list}
              classNavItem={css.nav__item}
              curPage={curPage}
              setPage={setPage}
            />
          </Provider>
        </li>

        <li className={css.header__item}>
          <ul className={css.socials__list}>
            {HEADER_SOCIALS.map((item) => (
              <li className={css.soc__item} key={item.id}>
                <Link aria-label={item.alt} href={item.href} target="_blank">
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
