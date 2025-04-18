import clsx from "clsx";
import css from "./index.module.css";
import global from "@/app/globals.module.css";
import {
  HELPING_BRANDS__LIST,
  HELPING_BRANDS__SUBTITLE,
} from "@/model/helping_brands";
import Image from "next/image";

export default function HelpingBrands() {
  return (
    <section className={clsx(css.section, global.container)}>
      <span className={global.main_title}>
        Помогаем брендам наладить коммуникацию с аудиторией
      </span>

      <span className={css.sub_title}>{HELPING_BRANDS__SUBTITLE}</span>

      <ul className={css.list}>
        {HELPING_BRANDS__LIST.map((item) => (
          <li
            className={css.list_item}
            key={"HELPING_BRANDS__LIST-item-" + item.id}
          >
            <div
              key={"HELPING_BRANDS__LIST-div-" + item.id}
              className={css.img_container}
            >
              <Image
                width={10}
                height={10}
                src={item.src}
                alt={item.metaAlt}
                title={item.metaTitle}
                key={"HELPING_BRANDS__LIST-img-" + item.id}
              />
            </div>
            <span
              className={clsx(
                { [css.p_75]: item.id === 1 },
                { [css.p_60]: item.id === 2 }
              )}
              key={item.id}
            >
              {item.title}
            </span>
          </li>
        ))}
      </ul>

      <button className={clsx(css.button, global.hovered_button)}>
        <span>Рекламное сотрудничество</span>
      </button>
    </section>
  );
}
