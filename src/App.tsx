import { useEffect } from 'react'

import './App.css'
import { Route, Routes } from 'react-router-dom'

import { CategoriesNavBar } from '@/components/CategoriesNavBar/CategoriesNavBar'

import { NavigationBar } from '@/components/NavigationBar/NavigationBar'
import { Wrapper } from '@/components/Wrapper/Wrapper'
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
  })

  return (
    <main className='container'>
      <NavigationBar />
      <CategoriesNavBar />
      <Routes>
        <Route element={<Wrapper />}>
          <Route path='/' element={<MainPage />} />
          <Route path='/category-1' element={<Category1 />} />
          <Route path='/category-2' element={<Category2 />} />
          <Route path='/category-3' element={<Category3 />} />
          <Route path='/category-4' element={<Category4 />} />
          <Route path='/cart' element={<CartPage />} />
          <Route path='*' element={<NotFoundPage />} />
        </Route>
      </Routes>
    </main>
  )
}
