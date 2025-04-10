import clsx from "clsx";
import css from "./index.module.css";
import global from "@/app/globals.module.css";
import header from '@/components/header/index.module.css'

import { HEADER_SOCIALS } from "@/common/constants";
import { LinkItem } from "../shared/link-item";

export default function FooterDefault() {
  return (
    <footer className={css.footer}>
      <section className={clsx(global.container, css.container)}>
        <img src='/footer/logo.svg' alt="logo" />

        <span className={css.span}>
          Copyright 2019 (c) All rights reserved.
        </span>

        <div className={css.contacts__container}>
          <ul className={header.socials__list}>
            {HEADER_SOCIALS.map((item) => (
              <li className={header.soc__item} key={item.id}>
                <img src={item.src} alt={item.alt} title={item.title} />
              </li>
            ))}
          </ul>

          <LinkItem tel="+7 495 257 55 65" className={css.link}/>
        </div>
      </section>
    </footer>
  );
}
