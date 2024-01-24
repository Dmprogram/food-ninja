import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

import styles from './CartButton.module.css'

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
    <button type='button' className={styles.button} onClick={() => navigate('/cart')}>
      <img className={styles.button__image} src={shoppingCart} alt='Корзина' />
      <span className={styles.button__totalAmount}>{totalAmount && priceToLocale(totalAmount)}</span>
    </button>
  )
}
