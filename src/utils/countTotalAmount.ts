import { TCommonProduct } from '@/redux/features/categoriesSlice/types'

export const countTotalAmount = (cartProducts: TCommonProduct[]) =>
  cartProducts.reduce((acc, item) => acc + item.price! * item.quantityInCart!, 0)
