import { Box, Typography } from "@mui/material"
import * as React from "react"

export const NoResults = () => {
  return (
    <Box sx={{ alignItems: "center", display: "flex", flexDirection: "column", gap: "20px", height: "100%", justifyContent: "center", width: "100%" }}>
      <Typography variant="h6" component="div">
        No Results Found
      </Typography>
      <Typography variant="body2" component="div">
        Try a different search term or filter combination
      </Typography>
    </Box>
  )
}
