import { JSX } from "@emotion/react/jsx-runtime";
import css from "./index.module.css";

interface TimelineRowProps {
  year: string;
  event: Array<string|JSX.Element>;
}

export default function TimelineRow({ year, event }: TimelineRowProps) {
  return (
    <>
      <div className={css.year}>
        <span>{year}</span>
      </div>
      <div className={css.middle}></div>
      <div className={css.event}>{event}</div>
    </>
  );
}
