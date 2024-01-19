import { ReactElement } from 'react'

import { TProductLayout } from '@/components/ProductLayout/types'

export type TCartItemLayout = Omit<TProductLayout, 'renderButton'> & {
  renderSize?: () => ReactElement | null
  renderMainInformationLeft?: (
    arg1: ReactElement | undefined,
    arg2: ReactElement | undefined | null,
    arg3: ReactElement | undefined | null,
    ar4: ReactElement | undefined | null,
  ) => ReactElement | null
  renderDeleteProduct?: (func: (arg: number) => () => void) => ReactElement
  renderButton?: (
    addProductToCart: (id: number) => () => void,
    addProductToCartFromModal: (id: number, option: string) => () => void,
    openModalProduct: (id: number) => () => void,
    isAdded: boolean,
  ) => ReactElement | null
}
