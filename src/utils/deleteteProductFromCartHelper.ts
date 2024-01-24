import { TCommonProduct } from '@/redux/features/categoriesSlice/types'

export const deleteteProductFromCartHelper = (cartProducts: TCommonProduct[], productId: number) => {
  const productIndex = cartProducts.findIndex((el) => el.id === productId)
  if (typeof productIndex === 'number' && productIndex !== -1 && cartProducts) {
    cartProducts.splice(productIndex, 1)
  }
  return cartProducts
}
