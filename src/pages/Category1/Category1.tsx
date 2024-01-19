import styles from './Category.module.css'

import { Product } from '@/components/Product/Product'
import { useAppSelector } from '@/hooks/useReduxHooks'
import { selectCategorytBySlug } from '@/redux/features/categoriesSlice/selector'

export const Category1 = () => {
  const category1 = useAppSelector(selectCategorytBySlug('rolls'))

  return (
    <main>
      <header className={styles.category__header}>
        <h2>{category1?.categoryName}</h2>
      </header>
      <main className={styles.container}>
        {category1?.data.map((category) => (
          <section key={category.id} className={styles.category}>
            <section className={styles.category__products}>
              <Product {...category} key={category.id} slug={category1.slug} />
            </section>
          </section>
        ))}
      </main>
    </main>
  )
}
