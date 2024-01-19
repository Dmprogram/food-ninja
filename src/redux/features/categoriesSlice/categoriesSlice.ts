import { PayloadAction, createSlice, current } from '@reduxjs/toolkit'

import { fetchCategories } from '@/redux/features/categoriesSlice/categoriesActions'
import { TCategoriesState } from '@/redux/features/categoriesSlice/types'
import { findProductForModal } from '@/utils/findProductForModal'

const initialState: TCategoriesState = {
  loading: 'idle',
  error: null,
  categories: null,
  isOpenModal: false,
  productForModal: null,
}
export const categoriesSlice = createSlice({
  name: 'categories',
  initialState,
  reducers: {
    resetState: () => initialState,
    setIsOpenModal: (state, action: PayloadAction<{ isOpenModal: boolean; productModalId: number | null }>) => {
      state.isOpenModal = action.payload.isOpenModal
      const { productModalId } = action.payload
      if (productModalId && state.categories) {
        state.productForModal = findProductForModal(productModalId, current(state.categories))
      }
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchCategories.pending, (state) => {
        state.loading = 'pending'
        state.error = null
      })
      .addCase(fetchCategories.fulfilled, (state, action) => {
        state.loading = 'succeeded'
        state.error = null
        state.categories = action.payload
      })
      .addCase(fetchCategories.rejected, (state, action) => {
        state.loading = 'failed'
        state.error = action.payload
      })
  },
})

export const categoriesActions = categoriesSlice.actions
export const categoriesReducer = categoriesSlice.reducer
