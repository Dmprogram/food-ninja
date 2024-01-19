import { ReactElement } from 'react'

export type TProductLayout = {
  id: number
  renderImage?: () => ReactElement
  renderTitle?: () => ReactElement
  renderDescription?: () => ReactElement
  renderPrice?: () => ReactElement | null
  renderWeight?: () => ReactElement | null
  renderQuantity?: () => ReactElement | null
  renderButton?: (
    addProductToCart: () => void,
    addProductToCartFromModal: (arg: string | null) => void,
    openModalProduct: () => void,
    isAdded: boolean,
    id: number | null,
  ) => ReactElement | null
  renderDetailedDescription?: (arg1: () => void) => ReactElement | null
  renderToggleButtons?: () => ReactElement | null
  renderSize?: () => ReactElement | null

  renderDeleteProduct?: () => ReactElement | null
  renderFooter?: (
    arg1: ReactElement | undefined | null,
    arg2: ReactElement | undefined | null,
    arg3: ReactElement | undefined | null,
    ar4: ReactElement | undefined | null,
  ) => ReactElement | null
  renderMainInformationLeft?: (
    arg1: ReactElement | undefined | null,
    arg2: ReactElement | undefined | null,
    arg3: ReactElement | undefined | null,
    ar4: ReactElement | undefined | null,
  ) => ReactElement | null
}
