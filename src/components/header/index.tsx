import { HEADER_MENU, HEADER_SOCIALS } from "@/common/constants";
import Logo from "./ui/logo";
import Burger from "./ui/burger";
import css from "./index.module.css";
import { LinkItem } from "../shared/link-item";
import { ButtonItem } from "../shared/button-item";

export default function HeaderDefault() {
  return (
    <header className={css.header}>
      <ul className={css.list_items}>
        <li className={css.header__item + " " + css.hidden}>
          <Burger />
        </li>

        <li className={css.header__item}>
          <div className={css.item__image}>
            <Logo def="/header/WolfMEdia.svg" tablet="/header/logo600.svg" mobile="/header/WolfMEdia.svg"/>
          </div>

          <nav className={css.navigation}>
            <ul className={css.nav__list}>
              {HEADER_MENU.map((item) => (
                <li className={css.nav__item} key={item.id}>
                  <span>{item.title}</span>
                </li>
              ))}
            </ul>
          </nav>
        </li>

        <li className={css.header__item}>
          <ul className={css.socials__list}>
            {HEADER_SOCIALS.map((item) => (
              <li className={css.soc__item} key={item.id}>
                <img src={item.src} alt={item.alt} title={item.title} />
              </li>
            ))}
          </ul>

          <LinkItem tel="+7 495 257 55 65" />

          <ButtonItem />
        </li>
      </ul>

    </header>
  );
}
