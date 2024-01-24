import { configureStore } from '@reduxjs/toolkit'

import { cartReducer } from './features/cartSlice/cartSlice'
import { categoriesReducer } from './features/categoriesSlice/categoriesSlice'

import { productModalReducer } from '@/redux/features/productModalSlice/productModalSlice'

export const store = configureStore({
  reducer: {
    cart: cartReducer,
    categories: categoriesReducer,
    productModal: productModalReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
})
