import CloseIcon from '@mui/icons-material/Close'
import { Toolbar, Box } from '@mui/material'
import Dialog from '@mui/material/Dialog'
import IconButton from '@mui/material/IconButton'
import * as React from 'react'

import styles from './ProductModal.module.css'

import { CustomButton } from '@/components/CustomButton/CustomButton'
import { ProductLayout } from '@/components/ProductLayout/ProductLayout'
import { ProductModalButtonGroupes } from '@/components/ProductModalButtonGroupes/ProductModalButtonGroupes'
import { useAppDispatch, useAppSelector } from '@/hooks/useReduxHooks'
import { productModalActions } from '@/redux/features/productModalSlice/productModalSlice'
import { selectProductModal } from '@/redux/features/productModalSlice/selector'
import { priceToLocale } from '@/utils/priceToLocale'

export const ProductModal = ({ isOpenProductModal }: { isOpenProductModal: boolean }) => {
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
        PaperProps={{ sx: { borderRadius: '20px', height: '595px' } }}
      >
        <Box
          sx={{
            display: 'flex',
            m: 'auto',
            borderRadius: '30px',
            height: '100%',
            width: '100%',
          }}
        >
          <Box
            sx={{
              display: 'flex',
              m: 'auto',
              width: '50%',
              padding: '20px',
            }}
          >
            <img src={productModal.img} alt={productModal.title} style={{ width: '100%' }} />
          </Box>
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              width: '50%',
              padding: '25px 20px 10px',
              backgroundColor: '#f2f3f5',
              height: '100%',
            }}
          >
            <section className={styles.productModal}>
              <ProductLayout
                id={productModal.id}
                renderTitle={() => (
                  <header>
                    <h4 className={styles.productModal__title}>{productModal.title}</h4>
                  </header>
                )}
                renderDescription={() => (
                  <div className={styles.productModal__description}>
                    <div>{productModal.description}</div>
                  </div>
                )}
                renderToggleButtons={() =>
                  productModal.hasVariants ? (
                    <div className={styles.productModal__toggleButtons}>
                      <div className={styles.productModal__size}>
                        {productModal.slug === 'pizza' ? 'Размер' : 'Объем'}
                      </div>
                      <ProductModalButtonGroupes option={option!} setOption={setOption} slug={productModal.slug} />
                    </div>
                  ) : null
                }
                renderPrice={() => (
                  <div className={styles.productModal__price}>
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
                  <span className={styles.productModal__weight}>
                    {productModal.weight
                      ? productModal.weight
                      : productModal.variants &&
                        (option === 'first' ? productModal.variants[0].weight : productModal.variants[1].weight)}
                    {productModal.weightUnit === 'grams' ? ' гр.' : ' л.'}
                  </span>
                )}
                renderQuantity={() =>
                  productModal.quantity ? (
                    <span className={styles.productModal__quantity}>{productModal.quantity} шт.</span>
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
                  <footer className={styles.productModal__footer}>
                    <section className={styles.productModal__variants}>
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
          </Box>
        </Box>
        <Toolbar
          sx={{
            position: 'absolute',
            right: 0,
            overflow: 'visible',
          }}
        >
          <IconButton edge='end' color='inherit' onClick={handleClose} aria-label='close'>
            <CloseIcon />
          </IconButton>
        </Toolbar>
      </Dialog>
    )
  )
}
