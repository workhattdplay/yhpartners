import styles from './Nav.module.css'

export default function Nav() {
  return (
    <nav className={styles.nav}>
      <div className={styles.logo}>
        Young Hustle <span>Partners</span>
      </div>
      <a href="https://t.me/lordgeass" className={styles.cta} target="_blank" rel="noreferrer">
        Стать партнёром
      </a>
    </nav>
  )
}
