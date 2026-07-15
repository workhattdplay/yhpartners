import styles from './Hero.module.css'

export default function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.heroBg} />
      <div className={styles.heroLine} />
      <div className={styles.heroNumber}>2K</div>

      <div className={styles.heroContent}>
        <div className={styles.heroTag}>Партнёрская программа</div>
        <h1 className={styles.h1}>
          Рекомендуй.<br />
          <em>Зарабатывай.</em>
        </h1>
        <p className={styles.heroSub}>
          Рекомендуй лучшего репетитора по математике ЕГЭ — и получай 2&nbsp;000&nbsp;₽
          с каждого ученика. Без вложений и лишней работы.
        </p>
        <div className={styles.heroActions}>
          <a href="https://t.me/lordgeass" className={styles.btnPrimary} target="_blank" rel="noreferrer">
            Стать партнёром →
          </a>
        </div>
      </div>

      <div className={styles.heroStats}>
        <div className={styles.heroStat}>
          <div className={styles.heroStatNum}>120+</div>
          <div className={styles.heroStatLabel}>учеников на 80+ баллов</div>
        </div>
        <div className={styles.heroStat}>
          <div className={styles.heroStatNum}>7</div>
          <div className={styles.heroStatLabel}>стобалльников</div>
        </div>
      </div>
    </section>
  )
}
