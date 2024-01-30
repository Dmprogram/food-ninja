import CloseIcon from '@mui/icons-material/Close'
import { IconButton, Toolbar } from '@mui/material'

import styles from './CartItem.module.scss'

import { ButtonChangeCartItems } from '@/components/ButtonChangeCartItems/ButtonChangeCartItems'
import { CartItemLayout } from '@/components/CartItemLayout/CartItemLayout'
import { TCommonProduct } from '@/redux/features/categoriesSlice/types'
import { priceToLocale } from '@/utils/priceToLocale'

export const CartItem = (cartItem: TCommonProduct) => (
  <section className={styles['cart-item']}>
    <CartItemLayout
      id={cartItem.id}
      renderImage={() => <img src={cartItem.img} alt={cartItem.title} className={styles['cart-item__image']} />}
      renderMainInformationLeft={(title, size, weight, quantity) => (
        <section className={styles['cart-item__main-information']}>
          {title}
          {size}
          {weight}
          {quantity}
        </section>
      )}
      renderTitle={() => <div className={styles['cart-item__title']}>{cartItem.title}</div>}
      renderSize={() =>
        cartItem.size ? (
          <div className={styles['cart-item__size']}>
            {cartItem.slug === 'pizza' ? 'Размер:' : null} {cartItem.size}
          </div>
        ) : null
      }
      renderWeight={() => (
        <div>
          <span className={styles['cart-item__weight']}>
            {cartItem.weightUnit === 'litres' && 'Объем: '}
            {cartItem.weight} {(cartItem.weightUnit === 'grams' && 'гр.') || (cartItem.weightUnit === 'litres' && 'л.')}
          </span>
          <span className={styles['cart-item__quantity']}>
            {cartItem.quantity}
            {cartItem.quantity && ' шт.'}
          </span>
        </div>
      )}
      renderButton={(_, __, ___, isAdded) => (isAdded ? <ButtonChangeCartItems {...cartItem} /> : null)}
      renderPrice={() => (
        <div className={styles['cart-item__price']}>{priceToLocale(cartItem.price! * cartItem.quantityInCart!)}</div>
      )}
      renderDeleteProduct={(deleteProduct) => (
        <Toolbar className={styles['cart-item__delete-icon']}>
          <IconButton edge='end' color='inherit' aria-label='close' onClick={() => deleteProduct(cartItem.id)}>
            <CloseIcon />
          </IconButton>
        </Toolbar>
      )}
    />
  </section>
)
