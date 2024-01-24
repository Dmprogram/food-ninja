import Button from '@mui/material/Button'

import { useProductsActions } from '@/hooks/useProductsActions'
import { useAppSelector } from '@/hooks/useReduxHooks'
import { selectCartProductById } from '@/redux/features/cartSlice/selector'
import { TCommonProduct } from '@/redux/features/categoriesSlice/types'

export const ButtonChangeCartItems = (product: TCommonProduct) => {
  const { addProductToCart, deleteOneProduct } = useProductsActions()
  const { quantityInCart } = useAppSelector(selectCartProductById(product.id))
  return (
    <div style={{ borderRadius: '20px', backgroundColor: 'rgb(243, 243, 247)', height: '40px', width: '114px' }}>
      <Button
        onClick={() => deleteOneProduct(product.id)}
        variant='text'
        sx={{
          color: '#999',
          height: '40px',
          maxWidth: '10px',
          borderTopLeftRadius: '20px',
          borderBottomLeftRadius: '20px',
          borderTopRightRadius: '0',
          borderBottomRightRadius: '0',
          minWidth: '40px',
          ':hover': {
            backgroundColor: '#ff5722',
            color: 'white',
          },
        }}
        aria-setsize={20}
      >
        -
      </Button>
      <span style={{ width: '34px', display: 'inline-block', textAlign: 'center' }}>{quantityInCart}</span>
      <Button
        onClick={() => addProductToCart(product)}
        variant='text'
        sx={{
          color: '#999',
          height: '40px',
          width: '10px',
          borderTopRightRadius: '20px',
          borderBottomRightRadius: '20px',
          borderTopLeftRadius: '0',
          borderBottomLeftRadius: '0',
          minWidth: '40px',
          ':hover': {
            backgroundColor: '#ff5722',
            color: 'white',
          },
        }}
      >
        +
      </Button>
    </div>
  )
}
