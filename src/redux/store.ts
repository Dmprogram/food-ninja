import { combineReducers, configureStore } from '@reduxjs/toolkit'

import { persistReducer, FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER } from 'redux-persist'
import persistStore from 'redux-persist/es/persistStore'
import storage from 'redux-persist/lib/storage'

import { cartReducer } from './features/cartSlice/cartSlice'
import { categoriesReducer } from './features/categoriesSlice/categoriesSlice'

import { productModalReducer } from '@/redux/features/productModalSlice/productModalSlice'

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['cart'],
}
const rootReducer = combineReducers({
  cart: cartReducer,
  categories: categoriesReducer,
  productModal: productModalReducer,
})
const persistedReducer = persistReducer(persistConfig, rootReducer)

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
})
export const persister = persistStore(store)
