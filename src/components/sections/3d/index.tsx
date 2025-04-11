import { SECTION_3 } from "@/common/constants";
import css from "./index.module.css";
import global from "@/app/globals.module.css";
import clsx from "clsx";
import InnerComunities from "./inner-comunities";

export default function Section3() {
  return (
    <section className={clsx(css.section, global.container)}>
      <span className={global.main_title}>
        Более 150 тематических сообществ
      </span>

      <ul className={css.list}>
        {SECTION_3.map((item) => (
          <li className={css.list_item} key={item.id}>
            <img src={item.src} alt={item.metaAlt} title={item.metaTitle} />
            <span>{item.title}</span>

            <InnerComunities inner={item.innerCommunities} />
          </li>
        ))}
      </ul>

      <span className={css.under_title}>
        Присутствуем на всех популярных платформах
      </span>
    </section>
  );
}
