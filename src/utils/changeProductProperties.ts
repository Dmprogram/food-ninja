import { TCommonProduct, TVariant } from '@/redux/features/categoriesSlice/types'

export const changeProductProperties = (product: TCommonProduct | TVariant, value: string | null) => {
  if (!value) {
    return { ...product }
  }
  if ('hasVariants' in product) {
    let id
    let size
    let price
    let weight
    let quantityInCart
    if (value === 'first' && product.variants) {
      id = product.variants[0].id
      size = product.variants[0].size
      price = product.variants[0].price
      weight = product.variants[0].weight
      quantityInCart = product.variants[0].quantityInCart
    }
    if (value === 'second' && product.variants) {
      id = product.variants[1].id
      size = product.variants[1].size
      price = product.variants[1].price
      weight = product.variants[1].weight
      quantityInCart = product.variants[1].quantityInCart
    }
    return {
      id: id as number,
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
    }
  }

  return { ...product }
}
