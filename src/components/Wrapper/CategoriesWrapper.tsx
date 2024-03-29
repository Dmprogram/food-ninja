import { Outlet } from 'react-router-dom'

import styles from './CategoriesWrapper.module.scss'

import { ProductModal } from '@/components/ProductModal/ProductModal'

import { ProductsSkeleton } from '@/components/ProductSkeleton/ProductsSkeleton'
import { useAppSelector } from '@/hooks/useReduxHooks'
import { selectCategoriesState } from '@/redux/features/categoriesSlice/selector'
import { selectIsOpenProductModal } from '@/redux/features/productModalSlice/selector'

export const CategoriesWrapper = () => {
  // Check auth and etc

  const { loading } = useAppSelector(selectCategoriesState)
  const isOpenProductModal = useAppSelector(selectIsOpenProductModal)

  if (loading === 'pending') {
    return <ProductsSkeleton />
  }

  if (loading === 'succeeded') {
    return (
      <main className={styles['main-content']}>
        <Outlet />
        {isOpenProductModal && <ProductModal isOpenProductModal={isOpenProductModal} />}
      </main>
    )
  }
}
