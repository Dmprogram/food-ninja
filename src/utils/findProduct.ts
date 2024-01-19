import { TCategoriesArray, TCommonProduct, TVariant } from '@/redux/features/categoriesSlice/types'

export const findProduct = (productId: number, categories: TCategoriesArray | null) => {
  let result: TCommonProduct | TVariant | undefined

  categories?.forEach((category) => {
    for (let i = 0; i < category.data.length; i++) {
      const product = category.data[i]
      if (product.id === productId) {
        result = product
        break
      } else if (product.variants) {
        for (let j = 0; j < product.variants.length; j++) {
          const variant = product.variants[j]
          if (variant.id === productId) {
            result = variant
            break
          }
        }
      }
    }
  })
  return result!
}
