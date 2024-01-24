import { PayloadAction, createSlice } from '@reduxjs/toolkit'

import { TCartState } from './types'

import { TCommonProduct } from '@/redux/features/categoriesSlice/types'
import { addProductToCartHelper } from '@/utils/addProductToCartHelper'
import { deleteOneProductFromCartHelper } from '@/utils/deleteOneProductFromCartHelper'
import { deleteteProductFromCartHelper } from '@/utils/deleteteProductFromCartHelper'

const initialState: TCartState = {
  cartProducts: [],
  totalAmount: null,
}
export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addProductToCart: (state, action: PayloadAction<{ product: TCommonProduct; option: string | null }>) => {
      state.cartProducts = addProductToCartHelper(state.cartProducts, action.payload.product, action.payload.option)
    },

    deleteOneProductFromCart: (state, action: PayloadAction<number>) => {
      state.cartProducts = deleteOneProductFromCartHelper(state.cartProducts, action.payload)
    },

    deleteProductFromCart: (state, action: PayloadAction<number>) => {
      state.cartProducts = deleteteProductFromCartHelper(state.cartProducts, action.payload)
    },
    addTotalAmount: (state, action: PayloadAction<number>) => {
      state.totalAmount = action.payload
    },
    resetState: () => initialState,
  },
})

export const cartActions = cartSlice.actions
export const cartReducer = cartSlice.reducer
