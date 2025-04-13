import clsx from "clsx";
import css from "./index.module.css";
import global from "@/app/globals.module.css";
import Men from "./men";
import Mails from "./mails";

export default function QandA() {
  return (
    <section className={clsx(global.container, css.section)}>
      <span className={global.main_title}>Есть вопрос или предложение?</span>

      <span className={css.sub_title}>Напиши нам!</span>

      <div className={css.main}>
         <Men />
         <Mails />
      </div>

    </section>
  );
}
