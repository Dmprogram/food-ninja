import { useEffect } from 'react'
import { Route, Routes } from 'react-router-dom'

import { CategoriesNavBar } from '@/components/CategoriesNavBar/CategoriesNavBar'

import { MenuNavBar } from '@/components/MenuNavBar/MenuNavBar'
import { CategoriesWrapper } from '@/components/Wrapper/CategoriesWrapper'
import { useAppDispatch } from '@/hooks/useReduxHooks'
import { CartPage } from '@/pages/CartPage/CartPage'
import { Category1 } from '@/pages/Category1/Category1'
import { Category2 } from '@/pages/Category2/Category2'
import { Category3 } from '@/pages/Category3/Category3'
import { Category4 } from '@/pages/Category4/Category4'
import { MainPage } from '@/pages/MainPage/MainPage'
import { NotFoundPage } from '@/pages/NotFoundPage/NotFoundPage'
import { fetchCategories } from '@/redux/features/categoriesSlice/categoriesActions'

export const App = () => {
  const dispatch = useAppDispatch()
  useEffect(() => {
    dispatch(fetchCategories())
  }, [])

  return (
    <>
      <MenuNavBar />
      <CategoriesNavBar />
      <Routes>
        <Route element={<CategoriesWrapper />}>
          <Route path='/' element={<MainPage />} />
          <Route path='/category-1' element={<Category1 />} />
          <Route path='/category-2' element={<Category2 />} />
          <Route path='/category-3' element={<Category3 />} />
          <Route path='/category-4' element={<Category4 />} />
        </Route>
        <Route path='/cart' element={<CartPage />} />
        <Route path='*' element={<NotFoundPage />} />
      </Routes>
    </>
  )
}
