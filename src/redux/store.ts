import { configureStore } from '@reduxjs/toolkit'

import { cartReducer } from './features/cartSlice/cartSlice'
import { categoriesReducer } from './features/categoriesSlice/categoriesSlice'

export const store = configureStore({
  reducer: {
    cart: cartReducer,
    categories: categoriesReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
})
