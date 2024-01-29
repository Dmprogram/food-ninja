import styles from './Product.module.scss'

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
      renderDetailedDescription={(openModalProduct) => (
        <div className={styles['product__detailed-description']}>
          <span role='button' onClick={() => openModalProduct(product)}>
            Подробнее
          </span>
        </div>
      )}
      renderPrice={() => (
        <div className={styles.product__price}>
          <span>
            {product.price
              ? priceToLocale(product.price)
              : product.variants && `От ${priceToLocale(product.variants[0].price)}`}
          </span>
        </div>
      )}
      renderWeight={() =>
        product.weight ? (
          <span className={styles.product__weight}>
            {product.weight} {product.weightUnit === 'grams' ? 'гр.' : 'л.'}
          </span>
        ) : null
      }
      renderQuantity={() =>
        product.quantity ? <span className={styles.product__quantity}>{product.quantity} шт.</span> : null
      }
      renderButton={(addProductToCart, _, openModalProduct, isAdded) =>
        isAdded ? (
          <ButtonChangeCartItems {...product} />
        ) : (
          (!product.hasVariants && <CustomButton title='Хочу' onClick={() => addProductToCart(product)} />) || (
            <CustomButton title='Выбрать' onClick={() => openModalProduct(product)} />
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
