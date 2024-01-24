import { TCommonProduct } from '@/redux/features/categoriesSlice/types'

export const deleteOneProductFromCartHelper = (cartProducts: TCommonProduct[], productId: number) => {
  const productIndex = cartProducts.findIndex((el) => el.id === productId)
  if (typeof productIndex === 'number' && productIndex !== -1 && cartProducts) {
    cartProducts[productIndex].quantityInCart! -= 1
    if (cartProducts[productIndex].quantityInCart === 0) {
      cartProducts.splice(productIndex, 1)
    }
  }
  return cartProducts
}
