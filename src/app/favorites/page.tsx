"use client";

import { Provider, useSelector } from "react-redux";
import store, { RootState } from "../../../store";
import clsx from "clsx";
import css from "./index.module.css";
import global from "@/app/globals.module.css";
import FavList from "@/components/favorites/fav-list";
import Footer from "@/components/footer";

const Favorites = () => {
  return (
    <>
      <main className={css.main}>
        <section className={clsx(css.section, global.container)}>
          <Provider store={store}>
            <FavList />
          </Provider>
        </section>
      </main>
      <Footer />
    </>
  );
};
export default Favorites;
