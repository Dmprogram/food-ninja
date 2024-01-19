import { TProductLayout } from './types'

import { useProductsActions } from '@/hooks/useProductsActions'
import { useAppSelector } from '@/hooks/useReduxHooks'
import { selectCartProductById } from '@/redux/features/cartSlice/selector'

export const ProductLayout = ({
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
  renderFooter,
}: TProductLayout) => {
  const isAdded = !!useAppSelector(selectCartProductById(id))
  const { addProductToCart, addProductToCartFromModal, openModalProduct } = useProductsActions()
  return (
    <>
      {renderImage?.()}
      {renderTitle?.()}
      {renderDescription?.()}
      {renderDetailedDescription?.(openModalProduct)}
      {renderToggleButtons?.()}
      {renderFooter?.(
        renderPrice?.(),
        renderWeight?.(),
        renderQuantity?.(),
        renderButton?.(addProductToCart, addProductToCartFromModal, openModalProduct, isAdded),
      )}
    </>
  )
}
