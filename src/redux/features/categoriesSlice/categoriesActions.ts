import { createAsyncThunk } from '@reduxjs/toolkit'

import { TCategoriesArray } from './types'

import { RootState } from '@/hooks/useReduxHooks'
import { getProducts } from '@/services/requestProducts'

export const fetchCategories = createAsyncThunk<TCategoriesArray, void, { state: RootState }>(
  'subscriptions/getAll',
  async (_, { rejectWithValue }) => {
    try {
      const response = await getProducts()
      return response
    } catch (err: any) {
      return rejectWithValue(err.response)
    }
  },
)
