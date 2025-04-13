import css from "./index.module.css";

interface MailItemProps {
  mail: string;
  subtitle?: string;
}

export default function MailItem({ mail, subtitle }: MailItemProps) {
  const sub = <span className={css.under_title}>{subtitle}</span>;

  return (
    <figure className={css.mail_item__container}>
      <img src="/sections/q_n_a/arrow.svg" alt="arrow" />
      <figcaption>
        <span className={css.email}>
         {mail}
        </span>
        {subtitle ? sub : ""}
      </figcaption>
    </figure>
  );
}
