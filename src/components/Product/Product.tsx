import styles from './Product.module.css'

import { ButtonChangeCartItems } from '@/components/ButtonChangeCartItems/ButtonChangeCartItems'
import { CustomButton } from '@/components/CustomButton/CustomButton'
import { ProductLayout } from '@/components/ProductLayout/ProductLayout'
import { TCommonProduct } from '@/redux/features/categoriesSlice/types'
import { priceToLocale } from '@/utils/priceToLocale'

export const Product = ({
  title,
  description,
  weightUnit,
  weight,
  price,
  img,
  id,
  variants,
  quantity,
  hasVariants,
}: TCommonProduct) => (
  <section className={styles.product}>
    <ProductLayout
      id={id}
      renderImage={() => <img src={img} alt={title} className={styles.product__image} />}
      renderTitle={() => (
        <header>
          <h4 className={styles.product__title}>{title}</h4>
        </header>
      )}
      renderDescription={() => (
        <div className={styles.product__description}>
          <div>{description}</div>
          <div className={styles.product__blur} />
        </div>
      )}
      renderDetailedDescription={(openModalProduct) => (
        <div role='button' className={styles.product__detailedDescription} onClick={openModalProduct(id)}>
          <span>Подробнее</span>
        </div>
      )}
      renderPrice={() => (
        <div className={styles.product__price}>
          {price ? <span>{priceToLocale(price)}</span> : variants && <span>От {priceToLocale(variants[0].price)}</span>}
        </div>
      )}
      renderWeight={() =>
        weight ? (
          <span className={styles.product__weight}>
            {weight} {weightUnit === 'grams' ? 'гр.' : 'л.'}
          </span>
        ) : null
      }
      renderQuantity={() => (quantity ? <span className={styles.product__quantity}>{quantity} шт.</span> : null)}
      renderButton={(addProductsToCart, _, openModalProduct, isAdded) =>
        isAdded ? (
          <ButtonChangeCartItems id={id} />
        ) : (
          (!hasVariants && <CustomButton title='Хочу' onClick={addProductsToCart(id)} />) || (
            <CustomButton title='Выбрать' onClick={openModalProduct(id)} />
          )
        )
      }
      renderFooter={(price, weight, quantity, button) => (
        <footer className={styles.product__footer}>
          <div>
            {price}
            {weight}
            {quantity}
          </div>

          {button}
        </footer>
      )}
    />
  </section>
)
