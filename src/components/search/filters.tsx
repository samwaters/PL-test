import { Box, FormControlLabel, Switch, Typography } from "@mui/material"
import * as React from "react"
import { ChangeEvent } from "react"
import { useDispatch, useSelector } from "react-redux"
import { getSubscription, subscription } from "../../store/filters.reducer"
import { PerPageFilter } from "./filters/perpage"
import { PriceFilter } from "./filters/price"
import { TagsFilter } from "./filters/tags"

export const Filters = () => {
  const dispatch = useDispatch()
  const hasSubscription = useSelector(getSubscription)

  const handleSubscriptionChange = (e: ChangeEvent<HTMLInputElement>) => {
    dispatch(subscription(e.target.checked))
  }

  return (
    <Box sx={{ display: "flex", flexDirection: "column", gap: "10px" }}>
      <Typography variant="body1" component="div">
        Product Filters
      </Typography>
      <TagsFilter />
      <PriceFilter />
      <FormControlLabel control={<Switch checked={hasSubscription} data-testid="subscription-filter" onChange={handleSubscriptionChange} />} label="Subscription Only" />
      <PerPageFilter />
    </Box>
  )
}
