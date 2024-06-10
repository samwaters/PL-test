import { Box, Container } from "@mui/material"
import * as React from "react"
import { Outlet } from "react-router-dom"
import { Header } from "../header/header"

export const Layout = () => {
  return (
    <Container maxWidth="xl">
      <Header />
      <Box>
        <Outlet />
      </Box>
    </Container>
  )
}
