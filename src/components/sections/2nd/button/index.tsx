import css from './index.module.css'

export default function Button() {
  return (
    <button className={css.button}>
      <span>подробнее</span>
    </button>
  );
}
