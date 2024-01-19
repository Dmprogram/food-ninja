import Button from '@mui/material/Button'

import { useProductsActions } from '@/hooks/useProductsActions'
import { useAppSelector } from '@/hooks/useReduxHooks'
import { selectCartProductById } from '@/redux/features/cartSlice/selector'

type TButtonChangeCartItems = {
  id: number
}
export const ButtonChangeCartItems = ({ id }: TButtonChangeCartItems) => {
  const { addProductToCart, deleteOneProduct } = useProductsActions()
  const product = useAppSelector(selectCartProductById(id))
  return (
    <div style={{ borderRadius: '20px', backgroundColor: 'rgb(243, 243, 247)', height: '40px', width: '114px' }}>
      <Button
        onClick={deleteOneProduct(id)}
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
      <span style={{ width: '34px', display: 'inline-block', textAlign: 'center' }}>{product?.quantityInCart}</span>
      <Button
        onClick={addProductToCart(id)}
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
