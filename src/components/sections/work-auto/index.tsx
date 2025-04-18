import clsx from "clsx";
import css from "./index.module.css";
import global from "@/app/globals.module.css";
import innerAdminStyle from "./Inner-admin-service/index.module.css";

import InnerCardList from "./inner_card-list";
import InnerAdminService from "./Inner-admin-service";
import Image from "next/image";

export default function WorkAuto() {
  return (
    <section className={clsx(global.container, css.section)}>
      <span className={global.main_title}>
        Мы полностью автоматизировали работу по управлению сообществами
      </span>

      <span className={css.sub_title}>
        Чем больше сообществ в активе, тем больше времени требуется на
        планирование, ведение и сбор статистики.
      </span>

      <InnerCardList />

      <div className={css.services_container}>
        <InnerAdminService />
        <div className={css.img_container}>
          <Image
            width={770}
            height={433}
            src="/sections/work-auto/video.png"
            alt="video"
            title="video"
          />
        </div>
        <button
          className={clsx(
            innerAdminStyle.button,
            global.hovered_button,
            innerAdminStyle.hidden_mob
          )}
        >
          <span>подробнее</span>
        </button>
      </div>
    </section>
  );
}
