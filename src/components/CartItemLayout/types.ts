import { ReactElement } from 'react'

import { TProductLayout } from '@/components/ProductLayout/types'

export type TCartItemLayout = TProductLayout & {
  renderSize?: () => ReactElement | null
  renderMainInformationLeft?: (
    arg1: ReactElement | undefined,
    arg2: ReactElement | undefined | null,
    arg3: ReactElement | undefined | null,
    ar4: ReactElement | undefined | null,
  ) => ReactElement | null
  renderDeleteProduct?: (fun: (productId: number) => void) => ReactElement
}
