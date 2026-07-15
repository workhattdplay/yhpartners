import { useState, useRef, useCallback, useEffect } from 'react'
import reviewArtem from '../assets/review-artem.jpg'
import reviewBogdan from '../assets/review-bogdan.jpg'
import styles from './Reviews.module.css'

const reviews = [
  {
    img: 'https://optim.tildacdn.pub/tild3061-6538-4431-a134-343664326537/-/format/webp/IMG_5018.jpeg.webp',
    name: 'Альбина',
    sub: 'Сдала ЕГЭ по математике на 100 баллов',
    badge: 'Ученик',
  },
  {
    img: 'https://optim.tildacdn.pub/tild3539-3731-4732-b431-623233363534/-/format/webp/IMG_5017.png.webp',
    name: 'Александр',
    sub: 'Сдал ЕГЭ по математике на 100 баллов',
    badge: 'Ученик',
  },
  {
    img: 'https://optim.tildacdn.pub/tild3839-3265-4664-b961-336230363830/-/format/webp/photo_2026-06-01_14-.jpg.webp',
    name: 'Марина · Мама Маши',
    sub: 'Рада за пятёрку Маши по ВПР',
    badge: 'Родитель',
  },
  {
    img: reviewBogdan,
    name: 'Богдан',
    sub: 'Сдал профильную математику на 90 баллов — «без тебя мне и 70 не светило бы»',
    badge: 'Ученик',
  },
  {
    img: reviewArtem,
    name: 'Валентина · Мама Артёма',
    sub: 'Сын сдал профильную математику на 87 баллов — с 50–60 в начале года',
    badge: 'Родитель',
  },
]

function getVisible() {
  if (typeof window === 'undefined') return 3
  if (window.innerWidth <= 700) return 1
  if (window.innerWidth <= 900) return 2
  return 3
}

export default function Reviews() {
  const [current, setCurrent] = useState(0)
  const [visible, setVisible] = useState(getVisible)
  const trackRef = useRef(null)
  const startXRef = useRef(0)

  const total = reviews.length
  const pages = Math.max(1, total - visible + 1)

  useEffect(() => {
    const onResize = () => {
      const v = getVisible()
      setVisible(v)
      setCurrent(0)
    }
    window.addEventListener('resize', onResize)
    return () => window.removeEventListener('resize', onResize)
  }, [])

  const goTo = useCallback(
    (idx) => setCurrent(Math.max(0, Math.min(idx, pages - 1))),
    [pages]
  )

  const cardWidth = visible === 1 ? 260 : 300
  const gap = 16
  const offset = current * (cardWidth + gap)

  const onTouchStart = (e) => { startXRef.current = e.touches[0].clientX }
  const onTouchEnd = (e) => {
    const dx = startXRef.current - e.changedTouches[0].clientX
    if (Math.abs(dx) > 40) goTo(current + (dx > 0 ? 1 : -1))
  }

  const counterStr = (current + 1).toString().padStart(2, '0')

  return (
    <div className={styles.section}>
      <div className={styles.top}>
        <div>
          <div className={styles.sectionLabel}>Отзывы учеников</div>
          <div className={styles.h2}>
            Говорят<br />ученики
          </div>
        </div>
        <div className={styles.counter}>{counterStr}</div>
      </div>

      <div className={styles.trackWrap}>
        <div
          ref={trackRef}
          className={styles.track}
          style={{ transform: `translateX(-${offset}px)` }}
          onTouchStart={onTouchStart}
          onTouchEnd={onTouchEnd}
        >
          {reviews.map((r) => (
            <div className={styles.card} key={r.name}>
              <div className={styles.phoneBar}>
                <div className={styles.phoneDot} />
                <div className={styles.phoneName}>Telegram · скриншот переписки</div>
              </div>
              <div className={styles.imgWrap}>
                <img src={r.img} alt={r.name} />
              </div>
              <div className={styles.cardFooter}>
                <div className={styles.person}>
                  <strong>{r.name}</strong>
                  <span>{r.sub}</span>
                </div>
                <div className={styles.badge}><span>{r.badge}</span></div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className={styles.nav}>
        <div className={styles.dots}>
          {Array.from({ length: pages }).map((_, i) => (
            <button
              key={i}
              className={`${styles.dot} ${i === current ? styles.dotActive : ''}`}
              onClick={() => goTo(i)}
              aria-label={`Слайд ${i + 1}`}
            />
          ))}
        </div>
        <div className={styles.arrows}>
          <button className={styles.arrow} onClick={() => goTo(current - 1)} aria-label="Назад">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
              <path d="M15 18l-6-6 6-6" stroke="#E42340" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
          <button className={styles.arrow} onClick={() => goTo(current + 1)} aria-label="Вперёд">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
              <path d="M9 18l6-6-6-6" stroke="#E42340" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  )
}
