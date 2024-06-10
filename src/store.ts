import { configureStore } from "@reduxjs/toolkit"
import logger from "redux-logger"
import { productsApi } from "./api/products"
import filtersReducer from "./store/filters.reducer"
import paginationReducer from "./store/pagination.reducer"
import uiReducer from "./store/ui.reducer"

export const store = configureStore({
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat([logger, productsApi.middleware]),
  reducer: {
    [productsApi.reducerPath]: productsApi.reducer,
    filters: filtersReducer,
    pagination: paginationReducer,
    ui: uiReducer,
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
