import styles from './Category.module.css'

import { Product } from '@/components/Product/Product'
import { useAppSelector } from '@/hooks/useReduxHooks'
import { selectCategorytBySlug } from '@/redux/features/categoriesSlice/selector'

export const Category4 = () => {
  const category4 = useAppSelector(selectCategorytBySlug('drinks'))

  return (
    <main>
      <header className={styles.category__header}>
        <h2>{category4?.categoryName}</h2>
      </header>
      <main className={styles.container}>
        {category4?.data.map((category) => (
          <section key={category.id} className={styles.category}>
            <section className={styles.category__products}>
              <Product {...category} key={category.id} slug={category4.slug} />
            </section>
          </section>
        ))}
      </main>
    </main>
  )
}
