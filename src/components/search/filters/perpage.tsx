import { FormControl, InputLabel, MenuItem, Select, SelectChangeEvent } from "@mui/material"
import * as React from "react"
import { useDispatch, useSelector } from "react-redux"
import { getPerPage, perPage } from "../../../store/filters.reducer"

export const PerPageFilter = () => {
  const dispatch = useDispatch()
  const resultsPerPage = useSelector(getPerPage)

  const handleResultsPerPageChange = (e: SelectChangeEvent<number>) => {
    dispatch(perPage(e.target.value as number))
  }

  return (
    <FormControl size="small" fullWidth>
      <InputLabel>Results Per Page</InputLabel>
      <Select onChange={handleResultsPerPageChange} value={resultsPerPage}>
        <MenuItem value={3}>3</MenuItem>
        <MenuItem value={10}>10</MenuItem>
        <MenuItem value={25}>25</MenuItem>
        <MenuItem value={50}>50</MenuItem>
      </Select>
    </FormControl>
  )
}
