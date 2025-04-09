import css from './index.module.css';
import clsx from 'clsx';
import { FC } from 'react';

interface ButtonItemProps {
  className?: string;
}

const ButtonItem: FC<ButtonItemProps> = ({ className }) => {
  return (
    <button className={clsx(css.header__button, className)}>
      <span>написать нам</span>
      <img src="/header/mail.svg" alt="Письмо" />
    </button>
  );
};

export default ButtonItem