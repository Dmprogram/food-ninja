import styles from './Category.module.scss'

import { Product } from '@/components/Product/Product'
import { useAppSelector } from '@/hooks/useReduxHooks'
import { selectCategorytBySlug } from '@/redux/features/categoriesSlice/selector'

export const Category3 = () => {
  const category3 = useAppSelector(selectCategorytBySlug('rollsSets'))

  return (
    <section className={styles.category}>
      <header className={styles.category__header}>
        <h2>{category3?.categoryName}</h2>
      </header>
      <div className={styles.category__products}>
        {category3?.data.map((category) => <Product {...category} key={category.id} slug={category3.slug} />)}
      </div>
    </section>
  )
}
