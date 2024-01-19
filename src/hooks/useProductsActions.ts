import { useCallback } from 'react'

import { useAppDispatch, useAppSelector } from './useReduxHooks'

import { cartActions } from '@/redux/features/cartSlice/cartSlice'
import { selectCartProducts } from '@/redux/features/cartSlice/selector'
import { categoriesActions } from '@/redux/features/categoriesSlice/categoriesSlice'
import { selectCategories } from '@/redux/features/categoriesSlice/selector'
import { addProductToCartHelper } from '@/utils/addProductToCartHelper'
import { deleteOneProductFromCartHelper } from '@/utils/deleteOneProductFromCartHelper'
import { deleteteProductFromCartHelper } from '@/utils/deleteteProductFromCartHelper'

export const useProductsActions = () => {
  const categories = useAppSelector(selectCategories)

  const cartProducts = useAppSelector(selectCartProducts)

  const dispatch = useAppDispatch()

  const addProductToCart = useCallback(
    (id: number) => () => {
      dispatch(cartActions.addProductToCart(addProductToCartHelper(categories, cartProducts, id, null)))
    },
    [cartProducts],
  )
  const addProductToCartFromModal = useCallback(
    (id: number, value: string | null) => () => {
      dispatch(categoriesActions.setIsOpenModal({ isOpenModal: false, productModalId: null }))
      dispatch(cartActions.addProductToCart(addProductToCartHelper(categories, cartProducts, id, value)))
    },
    [],
  )

  const openModalProduct = useCallback(
    (id: number) => () => {
      dispatch(categoriesActions.setIsOpenModal({ isOpenModal: true, productModalId: id }))
    },
    [],
  )
  const deleteOneProduct = useCallback(
    (id: number) => () => {
      dispatch(cartActions.deleteOneProductFromCart(deleteOneProductFromCartHelper(cartProducts, id)))
    },
    [cartProducts],
  )
  const deleteProduct = useCallback(
    (id: number) => () => {
      dispatch(cartActions.deleteProductFromCart(deleteteProductFromCartHelper(cartProducts, id)))
    },
    [cartProducts],
  )
  return { addProductToCart, addProductToCartFromModal, openModalProduct, deleteOneProduct, deleteProduct }
}
