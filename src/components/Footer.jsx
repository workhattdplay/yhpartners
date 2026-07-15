import styles from './Footer.module.css'

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.logo}>Young Hustle Partners</div>
      <div className={styles.note}>© 2026 · Партнёрская сеть платных рекомендаций</div>
    </footer>
  )
}
