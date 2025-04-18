import Link from "next/link";
import React from "react";
import css from "./index.module.css";
import cx from "clsx";
import Image from "next/image";

export interface LinkItemProps {
  tel?: string;
  className?: string;
  isPage?: boolean;
  src?: string;
}

export const LinkItem = ({
  tel,
  className,
  src = "/header/phone-call.svg",
}: LinkItemProps) => {
  return (
    <Link
      href="tel:+7 495 257 55 65"
      className={cx(css.phone__link, className)}
    >
      <figure className={cx(css.phone__container, className)}>
        <picture>
          <Image width={24} height={24} src={src} alt="phone-call" />
        </picture>
        <figcaption className={cx(css.phone__caption)}>
          <span className={cx(className)}>{tel}</span>
        </figcaption>
      </figure>
    </Link>
  );
};
