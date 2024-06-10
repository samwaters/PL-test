import { FormControl, FormLabel, Slider } from "@mui/material"
import * as React from "react"
import { useDispatch, useSelector } from "react-redux"
import { getPriceRange, priceRange } from "../../../store/filters.reducer"

export const PriceFilter = () => {
  const dispatch = useDispatch()
  const currentPriceRange = useSelector(getPriceRange)
  const handlePriceChange = (_: Event, values: number | number[]) => {
    if (!Array.isArray(values)) return
    dispatch(priceRange(values))
  }

  const priceMarks = [
    { value: 0, label: "£0" },
    { value: 30, label: "£30" },
    { value: 60, label: "£60" },
    { value: 90, label: "£90" },
    { value: 120, label: "£120" },
    { value: 150, label: "£150" },
  ]

  return (
    <FormControl>
      <FormLabel>Price Range</FormLabel>
      <Slider
        data-testid="price-filter"
        onChange={handlePriceChange}
        min={0}
        marks={priceMarks}
        max={150}
        sx={{ marginLeft: "20px", width: "75%" }}
        step={1}
        value={[currentPriceRange[0], currentPriceRange[1]]}
        valueLabelDisplay="auto"
      />
    </FormControl>
  )
}
