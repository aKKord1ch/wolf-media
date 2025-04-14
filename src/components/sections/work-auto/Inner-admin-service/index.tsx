import { WORK_AUTO__SERVICES } from "@/model/work_auto";
import css from "./index.module.css";
import clsx from "clsx";
import global from '@/app/globals.module.css'

export default function InnerAdminService() {
  return (
    <div className={css.container}>
      <span className={css.title}>Услуги для администраторов</span>

      <ul className={css.list}>
        {WORK_AUTO__SERVICES.map((item) => (
          <li className={css.item} key={item.id}>
            <img
              src={item.src}
              alt={item.metaAlt}
              title={item.metaTitle}
              key={item.id}
            />

            <span>{item.title}</span>
          </li>
        ))}
      </ul>

      <button className={clsx(css.button, global.hovered_button, css.hidden_desk)}>
        <span>пордробнее</span>
      </button>
    </div>
  );
}
