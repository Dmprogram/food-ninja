import { createSelector } from '@reduxjs/toolkit'

import { RootState } from '@/hooks/useReduxHooks'

const selectState = (state: RootState) => state

export const selectIsOpenProductModal = createSelector(selectState, (state) => state.productModal.isOpenProductModal)
export const selectProductModal = createSelector(selectState, (state) => state.productModal.productModal)
