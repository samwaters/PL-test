import { Box, Typography } from "@mui/material"
import * as React from "react"

export const Error = () => {
  return (
    <Box sx={{ alignItems: "center", display: "flex", flexDirection: "column", gap: "20px", height: "100%", justifyContent: "center", width: "100%" }}>
      <Typography variant="h6" component="div">
        Something Went Wrong
      </Typography>
      <Typography variant="body2" component="div">
        Unfortunately we could not process your request. Please try again, or try a different search term or filter combination
      </Typography>
    </Box>
  )
}
