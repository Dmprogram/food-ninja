import { Outlet } from 'react-router-dom'

import styles from './MainApplication.module.css'

import { ProductModal } from '@/components/ProductModal/ProductModal'
import { Spinner } from '@/components/Spinner/Spinner'
import { useAppSelector } from '@/hooks/useReduxHooks'
import { selectCategoriesState } from '@/redux/features/categoriesSlice/selector'

export const MainApplication = () => {
  const { loading } = useAppSelector(selectCategoriesState)

  if (loading === 'pending') {
    return <Spinner />
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
