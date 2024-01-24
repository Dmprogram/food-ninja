import { useCallback } from 'react'

import { useAppDispatch } from './useReduxHooks'

import { cartActions } from '@/redux/features/cartSlice/cartSlice'
import { categoriesActions } from '@/redux/features/categoriesSlice/categoriesSlice'
import { TCommonProduct } from '@/redux/features/categoriesSlice/types'

export const useProductsActions = () => {
  const dispatch = useAppDispatch()
  const addProductToCart = useCallback((product: TCommonProduct) => {
    dispatch(cartActions.addProductToCart({ product, option: null }))
  }, [])
  const addProductToCartFromModal = useCallback((product: TCommonProduct, option: string | null) => {
    dispatch(categoriesActions.setIsOpenModal({ isOpenModal: false, product: null }))
    dispatch(cartActions.addProductToCart({ product, option }))
  }, [])

  const openModalProduct = useCallback((product: TCommonProduct) => {
    dispatch(categoriesActions.setIsOpenModal({ product, isOpenModal: true }))
  }, [])
  const deleteOneProduct = useCallback((id: number) => {
    dispatch(cartActions.deleteOneProductFromCart(id))
  }, [])
  const deleteProduct = useCallback((id: number) => {
    dispatch(cartActions.deleteProductFromCart(id))
  }, [])
  return { addProductToCart, addProductToCartFromModal, openModalProduct, deleteOneProduct, deleteProduct }
}
