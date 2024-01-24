import { Outlet } from 'react-router-dom'

import styles from './CategoriesWrapper.module.css'

import { ProductModal } from '@/components/ProductModal/ProductModal'

import { ProductsSkeleton } from '@/components/ProductSkeleton/ProductsSkeleton'
import { useAppSelector } from '@/hooks/useReduxHooks'
import { selectCategoriesState, selectIsOpenModal } from '@/redux/features/categoriesSlice/selector'

export const CategoriesWrapper = () => {
  // Check auth and etc

  const { loading } = useAppSelector(selectCategoriesState)
  const isOpenModal = useAppSelector(selectIsOpenModal)

  if (loading === 'pending') {
    return <ProductsSkeleton />
  }

  if (loading === 'succeeded') {
    return (
      <section className={styles.container}>
        <Outlet />
        {isOpenModal && <ProductModal isOpenModal={isOpenModal} />}
      </section>
    )
  }
}
