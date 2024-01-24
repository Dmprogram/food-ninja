import { TCommonProduct } from '@/redux/features/categoriesSlice/types'

export type TProductModalState = {
  isOpenProductModal: boolean
  productModal: TCommonProduct | null
}
