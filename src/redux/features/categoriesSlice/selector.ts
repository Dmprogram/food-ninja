import { createSelector } from '@reduxjs/toolkit'

import { RootState } from '@/hooks/useReduxHooks'

const selectState = (state: RootState) => state
export const selectCategoriesState = createSelector(selectState, (state) => state.categories)
export const selectCategories = createSelector(selectState, (state) => state.categories.categories)
export const selectIsOpenModal = createSelector(selectState, (state) => state.categories.isOpenModal)
export const selectProductModal = createSelector(selectState, (state) => state.categories.productForModal)

export const selectCategorytBySlug = (slug: string) =>
  createSelector(selectCategories, (state) => state?.find((product) => product?.slug === slug))
