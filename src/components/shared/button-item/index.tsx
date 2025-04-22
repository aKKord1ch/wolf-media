"use client";

import css from "./index.module.css";
import cx from "clsx";
import Image from "next/image";

export interface ButtonItemProps {
  className?: string;
  setOpen: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

export const ButtonItem = ({ className, setOpen }: ButtonItemProps) => {
  return (
    <button
      className={cx(css.header__button, className)}
      onClick={setOpen}
    >
      <span>написать нам</span>
      <Image width={24} height={24} src="/header/mail.svg" alt="Письмо" />
    </button>
  );
};
