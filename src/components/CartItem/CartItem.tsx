import CloseIcon from '@mui/icons-material/Close'
import { IconButton, Toolbar } from '@mui/material'

import styles from './CartItem.module.css'

import { ButtonChangeCartItems } from '@/components/ButtonChangeCartItems/ButtonChangeCartItems'
import { CartItemLayout } from '@/components/CartItemLayout/CartItemLayout'
import { TCommonProduct } from '@/redux/features/categoriesSlice/types'
import { priceToLocale } from '@/utils/priceToLocale'

export const CartItem = (cartItem: TCommonProduct) => (
  <section className={styles.cartItem}>
    <CartItemLayout
      id={cartItem.id}
      renderImage={() => <img src={cartItem.img} alt={cartItem.title} className={styles.cartItem__image} />}
      renderMainInformationLeft={(title, size, weight, quantity) => (
        <section className={styles.cartItem__mainInformation}>
          {title}
          {size}
          {weight}
          {quantity}
        </section>
      )}
      renderTitle={() => <div className={styles.cartItem__title}>{cartItem.title}</div>}
      renderSize={() =>
        (cartItem.size && (
          <div className={styles.cartItem__size}>
            {cartItem.slug === 'pizza' ? 'Размер:' : null} {cartItem.size}
          </div>
        )) ||
        null
      }
      renderWeight={() => (
        <div className={styles.cartItem__weight}>
          {cartItem.weightUnit === 'litres' && 'Объем: '}
          {cartItem.weight} {(cartItem.weightUnit === 'grams' && 'гр.') || (cartItem.weightUnit === 'litres' && 'л.')}{' '}
          {cartItem.quantity}
          {cartItem.quantity && ' шт.'}
        </div>
      )}
      renderButton={(_, __, ___, isAdded) => (isAdded ? <ButtonChangeCartItems {...cartItem} /> : null)}
      renderPrice={() => (
        <div className={styles.cartItem__price}>{priceToLocale(cartItem.price! * cartItem.quantityInCart!)}</div>
      )}
      renderDeleteProduct={(deleteProduct) => (
        <Toolbar
          sx={{
            position: 'absolute',
            right: 5,
          }}
        >
          <IconButton
            edge='end'
            color='inherit'
            aria-label='close'
            onClick={() => deleteProduct(cartItem.id)}
            sx={{ position: 'absolute' }}
          >
            <CloseIcon />
          </IconButton>
        </Toolbar>
      )}
    />
  </section>
)
