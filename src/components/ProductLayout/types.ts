import { ReactElement } from 'react'

export type TProductLayout = {
  id: number | null
  renderImage?: () => ReactElement
  renderTitle?: () => ReactElement
  renderDescription?: () => ReactElement
  renderPrice?: () => ReactElement | null
  renderWeight?: () => ReactElement | null
  renderQuantity?: () => ReactElement | null
  renderButton?: (
    addProductToCart: (arg1: number) => () => void,
    addProductToCartFromModal: (arg1: number, arg2: string) => () => void,
    openModalProduct: (arg: number) => () => void,
    isAdded: boolean,
    id: number | null,
  ) => ReactElement | null
  renderDetailedDescription?: (arg1: (arg2: number) => () => void, arg3: number) => void
  renderToggleButtons?: () => ReactElement | null
  renderFooter?: (
    arg1: ReactElement | undefined | null,
    arg2: ReactElement | undefined | null,
    arg3: ReactElement | undefined | null,
    ar4: ReactElement | undefined | null,
  ) => ReactElement | null
}
