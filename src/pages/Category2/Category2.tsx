import styles from './Category.module.scss'

import { Product } from '@/components/Product/Product'
import { useAppSelector } from '@/hooks/useReduxHooks'
import { selectCategorytBySlug } from '@/redux/features/categoriesSlice/selector'

export const Category2 = () => {
  const category2 = useAppSelector(selectCategorytBySlug('pizza'))

  return (
    <section className={styles.category}>
      <header className={styles.category__header}>
        <h2>{category2?.categoryName}</h2>
      </header>
      <div className={styles.category__products}>
        {category2?.data.map((category) => <Product {...category} key={category.id} slug={category2.slug} />)}
      </div>
    </section>
  )
}
