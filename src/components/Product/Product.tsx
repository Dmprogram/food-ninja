import styles from './Product.module.css'

import { ButtonChangeCartItems } from '@/components/ButtonChangeCartItems/ButtonChangeCartItems'
import { CustomButton } from '@/components/CustomButton/CustomButton'
import { ProductLayout } from '@/components/ProductLayout/ProductLayout'
import { TCommonProduct } from '@/redux/features/categoriesSlice/types'
import { priceToLocale } from '@/utils/priceToLocale'

export const Product = (product: TCommonProduct) => (
  <section className={styles.product}>
    <ProductLayout
      id={product.id}
      renderImage={() => <img src={product.img} alt={product.title} className={styles.product__image} />}
      renderTitle={() => (
        <header>
          <h4 className={styles.product__title}>{product.title}</h4>
        </header>
      )}
      renderDescription={() => (
        <div className={styles.product__description}>
          <div>{product.description}</div>
          <div className={styles.product__blur} />
        </div>
      )}
      renderDetailedDescription={(openModalProduct, id) => (
        <div role='button' className={styles.product__detailedDescription} onClick={openModalProduct(id)}>
          <span>Подробнее</span>
        </div>
      )}
      renderPrice={() =>
        (
          <div className={styles.product__price}>
            {product.price ? (
              <span>{priceToLocale(product.price)}</span>
            ) : (
              product?.variants && <span>От {priceToLocale(product.variants[0].price)}</span>
            )}
          </div>
        ) || null
      }
      renderWeight={() =>
        (product.weight && (
          <span className={styles.product__weight}>
            {product.weight} {product.weightUnit === 'grams' ? 'гр.' : 'л.'}
          </span>
        )) ||
        null
      }
      renderQuantity={() =>
        (product.quantity && <span className={styles.product__quantity}>{product.quantity} шт.</span>) || null
      }
      renderButton={(addProductsToCart, _, openModalProduct, isAdded, id) =>
        isAdded ? (
          <ButtonChangeCartItems id={id as number} />
        ) : (
          (!product.hasVariants && <CustomButton title='Хочу' onClick={addProductsToCart(id as number)} />) || (
            <CustomButton title='Выбрать' onClick={openModalProduct(id as number)} />
          ) ||
          null
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
