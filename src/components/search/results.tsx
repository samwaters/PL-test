import { Box, CircularProgress } from "@mui/material"
import * as React from "react"
import { useEffect } from "react"
import { useSelector } from "react-redux"
import { useLazySearchQuery } from "../../api/products"
import { getPerPage, getPriceRange, getSubscription, getTags } from "../../store/filters.reducer"
import { getCurrentPage } from "../../store/pagination.reducer"
import { Error } from "./screens/error"
import { NoResults } from "./screens/noresults"
import { ResultsGrid } from "./screens/resultsgrid"

export const Results = () => {
  const [searchProducts, { isUninitialized, data, isLoading, isSuccess, isError }] = useLazySearchQuery()
  const currentPage = useSelector(getCurrentPage)
  const perPage = useSelector(getPerPage)
  const priceRange = useSelector(getPriceRange)
  const subscription = useSelector(getSubscription)
  const tags = useSelector(getTags)

  useEffect(() => {
    if (isUninitialized) {
      searchProducts(
        {
          limit: 10,
          page: 1,
          sort: "title",
          sortOrder: "ASC",
        },
        true,
      )
    }
  }, [])

  useEffect(() => {
    searchProducts(
      {
        limit: perPage,
        page: currentPage,
        priceRange,
        sort: "title",
        sortOrder: "ASC",
        subscription: subscription ? true : undefined,
        tags: tags.length > 0 ? tags : undefined,
      },
      false,
    )
  }, [currentPage, perPage, priceRange, subscription, tags])

  return (
    <Box sx={{ height: "100%" }}>
      {isLoading && (
        <Box sx={{ alignItems: "center", display: "flex", height: "100%", justifyContent: "center", width: "100%" }}>
          <CircularProgress />
        </Box>
      )}
      {!isLoading && isSuccess && data.data.length === 0 && <NoResults />}
      {!isLoading && isError && <Error />}
      {!isLoading && isSuccess && data.data.length > 0 && <ResultsGrid products={data.data} />}
    </Box>
  )
}
