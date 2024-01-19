import { PayloadAction, createSlice } from '@reduxjs/toolkit'

import { TCartState } from './types'

import { TCommonProduct } from '@/redux/features/categoriesSlice/types'

const initialState: TCartState = {
  cartProducts: [],
  totalAmount: null,
}
export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addProductToCart: (state, action: PayloadAction<TCommonProduct[]>) => {
      state.cartProducts = action.payload
    },

    deleteOneProductFromCart: (state, action: PayloadAction<TCommonProduct[]>) => {
      state.cartProducts = action.payload
    },

    deleteProductFromCart: (state, action: PayloadAction<TCommonProduct[]>) => {
      state.cartProducts = action.payload
    },
    addTotalAmount: (state, action: PayloadAction<number>) => {
      state.totalAmount = action.payload
    },
    resetState: () => initialState,
  },
})

export const cartActions = cartSlice.actions
export const cartReducer = cartSlice.reducer
