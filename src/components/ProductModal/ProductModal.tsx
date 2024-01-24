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
import { categoriesActions } from '@/redux/features/categoriesSlice/categoriesSlice'
import { selectProductModal } from '@/redux/features/categoriesSlice/selector'
import { priceToLocale } from '@/utils/priceToLocale'

export const ProductModal = ({ isOpenModal }: { isOpenModal: boolean }) => {
  const productForModal = useAppSelector(selectProductModal)

  const dispatch = useAppDispatch()
  const [option, setOption] = React.useState<null | string>('first')
  React.useEffect(() => {
    if (!productForModal?.hasVariants) {
      setOption(null)
    } else {
      setOption('first')
    }
  }, [productForModal])

  const handleClose = () => {
    dispatch(categoriesActions.setIsOpenModal({ isOpenModal: false, product: null }))
  }

  return (
    productForModal && (
      <Dialog
        fullWidth
        maxWidth='md'
        open={isOpenModal}
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
            <img src={productForModal.img} alt={productForModal.title} style={{ width: '100%' }} />
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
                id={productForModal.id}
                renderTitle={() => (
                  <header>
                    <h4 className={styles.productModal__title}>{productForModal.title}</h4>
                  </header>
                )}
                renderDescription={() => (
                  <div className={styles.productModal__description}>
                    <div>{productForModal.description}</div>
                  </div>
                )}
                renderToggleButtons={() =>
                  productForModal.hasVariants ? (
                    <div className={styles.productModal__toggleButtons}>
                      <div className={styles.productModal__size}>
                        {productForModal.slug === 'pizza' ? 'Размер' : 'Объем'}
                      </div>
                      <ProductModalButtonGroupes option={option!} setOption={setOption} slug={productForModal.slug} />
                    </div>
                  ) : null
                }
                renderPrice={() => (
                  <div className={styles.productModal__price}>
                    <span>
                      {productForModal.price
                        ? priceToLocale(productForModal.price)
                        : productForModal.variants &&
                          priceToLocale(
                            option === 'first' ? productForModal.variants[0].price : productForModal.variants[1].price,
                          )}
                    </span>
                  </div>
                )}
                renderWeight={() => (
                  <span className={styles.productModal__weight}>
                    {productForModal.weight
                      ? productForModal.weight
                      : productForModal.variants &&
                        (option === 'first' ? productForModal.variants[0].weight : productForModal.variants[1].weight)}
                    {productForModal.weightUnit === 'grams' ? ' гр.' : ' л.'}
                  </span>
                )}
                renderQuantity={() =>
                  productForModal.quantity ? (
                    <span className={styles.productModal__quantity}>{productForModal.quantity} шт.</span>
                  ) : null
                }
                renderButton={(_, addProductToCartFromModal) => (
                  <CustomButton
                    title='Хочу'
                    onClick={() => addProductToCartFromModal(productForModal, option)}
                    disabled={!isOpenModal}
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
