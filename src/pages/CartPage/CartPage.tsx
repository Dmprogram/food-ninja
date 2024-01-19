import { useAutoAnimate } from '@formkit/auto-animate/react'
import { Link, useNavigate } from 'react-router-dom'

import styles from './CartPage.module.css'

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
      <section className={styles.container}>
        <header className={styles.emptyCartsContainer__header}>
          <h1>Корзина</h1>
        </header>
        <section className={styles.emptyCartsContainer}>
          <img
            src='https://demo.foodninja.pro/static/media/empty-cart.d745a220.svg'
            alt='Кот'
            style={{ maxWidth: '150px' }}
          />
          <div style={{ fontSize: '26px', fontWeight: 700, marginBottom: '8px' }}>Ой, пусто!</div>
          <div style={{ fontSize: '16px', fontWeight: 500, marginBottom: '16px' }}>Добавьте товары в корзину.</div>
          <Link to='/' className={styles.emptyCartsContainer__link}>
            Вернуться к меню
          </Link>
        </section>
      </section>
    )
  }
  return (
    <section className={styles.container}>
      <header className={styles.container__header}>
        <h1>Корзина</h1>
      </header>
      <section className={styles.cartsContainer}>
        <header className={styles.cartsContainer__header}>
          <h2>Ваш заказ</h2>
        </header>
        <div ref={parent}>
          {cartProducts.map((cartItem) => (
            <CartItem key={cartItem.id} {...cartItem} />
          ))}
        </div>
      </section>
      <div className={styles.totalPriceContainer}>
        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
          Итого: <span className={styles.totalPriceContainer__totalPrice}>{priceToLocale(totalAmount as number)}</span>
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
