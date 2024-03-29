import Box from '@mui/material/Box'
import Skeleton from '@mui/material/Skeleton'

import styles from './ProductsSkeleton.module.scss'

export const ProductsSkeleton = () => {
  const productsQuantity = new Array(8)
  productsQuantity.fill('skeleton')
  return (
    <section className={styles.skeletons}>
      <header className={styles.skeletons__header}>
        <Skeleton width='100%' height={45} />
      </header>
      <div className={styles.skeletons__products}>
        {productsQuantity.map((_, index) => (
          <Box className={styles['skeleton-product']} key={index}>
            <Skeleton sx={{ marginTop: '-55px', height: '250px' }} width='100%' />
            <Skeleton sx={{ alignSelf: 'flex-start' }} width='60%' height={35} />
            <Skeleton sx={{ marginTop: '25px', marginBottom: '8px' }} width='100%' height={50} />
            <Skeleton sx={{ alignSelf: 'flex-end', marginBottom: '-5px' }} width='30%' height={25} />
            <footer className={styles['skeleton-product__footer']}>
              <div style={{ width: '50%' }}>
                <Skeleton width='70%' height={30} />
                <Skeleton sx={{ marginTop: '-5px' }} width='60%' height={20} />
              </div>
              <div style={{ width: '50%', display: 'flex', flexDirection: 'column' }}>
                <Skeleton sx={{ alignSelf: 'flex-end', borderRadius: '10px' }} width='70%' height={60} />
              </div>
            </footer>
          </Box>
        ))}
      </div>
    </section>
  )
}
