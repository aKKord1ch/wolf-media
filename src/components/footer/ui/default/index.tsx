
import global from "@/app/globals.module.css";
import header from "@/components/header/index.module.css";
import css from './index.module.css'
import clsx from 'clsx';
import Logo from '@/components/header/ui/logo';
import { LinkItem } from '@/components/shared/link-item';
import { HEADER_SOCIALS } from "@/model/header";
import Image from "next/image";

export default function FooterDefault() {
  return (
    <section className={clsx(global.container, css.container)}>
      <Logo
        def="/footer/logo.svg"
        tablet="/footer/logo.svg"
        mobile="/footer/logoMob.svg"
      />

      <span className={css.span}>Copyright 2019 (c) All rights reserved.</span>

      <div className={css.contacts__container}>
        <ul className={clsx(header.socials__list, css.socials__list)}>
          {HEADER_SOCIALS.map((item) => (
            <li className={header.soc__item} key={item.id}>
              <Image width={24} height={24} src={item.src} alt={item.alt} title={item.title} />
            </li>
          ))}
        </ul>

        <LinkItem
          tel="+7 495 257 55 65"
          src="/footer/phone-call.svg"
          className={css.link}
        />
      </div>
    </section>
  );
}
