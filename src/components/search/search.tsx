import { Box } from "@mui/material"
import * as React from "react"
import { Filters } from "./filters"
import { Results } from "./results"

export const Search = () => {
  return (
    <Box sx={{ display: "flex", flexDirection: "row", gap: "10px" }}>
      <Box sx={{ width: "250px" }}>
        <Filters />
      </Box>
      <Box sx={{ flex: 1 }}>
        <Results />
      </Box>
    </Box>
  )
}
