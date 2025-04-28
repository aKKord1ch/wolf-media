import css from "./index.module.css";

export function TransactionLoader() {
  return (
    <div className={css.loader}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 52 52"
        className={css.checkmark_icon}
      >
        <path
          fill="none"
          stroke="currentColor"
          strokeWidth="5"
          strokeLinecap="round"
          d="M14 27 l10 10 l20 -20"
        />
      </svg>
    </div>
  );
}
