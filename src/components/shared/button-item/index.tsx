import css from './index.module.css';
import cx from 'clsx';
import { FC } from 'react';

export interface ButtonItemProps {
  className?: string;
}

export const ButtonItem = ({ className }: ButtonItemProps) => {
  return (
    <button className={cx(css.header__button, className)}>
      <span>написать нам</span>
      <img src="/header/mail.svg" alt="Письмо" />
    </button>
  );
};
