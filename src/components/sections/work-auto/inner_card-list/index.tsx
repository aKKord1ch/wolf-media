import { WORK_AUTO__CARD_LIST } from "@/model/work_auto";
import css from "./index.module.css";
import React from "react";
import Image from "next/image";

export default function InnerCardList() {
  return (
    <div className={css.container}>
      <span className={css.title}>
        Мы подошли к решению этой проблемы технологично - разработали
        собственный софт, который:
      </span>

      <ul className={css.list}>
        {WORK_AUTO__CARD_LIST.map((item) => (
          <li className={css.list_item} key={item.id}>
            <div key={item.id} className={css.img_container}>
              <Image
                width={10}
                height={10}
                src={item.src}
                alt={item.metaAlt}
                title={item.metaTitle}
                key={item.id}
              />
            </div>

            <div className={css.text_container}>
              <p key={item.id}>
                {item.title.map((item) => (
                  <React.Fragment key={"inner-card-list-" + item.id}>
                    {item.text}
                  </React.Fragment>
                ))}
              </p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
