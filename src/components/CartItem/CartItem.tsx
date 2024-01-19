import CloseIcon from '@mui/icons-material/Close'
import { IconButton, Toolbar } from '@mui/material'

import styles from './CartItem.module.css'

import { ButtonChangeCartItems } from '@/components/ButtonChangeCartItems/ButtonChangeCartItems'
import { CartItemLayout } from '@/components/CartItemLayout/CartItemLayout'
import { TCommonProduct } from '@/redux/features/categoriesSlice/types'
import { priceToLocale } from '@/utils/priceToLocale'

export const CartItem = ({ title, size, weightUnit, weight, price, img, id, slug, quantity }: TCommonProduct) => (
  <section className={styles.cartItem}>
    <CartItemLayout
      id={id}
      renderImage={() => <img src={img} alt={title} className={styles.cartItem__image} />}
      renderMainInformationLeft={(title, size, weight, quantity) => (
        <section className={styles.cartItem__mainInformation}>
          {title}
          {size}
          {weight}
          {quantity}
        </section>
      )}
      renderTitle={() => <div className={styles.cartItem__title}>{title}</div>}
      renderSize={() =>
        (size && (
          <div className={styles.cartItem__size}>
            {slug === 'pizza' ? 'Размер:' : null} {size}
          </div>
        )) ||
        null
      }
      renderWeight={() => (
        <div className={styles.cartItem__weight}>
          {weightUnit === 'litres' && 'Объем: '}
          {weight} {(weightUnit === 'grams' && 'гр.') || (weightUnit === 'litres' && 'л.')} {quantity}
          {quantity && ' шт.'}
        </div>
      )}
      renderButton={(_, __, ___, isAdded) => (isAdded ? <ButtonChangeCartItems id={id} /> : null)}
      renderPrice={() => <div className={styles.cartItem__price}>{priceToLocale(price as number)}</div>}
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
            onClick={deleteProduct(id)}
            sx={{ position: 'absolute' }}
          >
            <CloseIcon />
          </IconButton>
        </Toolbar>
      )}
    />
  </section>
)
