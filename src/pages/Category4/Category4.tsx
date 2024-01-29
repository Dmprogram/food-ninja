import styles from './Category.module.scss'

import { Product } from '@/components/Product/Product'
import { useAppSelector } from '@/hooks/useReduxHooks'
import { selectCategorytBySlug } from '@/redux/features/categoriesSlice/selector'

export const Category4 = () => {
  const category4 = useAppSelector(selectCategorytBySlug('drinks'))

  return (
    <section className={styles.category}>
      <header className={styles.category__header}>
        <h2>{category4?.categoryName}</h2>
      </header>
      <div className={styles.category__products}>
        {category4?.data.map((category) => <Product {...category} key={category.id} slug={category4.slug} />)}
      </div>
    </section>
  )
}
