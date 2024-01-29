import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

import styles from './CartButton.module.scss'

import { useAppDispatch, useAppSelector } from '@/hooks/useReduxHooks'

import { cartActions } from '@/redux/features/cartSlice/cartSlice'
import { selectCartProducts, selectTotalAmount } from '@/redux/features/cartSlice/selector'
import { countTotalAmount } from '@/utils/countTotalAmount'
import { priceToLocale } from '@/utils/priceToLocale'
import shoppingCart from '@assets/shopping-cart.png'

export const CartButton = () => {
  const dispatch = useAppDispatch()
  const cartProducts = useAppSelector(selectCartProducts)
  const totalPrice = countTotalAmount(cartProducts)
  const totalAmount = useAppSelector(selectTotalAmount)

  useEffect(() => {
    dispatch(cartActions.addTotalAmount(totalPrice))
  }, [totalPrice])

  const navigate = useNavigate()
  return (
    <button type='button' className={styles['cart-button']} onClick={() => navigate('/cart')}>
      <img className={styles['cart-button__image']} src={shoppingCart} alt='Корзина' />
      <span className={styles['cart-button__total-amount']}>{totalAmount && priceToLocale(totalAmount)}</span>
    </button>
  )
}
