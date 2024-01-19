import { NavLink } from 'react-router-dom'

import styles from './CategoriesNavBar.module.css'

import { CartButton } from '@/components/CartButton/CartButton'

export const CategoriesNavBar = () => (
  <div className={styles.container}>
    <nav className={styles.navigationBar}>
      <NavLink
        to='/category-1'
        className={({ isActive }) => (isActive ? styles.navigationBar_linkActive : styles.navigationBar_linkUnactive)}
      >
        <span>Роллы</span>
      </NavLink>
      <NavLink
        to='/category-2'
        className={({ isActive }) => (isActive ? styles.navigationBar_linkActive : styles.navigationBar_linkUnactive)}
      >
        <span>Пицца</span>
      </NavLink>
      <NavLink
        to='/category-3'
        className={({ isActive }) => (isActive ? styles.navigationBar_linkActive : styles.navigationBar_linkUnactive)}
      >
        <span>Сеты роллов</span>
      </NavLink>
      <NavLink
        to='/category-4'
        className={({ isActive }) => (isActive ? styles.navigationBar_linkActive : styles.navigationBar_linkUnactive)}
      >
        <span>Напитки</span>
      </NavLink>
    </nav>
    <div>
      <CartButton />
    </div>
  </div>
)
