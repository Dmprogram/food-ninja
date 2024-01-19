import styles from './MainPage.module.css'

import { Product } from '@/components/Product/Product'

import { useAppSelector } from '@/hooks/useReduxHooks'
import { selectCategories } from '@/redux/features/categoriesSlice/selector'

export const MainPage = () => {
  const categories = useAppSelector(selectCategories)
  return (
    <main>
      {categories?.map((category) => (
        <section key={category.id} className={styles.category}>
          <header className={styles.category__header}>
            <h2>{category.categoryName}</h2>
          </header>
          <section className={styles.category__products}>
            {category.data.map((product) => (
              <Product {...product} key={product.id} slug={category.slug} />
            ))}
          </section>
        </section>
      ))}
    </main>
  )
}
