import { createSelector } from '@reduxjs/toolkit'

import { RootState } from '@/hooks/useReduxHooks'

const selectState = (state: RootState) => state
export const selectCategoriesState = createSelector(selectState, (state) => state.categories)
export const selectCategories = createSelector(selectState, (state) => state.categories.categories)

export const selectCategorytBySlug = (slug: string) =>
  createSelector(selectCategories, (state) => state?.find((product) => product?.slug === slug))
