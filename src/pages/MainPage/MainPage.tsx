import styles from './MainPage.module.scss'

import { Product } from '@/components/Product/Product'

import { useAppSelector } from '@/hooks/useReduxHooks'
import { selectCategories } from '@/redux/features/categoriesSlice/selector'

export const MainPage = () => {
  const categories = useAppSelector(selectCategories)
  return categories?.map((category) => (
    <section key={category.id} className={styles.category}>
      <header className={styles.category__header}>
        <h2>{category.categoryName}</h2>
      </header>
      <div className={styles.category__products}>
        {category.data.map((product) => (
          <Product {...product} key={product.id} slug={category.slug} />
        ))}
      </div>
    </section>
  ))
}
