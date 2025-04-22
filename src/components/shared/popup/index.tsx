"use client";

import clsx from "clsx";
import css from "./index.module.css";

interface PopupInterface {
  isOpen: boolean;
  setOpen: () => void;
}

export default function Popup({ isOpen, setOpen }: PopupInterface) {
  
  const handleClickOutside = (event: React.MouseEvent<HTMLDivElement>) => {
    const dialog = document.getElementById("popup");
    if (dialog && !dialog.contains(event.target as Node)) {
      setOpen();
    }
  };


  return (
    <div
      className={clsx(css.wrapper, { [css.opened]: isOpen })}
      onClick={(e) => handleClickOutside(e)}
    >
      <dialog className={css.dialog} id="popup">
        <div className={css.cross} onClick={() => setOpen()}></div>

        <span className={css.title}>Написать нам</span>

        <form className={css.form}>
          <label className={clsx(css.label, css.name)}>
            <input type="text" placeholder="Ваше имя" />
            <span>Ваше имя</span>
          </label>

          <label className={clsx(css.label, css.tel)}>
            <input type="tel" placeholder="Ваш телефон" />
            <span>Ваш телефон</span>
          </label>

          <label className={clsx(css.label, css.mess)}>
            <input type="text" placeholder="Ваше сообщение" />
          </label>

          <button>
            <span>Отправить</span>
          </button>

          <span>
            Нажимая кнопку “Отправить” вы даёте своё согласие на обработку
            персональных данных
          </span>
        </form>
      </dialog>
    </div>
  );
}
