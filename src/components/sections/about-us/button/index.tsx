import clsx from 'clsx';
import css from './index.module.css'
import global from '@/app/globals.module.css'

export default function Button() {
  return (
    <button className={clsx(css.button, global.hovered_button)}>
      <span>подробнее</span>
    </button>
  );
}
