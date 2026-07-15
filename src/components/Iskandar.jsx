import CheckIcon from './CheckIcon'
import styles from './Iskandar.module.css'

const facts = [
  {
    title: 'Глубокое знание формата ЕГЭ',
    sub: 'Разбирает критерии оценивания — ученики знают, за что теряют баллы',
  },
  {
    title: '7 стобалльников',
    sub: 'Среди его учеников — доказанный результат',
  },
  {
    title: '120+ учеников на 80+ баллов',
    sub: 'Не разовая история — стабильно сильные выпускники',
  },
  {
    title: 'Первое занятие бесплатно',
    sub: 'Оплата постфактум — ученику легко согласиться',
  },
]

export default function Iskandar() {
  return (
    <section className={styles.iskandar}>
      <div className={styles.left}>
        <div className={styles.sectionLabel}>Кого ты рекомендуешь</div>
        <h2 className={styles.h2}>Искандер</h2>
        <p className={styles.desc}>
          23 года, факультет прикладной математики. Знает формат ЕГЭ досконально — разобрал сотни работ и понимает, где именно теряются баллы.
        </p>
        <div className={styles.facts}>
          {facts.map((f) => (
            <div className={styles.fact} key={f.title}>
              <div className={styles.factIcon}>
                <CheckIcon />
              </div>
              <div className={styles.factText}>
                <strong>{f.title}</strong>
                <span>{f.sub}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className={styles.right}>
        <div className={styles.card}>
          <div className={styles.quote}>
            «За 4 года подготовки я видел все типичные ошибки — и знаю, как их закрыть до экзамена»
          </div>
          <div className={styles.metrics}>
            <div>
              <div className={styles.metricVal}>7</div>
              <div className={styles.metricLabel}>стобалльников</div>
            </div>
            <div>
              <div className={styles.metricVal}>120+</div>
              <div className={styles.metricLabel}>учеников на 80+ баллов</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
