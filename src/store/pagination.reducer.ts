import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { productsApi } from "../api/products"
import { RootState } from "../store"
import { addTag, perPage, priceRange, removeTag, subscription } from "./filters.reducer"

export interface PaginationState {
  currentPage: number
  totalResults: number
}

const initialState: PaginationState = {
  currentPage: 1,
  totalResults: 100,
}

const paginationSlice = createSlice({
  initialState,
  name: "pagination",
  reducers: {
    currentPage: (state, action: PayloadAction<number>) => {
      state.currentPage = action.payload
    },
    totalResults: (state, action: PayloadAction<number>) => {
      state.totalResults = action.payload
    },
  },
  extraReducers: (builder) => {
    builder.addMatcher(productsApi.endpoints.search.matchFulfilled, (state, { payload }) => {
      state.totalResults = parseInt(payload.total)
    })
    // Reset the current page when filters change
    const actionsToReset = [addTag.type, perPage.type, priceRange.type, removeTag.type, subscription.type]
    builder.addMatcher(
      (action) => actionsToReset.includes(action.type),
      (state) => {
        state.currentPage = 1
      },
    )
  },
})

export const { currentPage, totalResults } = paginationSlice.actions

export const getCurrentPage = (state: RootState) => state.pagination.currentPage
export const getTotalResults = (state: RootState) => state.pagination.totalResults

export default paginationSlice.reducer
