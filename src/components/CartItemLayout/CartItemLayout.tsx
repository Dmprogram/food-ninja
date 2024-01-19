import { TProductLayout } from './types'

import { useAppDispatch, useAppSelector } from '@/hooks/useReduxHooks'
import { cartActions } from '@/redux/features/cartSlice/cartSlice'
import { selectCartProductById, selectCartProducts } from '@/redux/features/cartSlice/selector'
import { categoriesActions } from '@/redux/features/categoriesSlice/categoriesSlice'
import { selectCategories } from '@/redux/features/categoriesSlice/selector'
import { addProductToCartHelper } from '@/utils/addProductToCartHelper'

export const CartItemLayout = ({
  id,
  renderImage,
  renderTitle,
  renderDescription,
  renderPrice,
  renderWeight,
  renderQuantity,
  renderButton,
  renderDetailedDescription,
  renderToggleButtons,
  renderSize,
  renderMainInformationLeft,
  renderDeleteProduct,
}: TProductLayout) => {
  const isAdded = !!useAppSelector(selectCartProductById(id))
  const dispatch = useAppDispatch()
  const categories = useAppSelector(selectCategories)
  const cartProducts = useAppSelector(selectCartProducts)

  const addProductToCart = () => {
    dispatch(cartActions.addProductToCart(addProductToCartHelper(categories, cartProducts, id, null)))
  }

  const addProductToCartFromModal = (value: string | null) => {
    dispatch(cartActions.addProductToCart(addProductToCartHelper(categories, cartProducts, id, value)))
    dispatch(categoriesActions.setIsOpenModal({ isOpenModal: false, productModalId: null }))
  }

  const openModalProduct = () => {
    dispatch(categoriesActions.setIsOpenModal({ isOpenModal: true, productModalId: id }))
  }

  return (
    <>
      {renderImage?.()}
      {renderMainInformationLeft?.(renderTitle?.(), renderSize?.(), renderWeight?.(), renderQuantity?.())}
      {renderDescription?.()}
      {renderDetailedDescription?.(openModalProduct)}
      {renderToggleButtons?.()}
      {renderButton?.(addProductToCart, addProductToCartFromModal, openModalProduct, isAdded, id)}
      {renderPrice?.()}
      {renderDeleteProduct?.()}
    </>
  )
}
