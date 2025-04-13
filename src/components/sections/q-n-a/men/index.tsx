import { Q_N_A__MEN } from "@/model/q_n_a";
import css from "./index.module.css";
import MailItem from "@/components/shared/mail";

export default function Men() {
  return (
    <ul className={css.container}>
      {Q_N_A__MEN.map((item, index) => (
        <li key={index} className={css.list_item}>
          <div className={css.imgs_container}>
            <img
              src={item.src}
              alt={item.metaAlt}
              title={item.metaTitle}
              key={item.id}
            />
          </div>

          <MailItem mail="aa@wolfmedia.team" />
        </li>
      ))}
    </ul>
  );
}
