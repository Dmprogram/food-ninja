import { TCommonProduct } from '../categoriesSlice/types'

export type TCartState = {
  cartProducts: Array<TCommonProduct>
  totalAmount: number | null
}
