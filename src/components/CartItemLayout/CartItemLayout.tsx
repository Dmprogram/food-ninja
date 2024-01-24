import { TCartItemLayout } from './types'

import { useProductsActions } from '@/hooks/useProductsActions'

import { useAppSelector } from '@/hooks/useReduxHooks'
import { selectCartProductById } from '@/redux/features/cartSlice/selector'

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
}: TCartItemLayout) => {
  const isAdded = !!useAppSelector(selectCartProductById(id))
  const { addProductToCart, addProductToCartFromModal, openModalProduct, deleteProduct } = useProductsActions()
  return (
    <>
      {renderImage?.()}
      {renderMainInformationLeft?.(renderTitle?.(), renderSize?.(), renderWeight?.(), renderQuantity?.())}
      {renderDescription?.()}
      {renderDetailedDescription?.(openModalProduct)}
      {renderToggleButtons?.()}
      {renderButton?.(addProductToCart, addProductToCartFromModal, openModalProduct, isAdded)}
      {renderPrice?.()}
      {renderDeleteProduct?.(deleteProduct)}
    </>
  )
}
