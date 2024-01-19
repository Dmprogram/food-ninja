import { createSelector } from '@reduxjs/toolkit'

import { RootState } from '@/hooks/useReduxHooks'

export const selectCartProducts = (state: RootState) => state.cart.cartProducts
export const selectTotalAmount = (state: RootState) => state.cart.totalAmount

export const selectCartProductById = (productId: number | null) =>
  createSelector(selectCartProducts, (state) => state?.find((product) => product?.id === productId))
