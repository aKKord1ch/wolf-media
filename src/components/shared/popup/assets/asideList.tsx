import { POPUP_ASIDE_LIST } from "@/model/popup_aside_list";
import clsx from "clsx";
import React from "react";

interface asideListProps {
   classList: string
   classItem: string
   classActive: string
   step: number
}

export default function AsideList({classActive, classItem, classList, step}: asideListProps) {
  return (
    <ul className={classList}>
      {POPUP_ASIDE_LIST.map((item, index) => (
        <li key={item.id} className={clsx(classItem, { [classActive]: step >= (index + 1) })}>
          {item.text}
        </li>
      ))}
    </ul>
  );
}
