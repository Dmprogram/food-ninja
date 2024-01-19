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
import { selectIsOpenModal, selectProductModal } from '@/redux/features/categoriesSlice/selector'
import { priceToLocale } from '@/utils/priceToLocale'

export const ProductModal = () => {
  const isOpenModal = useAppSelector(selectIsOpenModal)
  const productForModal = useAppSelector(selectProductModal)
  const dispatch = useAppDispatch()
  const [value, setValue] = React.useState<null | string>('first')
  React.useEffect(() => {
    if (!productForModal?.hasVariants) {
      setValue(null)
    } else {
      setValue('first')
    }
  }, [productForModal])

  const handleClose = () => {
    dispatch(categoriesActions.setIsOpenModal({ isOpenModal: false, productModalId: null }))
  }

  return (
    <section style={{ backgroundColor: 'red' }}>
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
            <img src={productForModal?.img} alt={productForModal?.title} style={{ width: '100%' }} />
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
                id={productForModal?.id || null}
                renderTitle={() => (
                  <header>
                    <h4 className={styles.productModal__title}>{productForModal?.title}</h4>
                  </header>
                )}
                renderDescription={() => (
                  <div className={styles.productModal__description}>
                    <div>{productForModal?.description}</div>
                  </div>
                )}
                renderToggleButtons={() =>
                  (productForModal?.hasVariants && (
                    <div className={styles.productModal__toggleButtons}>
                      <div className={styles.productModal__size}>
                        {productForModal.slug === 'pizza' ? 'Размер' : 'Объем'}
                      </div>
                      <ProductModalButtonGroupes value={value!} setValue={setValue} slug={productForModal?.slug} />
                    </div>
                  )) ||
                  null
                }
                renderPrice={() =>
                  (
                    <div className={styles.productModal__price}>
                      {productForModal?.price ? (
                        <span>{priceToLocale(productForModal.price)}</span>
                      ) : (
                        productForModal?.variants && (
                          <span>
                            {priceToLocale(
                              value === 'first' ? productForModal.variants[0].price : productForModal.variants[1].price,
                            )}
                          </span>
                        )
                      )}
                    </div>
                  ) || null
                }
                renderWeight={() =>
                  (
                    <span className={styles.productModal__weight}>
                      {productForModal?.weight ? (
                        <span>{productForModal.weight}</span>
                      ) : (
                        productForModal?.variants && (
                          <span>
                            {value === 'first'
                              ? productForModal.variants[0].weight
                              : productForModal.variants[1].weight}
                          </span>
                        )
                      )}
                      <span>{productForModal?.weightUnit === 'grams' ? ' гр.' : ' л.'}</span>
                    </span>
                  ) || null
                }
                renderQuantity={() =>
                  (productForModal?.quantity && (
                    <span className={styles.productModal__quantity}>{productForModal?.quantity} шт.</span>
                  )) ||
                  null
                }
                renderButton={(_, addProductToCartFromModal, __, ___, id) =>
                  (
                    <CustomButton
                      title='Хочу'
                      onClick={addProductToCartFromModal(id as number, value as string)}
                      disabled={!isOpenModal}
                      minWidth='50%'
                    />
                  ) || null
                }
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
    </section>
  )
}
