import { css, Global } from "@emotion/react"
import { ThemeProvider } from "@mui/material"
import reset from "emotion-reset"
import * as React from "react"
import { useSelector } from "react-redux"
import { RouterProvider } from "react-router-dom"
import { routes } from "./routes"
import { getUIMode } from "./store/ui.reducer"
import { darkTheme, theme } from "./theme"

const globalStyles = (darkMode: boolean) => css`
  ${reset}
  * {
    box-sizing: border-box;
    font-family: Roboto, sans-serif;
  }
  html,
  body,
  #app {
    background-color: ${darkMode ? "black" : "white"};
    height: 100%;
    width: 100%;
  }
`

export const App = () => {
  const mode = useSelector(getUIMode)

  return (
    <>
      <Global styles={globalStyles(mode === "dark")} />
      <ThemeProvider theme={mode === "light" ? theme : darkTheme}>
        <RouterProvider router={routes} />
      </ThemeProvider>
    </>
  )
}
