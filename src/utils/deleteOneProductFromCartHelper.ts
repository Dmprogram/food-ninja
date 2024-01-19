import { TCommonProduct } from '@/redux/features/categoriesSlice/types'

export const deleteOneProductFromCartHelper = (cartProducts: TCommonProduct[] | null, productId: number) => {
  const cartProductsCopy = JSON.parse(JSON.stringify(cartProducts))
  const productIndex = cartProducts?.findIndex((el) => el?.id === productId)
  if (typeof productIndex === 'number' && productIndex !== -1 && cartProducts) {
    cartProductsCopy[productIndex].quantityInCart! -= 1
    if (cartProductsCopy[productIndex].quantityInCart === 0) {
      cartProductsCopy.splice(productIndex, 1)
    }
  }
  return cartProductsCopy
}
