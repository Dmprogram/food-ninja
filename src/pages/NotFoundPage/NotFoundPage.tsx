import { Link } from 'react-router-dom'

import styles from './NotFound.module.css'

export const NotFoundPage = () => (
  <h2 className={styles.notFound}>
    К сожалению, данной страницы не существует
    <Link to='/' className={styles.notFound__link}>
      <button type='button' className={styles.notFound__button}>
        Перейти на главную
      </button>
    </Link>
  </h2>
)
