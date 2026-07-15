import styles from './Steps.module.css'

const steps = [
  {
    num: '01',
    title: 'Рекомендуешь',
    text: 'Советуешь ученику репетитора по математике ЕГЭ. Пару слов о нём — одна рекомендация.',
  },
  {
    num: '02',
    title: 'Ученик занимается',
    text: 'Он проходит 3 занятия с Искандером. Первое — бесплатно, остальные по 1 500 ₽ постфактум.',
  },
  {
    num: '03',
    title: 'Получаешь выплату',
    text: '2 000 ₽ тебе — сразу после оплаты учеником трёх занятий. Без «закинем попозже» и прочих отговорок.',
  },
]

export default function Steps() {
  return (
    <section className={styles.steps}>
      <div className={styles.sectionLabel}>Как это работает</div>
      <h2 className={styles.h2}>Механика за 3 шага</h2>
      <div className={styles.grid}>
        {steps.map((s) => (
          <div className={styles.step} key={s.num}>
            <div className={styles.stepNum}>{s.num}</div>
            <h3 className={styles.stepTitle}>{s.title}</h3>
            <p className={styles.stepText}>{s.text}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
