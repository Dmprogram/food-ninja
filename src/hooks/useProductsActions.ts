import { useCallback } from 'react'

import { useAppDispatch } from './useReduxHooks'

import { cartActions } from '@/redux/features/cartSlice/cartSlice'
import { TCommonProduct } from '@/redux/features/categoriesSlice/types'
import { productModalActions } from '@/redux/features/productModalSlice/productModalSlice'

export const useProductsActions = () => {
  const dispatch = useAppDispatch()
  const addProductToCart = useCallback((product: TCommonProduct) => {
    dispatch(cartActions.addProductToCart({ product, option: null }))
  }, [])
  const addProductToCartFromModal = useCallback((product: TCommonProduct, option: string | null) => {
    dispatch(productModalActions.setIsOpenModal({ isOpenProductModal: false, product: null }))
    dispatch(cartActions.addProductToCart({ product, option }))
  }, [])

  const openModalProduct = useCallback((product: TCommonProduct) => {
    dispatch(productModalActions.setIsOpenModal({ product, isOpenProductModal: true }))
  }, [])
  const deleteOneProduct = useCallback((id: number) => {
    dispatch(cartActions.deleteOneProductFromCart(id))
  }, [])
  const deleteProduct = useCallback((id: number) => {
    dispatch(cartActions.deleteProductFromCart(id))
  }, [])
  return { addProductToCart, addProductToCartFromModal, openModalProduct, deleteOneProduct, deleteProduct }
}
