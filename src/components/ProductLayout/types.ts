import { ReactElement } from 'react'

export type TProductLayout = {
  id: number | null
  renderImage?: () => ReactElement
  renderTitle?: () => ReactElement
  renderDescription?: () => ReactElement
  renderPrice?: () => ReactElement
  renderWeight?: () => ReactElement | null
  renderQuantity?: () => ReactElement | null
  renderButton?: (
    addProductToCart: (id: number) => () => void,
    addProductToCartFromModal: (id: number, option: string) => () => void,
    openModalProduct: (id: number) => () => void,
    isAdded: boolean,
  ) => ReactElement
  renderDetailedDescription?: (func: (arg: number) => () => void) => ReactElement
  renderToggleButtons?: () => ReactElement | null
  renderFooter?: (
    arg1: ReactElement | undefined,
    arg2: ReactElement | undefined | null,
    arg3: ReactElement | undefined | null,
    arg4: ReactElement | undefined,
  ) => ReactElement
}
