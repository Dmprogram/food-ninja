import { changeProductProperties } from './changeProductProperties'
import { findProduct } from './findProduct'

import { TCategoriesArray, TCommonProduct } from '@/redux/features/categoriesSlice/types'

export const addProductToCartHelper = (
  allProducts: TCategoriesArray | null,
  cartProducts: TCommonProduct[],
  productId: number,
  value: string | null,
) => {
  const cartProductsCopy = JSON.parse(JSON.stringify(cartProducts))
  const product = findProduct(productId, allProducts)
  const cartProduct = changeProductProperties(product, value)
  const cartIndex = cartProducts?.findIndex((el) => el?.id === cartProduct!.id)
  if (typeof cartIndex === 'number' && cartIndex !== -1 && cartProducts) {
    console.log(cartProductsCopy)
    cartProductsCopy[cartIndex].quantityInCart! += 1
  } else if (product) {
    cartProduct.quantityInCart = 1
    cartProductsCopy?.push(cartProduct as TCommonProduct)
  }
  return cartProductsCopy
}
