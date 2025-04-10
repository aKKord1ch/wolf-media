import Link from "next/link";
import React from "react";
import css from './index.module.css'
import cx from "clsx";

export interface LinkItemProps {
  tel?: string;
  className?:string;
  isPage?: boolean
}

export const LinkItem = ({ tel, className }: LinkItemProps) => {
  return (
    <Link href="tel:+7 495 257 55 65" className={cx(css.phone__link)}>
      <figure className={cx(css.phone__container, className)}>
        <picture>
          <img src="/header/phone-call.svg" alt="phone-call" />
        </picture>
        <figcaption className={cx(css.phone__caption)}>
          <span className={cx(className)}>{tel}</span>
        </figcaption>
      </figure>
    </Link>
  );
};
