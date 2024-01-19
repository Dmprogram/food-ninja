import { TCategoriesArray, TCommonProduct } from '@/redux/features/categoriesSlice/types'

export const findProductForModal = (productId: number, categories: TCategoriesArray | null) => {
  let result: TCommonProduct | null = null
  categories?.forEach((category) => {
    const product = category.data.find((product) => product.id === productId)
    if (product !== undefined) {
      result = product
    }
  })
  return result!
}
