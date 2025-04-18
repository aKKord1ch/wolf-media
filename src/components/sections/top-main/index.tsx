import clsx from "clsx";
import css from "./index.module.css";
import global from "@/app/globals.module.css";
import Link from "next/link";
import Image from "next/image";

export default function Section1() {
  return (
    <section className={clsx(css.section, global.container)}>
      <span className={css.main_title}>Издательство новых медиа</span>

      <ul className={css.list}>
        <li className={css.item}>
          <span className={css.title}>100&nbsp;000&nbsp;000</span>
          <span className={css.subtitle}>наша аудитория</span>
        </li>
        <li className={css.item}>
          <span className={css.title}>12&nbsp;000&nbsp;000</span>
          <span className={css.subtitle}>ежедневно нас читают</span>
        </li>
      </ul>

      <Link href="#">
        <Image
          width={10}
          height={10}
          src="../../sections/1st/Vector.svg"
          alt=""
        />
      </Link>
    </section>
  );
}
