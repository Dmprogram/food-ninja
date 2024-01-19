import category1 from '@/mocks/category-1.json'
import category2 from '@/mocks/category-2.json'
import category3 from '@/mocks/category-3.json'
import category4 from '@/mocks/category-4.json'
import { TCategoriesArray } from '@/redux/features/categoriesSlice/types'

const response = (data: TCategoriesArray): Promise<TCategoriesArray> =>
  new Promise((resolve) => {
    setTimeout(() => {
      resolve(data)
    }, 1000)
  })

export const getProducts = () => response([category1, category2, category3, category4])
