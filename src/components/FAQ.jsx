import { useState } from 'react'
import styles from './FAQ.module.css'

const items = [
  {
    q: 'Как получаю деньги?',
    a: 'На карту после того, как ученик оплатил 3 занятия. Выплачиваем сразу, без задержек.',
  },
  {
    q: 'Что если ученик уйдёт после первого занятия?',
    a: 'Выплата — за 3 оплаченных занятия. Первое бесплатно — притягательность у Искандера высокая, большинство остаются.',
  },
  {
    q: 'Нужно ли заключать договор?',
    a: 'Без бумаг и прочего. Договариваемся за 10 минут в Telegram.',
  },
  {
    q: 'Сколько учеников можно привести?',
    a: 'Без ограничений. Каждый приведённый ученик — отдельная выплата. Потолка нет.',
  },
]

export default function FAQ() {
  const [open, setOpen] = useState(null)

  const toggle = (i) => setOpen(open === i ? null : i)

  return (
    <section className={styles.faq}>
      <div className={styles.inner}>
        <div className={styles.sectionLabel}>Вопросы</div>
        <h2 className={styles.h2}>Всё по делу</h2>
        {items.map((item, i) => (
          <div className={styles.item} key={i}>
            <button
              className={styles.question}
              onClick={() => toggle(i)}
              aria-expanded={open === i}
            >
              {item.q}
              <span className={`${styles.icon} ${open === i ? styles.iconOpen : ''}`}>＋</span>
            </button>
            <div className={`${styles.answer} ${open === i ? styles.answerOpen : ''}`}>
              {item.a}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
