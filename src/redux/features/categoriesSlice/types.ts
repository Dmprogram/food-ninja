export type TVariant = {
  id: number
  size: string
  price: number
  weight: number
  quantityInCart: number
}

export type TCommonProduct = {
  id: number
  title: string
  slug: string
  description: string
  weightUnit: string
  img: string
  currency: string
  hasVariants: boolean
  size?: string
  price?: number
  weight?: number
  quantity?: number
  quantityInCart?: number
  variants?: TVariant[]
}
export type TCategory1 = {
  id: string
  categoryName: string
  slug: string
  data: TCommonProduct[]
}

export type TCategory2 = {
  id: string
  categoryName: string
  slug: string
  data: TCommonProduct[]
}
export type TCategory3 = {
  id: string
  categoryName: string
  slug: string
  data: TCommonProduct[]
}
export type TCategory4 = {
  id: string
  categoryName: string
  slug: string
  data: TCommonProduct[]
}
export type TCategoriesArray = [TCategory1, TCategory2, TCategory3, TCategory4]

export type TCategoriesState = {
  loading: 'idle' | 'pending' | 'succeeded' | 'failed'
  error: any
  categories: TCategoriesArray | null
}

enum CategoryName {
  Rolls = 'Роллы',
  Pizza = 'Пицца',
  RollsSets = 'Сеты роллов',
  Drinks = 'Напитки',
}

export type TCategoriesNames = CategoryName.Rolls | CategoryName.Pizza | CategoryName.RollsSets | CategoryName.Drinks
