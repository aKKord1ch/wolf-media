"use client"

import CasesList from "@/components/cases-list";
import React from "react";
import css from "./index.module.css";
import HeaderDefault from "@/components/header";
import Footer from "@/components/footer";
import { Provider } from "react-redux";
import store from "../../../store";

const Cases = () => {
  return (
    <div className="wrapper">
      <main className={css.main}>
        <Provider store={store}>
          <CasesList />
        </Provider>
      </main>
      <Footer />
    </div>
  );
};
export default Cases;
