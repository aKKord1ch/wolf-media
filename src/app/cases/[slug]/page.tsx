"use client";

import { Detail, getDetail } from "@/helpers/cases/getDetail";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";

import css from "./index.module.css";
import global from "@/app/globals.module.css";

import DetailItem from "@/components/shared/cases-detail";
import clsx from "clsx";

export default function Slug() {
  const [detail, setDetail] = useState<Detail | undefined>(undefined);
  const { slug } = useParams();

  useEffect(() => {
    document.body.style.overflow = "hidden";

    const fetchedData = async (slug: any) => {
      const data: Detail = await getDetail(slug);
      setDetail(data);
    };

    fetchedData(slug);
  }, []);

  if (!detail) return <div>Loading...</div>;

  return (
    <main className={css.main}>
      <section className={clsx(global.container, css.section)}>
        {detail && <DetailItem data={detail} index={0} className={css.item} />}
      </section>
    </main>
  );
}
