import Image from "next/image";
import css from "./index.module.css";

interface MailItemProps {
  mail: string;
  subtitle?: string;
}

export default function MailItem({ mail, subtitle }: MailItemProps) {
  const sub = <span className={css.under_title}>{subtitle}</span>;

  return (
    <figure className={css.mail_item__container}>
      <Image
        width={10}
        height={10}
        src="/sections/q_n_a/arrow.svg"
        alt="arrow"
      />
      <figcaption>
        <span className={css.email}>{mail}</span>
        {subtitle ? sub : ""}
      </figcaption>
    </figure>
  );
}
