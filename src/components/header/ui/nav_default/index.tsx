import { HEADER_MENU } from "@/model/header";
import clsx from "clsx";
import Link from "next/link";
import css from "./index.module.css";
import { useSelector } from "react-redux";
import { RootState } from "../../../../../store";

interface NavProps {
  classList: string;
  classNavItem: string;
  classActive: string;
  curPage: string;
  setPage: Function;
  classNavigation: string
}

export default function NavigationDefault({
  setPage,
  curPage,
  classList,
  classNavItem,
  classActive,
  classNavigation
}: NavProps) {
  
  const store = useSelector((state: RootState) => state.list.favs)

  return (
    <nav className={clsx(classNavigation)}>
      <ul className={clsx(classList)}>
        {HEADER_MENU.map((item) => (
          <li
            onClick={() => setPage(item.href)}
            className={clsx(classNavItem, {
              [classActive]: curPage === item.href,
            })}
            key={item.id}
          >
            <Link
              aria-label={item.title}
              href={item.href}
              key={`link-${item.id}`}
              className={clsx(css.link, {[css.favs]: item.href === "/favorites"})}
            >
              <span>{item.title}</span>
              {item.href === "/favorites" && (
                <span className={css.count}>{store.length}</span>
              )}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
