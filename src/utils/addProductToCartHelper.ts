import { changeProductProperties } from './changeProductProperties'

import { TCommonProduct } from '@/redux/features/categoriesSlice/types'

export const addProductToCartHelper = (
  cartProducts: TCommonProduct[],
  product: TCommonProduct,
  option: string | null,
) => {
  const cartProduct = changeProductProperties(product, option)
  const cartIndex = cartProducts?.findIndex((el) => el.id === cartProduct!.id)
  if (cartIndex !== -1) {
    cartProducts[cartIndex].quantityInCart! += 1
  } else {
    cartProduct.quantityInCart = 1
    cartProducts.push(cartProduct)
  }
  return cartProducts
}
