import styles from './Category.module.scss'

import { Product } from '@/components/Product/Product'
import { useAppSelector } from '@/hooks/useReduxHooks'
import { selectCategorytBySlug } from '@/redux/features/categoriesSlice/selector'

export const Category1 = () => {
  const category1 = useAppSelector(selectCategorytBySlug('rolls'))

  return (
    <section className={styles.category}>
      <header className={styles.category__header}>
        <h2>{category1?.categoryName}</h2>
      </header>
      <div className={styles.category__products}>
        {category1?.data.map((category) => <Product {...category} key={category.id} slug={category1.slug} />)}
      </div>
    </section>
  )
}
