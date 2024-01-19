import { Outlet } from 'react-router-dom'

import styles from './Wrapper.module.css'

import { ProductModal } from '@/components/ProductModal/ProductModal'

import { ProductsSkeleton } from '@/components/ProductSkeleton/ProductsSkeleton'
import { useAppSelector } from '@/hooks/useReduxHooks'
import { selectCategoriesState } from '@/redux/features/categoriesSlice/selector'

export const Wrapper = () => {
  // Check auth and etc
  const { loading } = useAppSelector(selectCategoriesState)

  if (loading === 'pending') {
    return <ProductsSkeleton />
  }

  if (loading === 'succeeded') {
    return (
      <section className={styles.container}>
        <Outlet />
        <ProductModal />
      </section>
    )
  }
}
