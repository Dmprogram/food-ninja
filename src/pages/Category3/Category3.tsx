import styles from './Category.module.css'

import { Product } from '@/components/Product/Product'
import { useAppSelector } from '@/hooks/useReduxHooks'
import { selectCategorytBySlug } from '@/redux/features/categoriesSlice/selector'

export const Category3 = () => {
  const category3 = useAppSelector(selectCategorytBySlug('rollsSets'))

  return (
    <main>
      <header className={styles.category__header}>
        <h2>{category3?.categoryName}</h2>
      </header>
      <main className={styles.container}>
        {category3?.data.map((category) => (
          <section key={category.id} className={styles.category}>
            <section className={styles.category__products}>
              <Product {...category} key={category.id} slug={category3.slug} />
            </section>
          </section>
        ))}
      </main>
    </main>
  )
}
