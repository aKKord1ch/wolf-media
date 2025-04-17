import React from "react";
import css from "./index.module.css";
import { JSX } from "@emotion/react/jsx-runtime";

interface InnerArray {
  id: number;
  text: string | JSX.Element;
}

interface TimelineRowProps {
  year: string;
  event: InnerArray[];
  keyId: number;
}

export default function TimelineRow({ year, event, keyId }: TimelineRowProps) {
  return (
    <>
      <div className={css.year} key={"timline-row-year" + keyId}>
        <span key={"timline-row-year-span" + keyId}>{year}</span>
      </div>
      <div className={css.middle} key={"timline-row-mid" + keyId}></div>
      <div className={css.event} key={"timline-row-year-event" + keyId}>
        {event.map((item) => (
          <React.Fragment key={item.id}>{item.text}</React.Fragment>
        ))}
      </div>
    </>
  );
}
