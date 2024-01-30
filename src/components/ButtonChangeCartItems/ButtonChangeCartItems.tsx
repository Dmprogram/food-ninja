import Button from '@mui/material/Button'

import styles from './ButtonChangeCartItems.module.scss'

import { useProductsActions } from '@/hooks/useProductsActions'
import { useAppSelector } from '@/hooks/useReduxHooks'
import { selectCartProductById } from '@/redux/features/cartSlice/selector'
import { TCommonProduct } from '@/redux/features/categoriesSlice/types'

export const ButtonChangeCartItems = (product: TCommonProduct) => {
  const { addProductToCart, deleteOneProduct } = useProductsActions()
  const { quantityInCart } = useAppSelector(selectCartProductById(product.id))
  return (
    <div className={styles.quantity}>
      <Button onClick={() => deleteOneProduct(product.id)} variant='text' className={styles.quantity__button_decrease}>
        -
      </Button>
      <span className={styles.quantity__text}>{quantityInCart}</span>
      <Button onClick={() => addProductToCart(product)} variant='text' className={styles.quantity__button_increase}>
        +
      </Button>
    </div>
  )
}
