"use client";

import CasesList from "@/components/cases-list";
import React, { Suspense } from "react";
import css from "./index.module.css";
import Footer from "@/components/footer";
import { Provider } from "react-redux";
import store from "../../../store";

const Cases = () => {
  return (
    <div className="wrapper">
      <main className={css.main}>
        <Provider store={store}>
          <Suspense fallback={<div>Загрузка...</div>}>
            <CasesList />
          </Suspense>
        </Provider>
      </main>
      <Footer />
    </div>
  );
};
export default Cases;
