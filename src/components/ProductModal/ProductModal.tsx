import CloseIcon from '@mui/icons-material/Close'
import { Toolbar } from '@mui/material'
import Dialog from '@mui/material/Dialog'
import IconButton from '@mui/material/IconButton'
import * as React from 'react'

import styles from './ProductModal.module.scss'

import { CustomButton } from '@/components/CustomButton/CustomButton'
import { ProductLayout } from '@/components/ProductLayout/ProductLayout'
import { ProductModalButtonGroupes } from '@/components/ProductModalButtonGroupes/ProductModalButtonGroupes'
import { useAppDispatch, useAppSelector } from '@/hooks/useReduxHooks'
import { productModalActions } from '@/redux/features/productModalSlice/productModalSlice'
import { selectProductModal } from '@/redux/features/productModalSlice/selector'
import { priceToLocale } from '@/utils/priceToLocale'

type TProductModal = {
  isOpenProductModal: boolean
}
export const ProductModal = ({ isOpenProductModal }: TProductModal) => {
  const productModal = useAppSelector(selectProductModal)

  const dispatch = useAppDispatch()
  const [option, setOption] = React.useState<null | string>('first')
  React.useEffect(() => {
    if (!productModal?.hasVariants) {
      setOption(null)
    } else {
      setOption('first')
    }
  }, [productModal])

  const handleClose = () => {
    dispatch(productModalActions.setIsOpenModal({ isOpenProductModal: false, product: null }))
  }

  return (
    productModal && (
      <Dialog
        fullWidth
        maxWidth='md'
        open={isOpenProductModal}
        onClose={handleClose}
        className={styles['product-modal']}
      >
        <div className={styles['product-modal__image']}>
          <img src={productModal.img} alt={productModal.title} />
        </div>
        <section className={styles['product-modal__info']}>
          <ProductLayout
            id={productModal.id}
            renderTitle={() => (
              <header className={styles['product-modal__info-title']}>
                <h4>{productModal.title}</h4>
              </header>
            )}
            renderDescription={() => (
              <div className={styles['product-modal__info-description']}>
                <div>{productModal.description}</div>
              </div>
            )}
            renderToggleButtons={() =>
              productModal.hasVariants ? (
                <div className={styles['product-modal__info-choose']}>
                  <div className={styles['product-modal__info-choose-size']}>
                    {productModal.slug === 'pizza' ? 'Размер' : 'Объем'}
                  </div>
                  <ProductModalButtonGroupes option={option!} setOption={setOption} slug={productModal.slug} />
                </div>
              ) : null
            }
            renderPrice={() => (
              <div className={styles['product-modal__info-price']}>
                <span>
                  {productModal.price
                    ? priceToLocale(productModal.price)
                    : productModal.variants &&
                      priceToLocale(
                        option === 'first' ? productModal.variants[0].price : productModal.variants[1].price,
                      )}
                </span>
              </div>
            )}
            renderWeight={() => (
              <span className={styles['product-modal__info-weight']}>
                {productModal.weight
                  ? productModal.weight
                  : productModal.variants &&
                    (option === 'first' ? productModal.variants[0].weight : productModal.variants[1].weight)}
                {productModal.weightUnit === 'grams' ? ' гр.' : ' л.'}
              </span>
            )}
            renderQuantity={() =>
              productModal.quantity ? (
                <span className={styles['product-modal__info-quantity']}>{productModal.quantity} шт.</span>
              ) : null
            }
            renderButton={(_, addProductToCartFromModal) => (
              <CustomButton
                title='Хочу'
                onClick={() => addProductToCartFromModal(productModal, option)}
                disabled={!isOpenProductModal}
                minWidth='50%'
              />
            )}
            renderFooter={(price, weight, quantity, button) => (
              <footer className={styles['product-modal__info-footer']}>
                <section className={styles['product-modal__info-variants-buy']}>
                  <div>
                    {price}
                    {weight}
                    {quantity}
                  </div>
                  {button}
                </section>
              </footer>
            )}
          />
        </section>
        <Toolbar className={styles['product-modal__close-icon']}>
          <IconButton edge='end' color='inherit' onClick={handleClose} aria-label='close'>
            <CloseIcon />
          </IconButton>
        </Toolbar>
      </Dialog>
    )
  )
}
