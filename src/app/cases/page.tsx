import CasesList from "@/components/cases-list";
import React from "react";
import css from "./index.module.css";
import HeaderDefault from "@/components/header";
import Footer from "@/components/footer";

const Cases = () => {
  return (
    <div className="wrapper">
      <HeaderDefault />
      <main className={css.main}>
        <CasesList />
      </main>
      <Footer />
    </div>
  );
};
export default Cases;
