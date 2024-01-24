import { TCommonProduct } from '@/redux/features/categoriesSlice/types'

export const changeProductProperties = (product: TCommonProduct, option: string | null) => {
  if (!option) {
    return { ...product }
  }
  let id
  let size
  let price
  let weight
  let quantityInCart
  if (option === 'first' && product.variants) {
    id = product.variants[0].id
    size = product.variants[0].size
    price = product.variants[0].price
    weight = product.variants[0].weight
    quantityInCart = product.variants[0].quantityInCart
  }
  if (option === 'second' && product.variants) {
    id = product.variants[1].id
    size = product.variants[1].size
    price = product.variants[1].price
    weight = product.variants[1].weight
    quantityInCart = product.variants[1].quantityInCart
  }
  return {
    id: id!,
    price,
    weight,
    size,
    quantityInCart,
    title: product.title,
    slug: product.slug,
    description: product.description,
    weightUnit: product.weightUnit,
    img: product.img,
    currency: product.currency,
    hasVariants: product.hasVariants,
  }
}
