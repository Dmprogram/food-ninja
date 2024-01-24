import { PayloadAction, createSlice } from '@reduxjs/toolkit'

import { TCommonProduct } from '@/redux/features/categoriesSlice/types'
import { TProductModalState } from '@/redux/features/productModalSlice/types'

const initialState: TProductModalState = {
  isOpenProductModal: false,
  productModal: null,
}

export const productModalSlice = createSlice({
  name: 'productModal',
  initialState,
  reducers: {
    setIsOpenModal: (state, action: PayloadAction<{ product: TCommonProduct | null; isOpenProductModal: boolean }>) => {
      state.isOpenProductModal = action.payload.isOpenProductModal
      state.productModal = action.payload.product
    },
  },
})
export const productModalActions = productModalSlice.actions

export const productModalReducer = productModalSlice.reducer
