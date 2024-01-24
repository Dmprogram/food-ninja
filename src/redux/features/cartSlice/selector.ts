import { createSelector } from '@reduxjs/toolkit'

import { RootState } from '@/hooks/useReduxHooks'
import { TCommonProduct } from '@/redux/features/categoriesSlice/types'

export const selectCartProducts = (state: RootState) => state.cart.cartProducts
export const selectTotalAmount = (state: RootState) => state.cart.totalAmount

export const selectCartProductById = (productId: number) =>
  createSelector(selectCartProducts, (state) => state.find((product) => product.id === productId) as TCommonProduct)
