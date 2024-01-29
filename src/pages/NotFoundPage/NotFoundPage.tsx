import { Link } from 'react-router-dom'

import styles from './NotFound.module.scss'

import { CustomButton } from '@/components/CustomButton/CustomButton'

export const NotFoundPage = () => (
  <section className={styles['not-found']}>
    <header>
      <h2 className={styles['not-found__header']}>К сожалению, данной страницы не существует</h2>
    </header>
    <Link to='/' className={styles['not-found__link']}>
      <CustomButton title='Перейти на главную' height='50px' />
    </Link>
  </section>
)
