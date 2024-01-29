import { useAutoAnimate } from '@formkit/auto-animate/react'
import { Link, useNavigate } from 'react-router-dom'

import styles from './CartPage.module.scss'

import { CartItem } from '@/components/CartItem/CartItem'
import { CustomButton } from '@/components/CustomButton/CustomButton'
import { useAppSelector } from '@/hooks/useReduxHooks'
import { selectCartProducts, selectTotalAmount } from '@/redux/features/cartSlice/selector'

import { priceToLocale } from '@/utils/priceToLocale'

export const CartPage = () => {
  const cartProducts = useAppSelector(selectCartProducts)
  const totalAmount = useAppSelector(selectTotalAmount)
  const navigate = useNavigate()
  const handleClick = () => {
    navigate('/ordering')
  }
  const [parent, enableAnimations] = useAutoAnimate({
    duration: 300,
    easing: 'ease-in',
    disrespectUserMotionPreference: false,
  })
  if (cartProducts.length === 0) {
    enableAnimations(false)
  } else {
    enableAnimations(true)
  }

  if (cartProducts.length === 0) {
    return (
      <section className={styles.cart}>
        <header>
          <h1 className={styles.cart__header}>Корзина</h1>
        </header>
        <div className={styles.cart__empty}>
          <img
            src='https://demo.foodninja.pro/static/media/empty-cart.d745a220.svg'
            alt='Кот'
            className={styles['cart__empty-image']}
          />
          <h4 className={styles['cart__empty-header']}>Ой, пусто!</h4>
          <div className={styles['cart__empty-text']}>Добавьте товары в корзину.</div>
          <Link to='/' className={styles['cart__empty-link']}>
            Вернуться к меню
          </Link>
        </div>
      </section>
    )
  }
  return (
    <section className={styles.cart}>
      <header className={styles.cart__header}>
        <h1>Корзина</h1>
      </header>
      <section className={styles.cart__items}>
        <header>
          <h2 className={styles['cart__items-header']}>Ваш заказ</h2>
        </header>
        <div ref={parent}>
          {cartProducts.map((cartItem) => (
            <CartItem key={cartItem.id} {...cartItem} />
          ))}
        </div>
      </section>
      <div className={styles.cart__finish}>
        <div className={styles['cart__finish-price']}>
          Итого: <span>{priceToLocale(totalAmount as number)}</span>
        </div>
        <CustomButton
          onClick={handleClick}
          minWidth='230px'
          title='К оформлению заказа'
          fontSize='16px'
          padding='6px 20px'
        />
      </div>
    </section>
  )
}
