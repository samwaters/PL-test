import { createSelector, createSlice, PayloadAction } from "@reduxjs/toolkit"
import { RootState } from "../store"

export interface FilterState {
  maxPrice: number
  minPrice: number
  perPage: number
  sort: string
  sortOrder: string
  subscription: boolean
  tags: string[]
}

const initialState: FilterState = {
  maxPrice: 150,
  minPrice: 0,
  perPage: 10,
  sort: "title",
  sortOrder: "ASC",
  subscription: false,
  tags: [],
}

const filterSlice = createSlice({
  initialState,
  name: "filters",
  reducers: {
    addTag: (state, action: PayloadAction<string>) => {
      if (!state.tags.includes(action.payload)) state.tags.push(action.payload)
    },
    perPage: (state, action: PayloadAction<number>) => {
      state.perPage = action.payload
    },
    priceRange: (state, action: PayloadAction<number[]>) => {
      state.minPrice = action.payload[0]
      state.maxPrice = action.payload[1]
    },
    removeTag: (state, action: PayloadAction<string>) => {
      state.tags = state.tags.filter((t) => t !== action.payload)
    },
    reset: (state) => {
      state.maxPrice = initialState.maxPrice
      state.minPrice = initialState.minPrice
      state.perPage = initialState.perPage
      state.sort = initialState.sort
      state.sortOrder = initialState.sortOrder
      state.subscription = initialState.subscription
      state.tags = initialState.tags
    },
    subscription: (state, action: PayloadAction<boolean>) => {
      state.subscription = action.payload
    },
  },
})

export const { addTag, perPage, priceRange, removeTag, subscription } = filterSlice.actions
const minPriceSelector = (state: RootState) => state.filters.minPrice
const maxPriceSelector = (state: RootState) => state.filters.maxPrice
export const getPerPage = (state: RootState) => state.filters.perPage
export const getPriceRange = createSelector(minPriceSelector, maxPriceSelector, (minPrice, maxPrice) => [minPrice, maxPrice])
export const getSort = (state: RootState) => state.filters.sort
export const getSortOrder = (state: RootState) => state.filters.sortOrder
export const getSubscription = (state: RootState) => state.filters.subscription
export const getTags = (state: RootState) => state.filters.tags
export default filterSlice.reducer
