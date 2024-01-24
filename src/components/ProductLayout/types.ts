import { ReactElement } from 'react'

import { TCommonProduct } from '@/redux/features/categoriesSlice/types'

export type TProductLayout = {
  id: number
  renderImage?: () => ReactElement
  renderTitle?: () => ReactElement
  renderDescription?: () => ReactElement
  renderPrice?: () => ReactElement
  renderWeight?: () => ReactElement | null
  renderQuantity?: () => ReactElement | null
  renderButton?: (
    addProductToCart: (product: TCommonProduct) => void,
    addProductToCartFromModal: (product: TCommonProduct, option: string | null) => void,
    openModalProduct: (product: TCommonProduct) => void,
    isAdded: boolean,
  ) => ReactElement | null
  renderDetailedDescription?: (func: (product: TCommonProduct) => void) => ReactElement
  renderToggleButtons?: () => ReactElement | null
  renderFooter?: (
    arg1: ReactElement | undefined | null,
    arg2: ReactElement | undefined | null,
    arg3: ReactElement | undefined | null,
    arg4: ReactElement | undefined | null,
  ) => ReactElement
}
