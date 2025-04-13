import { Q_N_A__MAIL_LIST } from '@/model/q_n_a'
import css from './index.module.css'
import MailItem from '@/components/shared/mail'

export default function Mails() {
  return (
   <ul className={css.list}>
      {Q_N_A__MAIL_LIST.map((item,index) => (
         <li className={css.list_item} key={index}>
               <MailItem mail='aa@wolfmedia.team' subtitle={item.subtitle} key={index} />
         </li>
      ))}
   </ul>
)
}
