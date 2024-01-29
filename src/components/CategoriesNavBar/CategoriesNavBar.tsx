import { NavLink } from 'react-router-dom'

import styles from './CategoriesNavBar.module.scss'

import { CartButton } from '@/components/CartButton/CartButton'

export const CategoriesNavBar = () => (
  <section className={styles.categories}>
    <nav className={styles.categories__nav}>
      <NavLink
        to='/category-1'
        className={({ isActive }) =>
          isActive ? styles['categories__nav-link_active'] : styles['categories__nav-link_unactive']
        }
      >
        <span>Роллы</span>
      </NavLink>
      <NavLink
        to='/category-2'
        className={({ isActive }) =>
          isActive ? styles['categories__nav-link_active'] : styles['categories__nav-link_unactive']
        }
      >
        <span>Пицца</span>
      </NavLink>
      <NavLink
        to='/category-3'
        className={({ isActive }) =>
          isActive ? styles['categories__nav-link_active'] : styles['categories__nav-link_unactive']
        }
      >
        <span>Сеты роллов</span>
      </NavLink>
      <NavLink
        to='/category-4'
        className={({ isActive }) =>
          isActive ? styles['categories__nav-link_active'] : styles['categories__nav-link_unactive']
        }
      >
        <span>Напитки</span>
      </NavLink>
    </nav>
    <CartButton />
  </section>
)
