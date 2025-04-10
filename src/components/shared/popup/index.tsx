import clsx from "clsx";
import css from "./index.module.css";

export default function Popup() {
  return (
    <dialog className={css.dialog}>
      <span className={css.title}>Написать нам</span>

      <form className={css.form}>
        <label className={clsx(css.label, css.name)}>
          <input type="text" placeholder="Ваше имя"/>
          <span>Ваше имя</span>
        </label>

        <label className={clsx(css.label, css.tel)}>
          <input type="tel" placeholder="Ваш телефон"/>
          <span>Ваш телефон</span>
        </label>

        <label className={clsx(css.label, css.mess)}>
          <input type="text" placeholder="Ваше сообщение"/>
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
  );
}
