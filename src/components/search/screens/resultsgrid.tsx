import { Box, Pagination, Typography } from "@mui/material"
import * as React from "react"
import { ChangeEvent } from "react"
import { useDispatch, useSelector } from "react-redux"
import { Product } from "../../../api/types"
import { getPerPage } from "../../../store/filters.reducer"
import { currentPage, getCurrentPage, getTotalResults } from "../../../store/pagination.reducer"
import { ProductCard } from "../components/product"

interface Props {
  products: Product[]
}

export const ResultsGrid = ({ products }: Props) => {
  const currentPageNumber = useSelector(getCurrentPage)
  const dispatch = useDispatch()
  const perPage = useSelector(getPerPage)
  const totalResults = useSelector(getTotalResults)

  const handlePaginationChange = (_: ChangeEvent, page: number) => {
    dispatch(currentPage(page))
  }

  return (
    <Box sx={{ display: "flex", flexDirection: "column", gap: "10px", marginTop: "10px" }}>
      <Box>
        <Box sx={{ alignItems: "center", display: "flex", flexDirection: "row" }}>
          <Box>
            <Typography variant="body1" component="div">
              Displaying results {(currentPageNumber - 1) * perPage + 1} to {(currentPageNumber - 1) * perPage + products.length} of {totalResults}
            </Typography>
          </Box>
          <Box sx={{ flexGrow: 1 }}></Box>
          <Box>
            <Pagination count={Math.ceil(totalResults / perPage)} page={currentPageNumber} onChange={handlePaginationChange} />
          </Box>
        </Box>
      </Box>
      <Box sx={{ flex: 1, maxHeight: "calc(100dvh - 116px)", overflowY: "scroll" }}>
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </Box>
    </Box>
  )
}
