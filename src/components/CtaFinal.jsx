import styles from './CtaFinal.module.css'

export default function CtaFinal() {
  return (
    <section className={styles.cta}>
      <div className={styles.bg}>YHP</div>
      <h2 className={styles.h2}>Готов зарабатывать?</h2>
      <p className={styles.sub}>Спишемся в Telegram — обсудим всё за 10 минут</p>
      <a href="https://t.me/lordgeass" className={styles.btn} target="_blank" rel="noreferrer">
        Написать в Telegram →
      </a>
    </section>
  )
}
