import css from "./index.module.css";

interface Inner {
  id: number;
  src: string;
  metaAlt: string;
  metaTitle: string;
  title: string;
}

export interface InnerComunitiesProps {
  inner: Array<Inner>;
}

export default function InnerComunities({ inner }: InnerComunitiesProps) {
  return (
    <dialog className={css.dialog}>
      <ul className={css.list}>
        {inner.map((item) => (
          <li className={css.list_item} key={item.id}>
            <img src={item.src} alt={item.metaAlt} title={item.metaTitle} />
            <span>{item.title}</span>
          </li>
        ))}
      </ul>
    </dialog>
  );
}
