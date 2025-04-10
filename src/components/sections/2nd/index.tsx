import clsx from "clsx";
import css from "./index.module.css";
import global from "@/app/globals.module.css";

export default function Section2() {
  return (
    <section className={clsx(css.section, global.container)}>
      <span className={css.main_title}>О нас</span>

      <ul className={css.list}>
        <li className={css.item}>
          <span>
            <p>
              «Wolfmedia» – это редакция, где ежедневно авторы, иллюстраторы,
              дизайнеры, видеографы, создают уникальный контент и доносят его до
              огромной аудитории с помощью социальных сетей.
            </p>
            <p>
              Социальные сети стали главным инструменом коммуникации в 21 веке.
              Сообщества, паблики, youtube-каналы, блоги получают внимание
              миллионной аудитории, зачастую их охват превышает охват популярных
              телеканалов и журналов.
            </p>
            <p>
              И пока традиционные СМИ занимаются перетаскивание аудитории с
              одной площадки на другую, мы идем прямо к читателю, в его
              новостную ленту.
            </p>
          </span>
          <button >
            <span>подробнее</span>
          </button>
        </li>
        <li className={css.item}>
          <div className={css.timeline}>
            <div className={css.year}>
               <span>2014</span>
            </div>
            <div className={css.middle}>
               <img src="" alt="" />
            </div>
            <div className={css.event}>
              С 1 паблика выросли до сетки из <strong>50 сообществ</strong>
            </div>

            <div className={css.year}>
               <span>2015</span>
            </div>
            <div className={css.middle}>
            </div>
            <div className={css.event}>
              Первый <strong>миллион</strong> подписчиков
            </div>

            <div className={css.year}>
               <span>2016</span>
            </div>
            <div className={css.middle}>
            </div>
            <div className={css.event}>
              <strong>Активный рост</strong> сообществ и аудитории
            </div>

            <div className={css.year}>
               <span>2017</span>
            </div>
            <div className={css.middle}>
            </div>
            <div className={css.event}>
              Открытие собственного <strong>офиса</strong>, переход к{" "}
              <strong>реальной</strong> команде, запуск{" "}
              <strong>видео-продакшена</strong>
            </div>

            <div className={css.year}>
               <span>2018</span>
            </div>
            <div className={css.middle}>
            </div>
            <div className={css.event}>
              Разработан <strong>собственный софт</strong> по сбору детальной
              статистики
            </div>

            <div className={css.year}>
               <span>2019</span>
            </div>
            <div className={css.middle}>
            </div>
            <div className={css.event}>
              Агрегация сообществ под управление <strong>WolfMedia</strong>
            </div>
          </div>
        </li>
      </ul>
    </section>
  );
}
