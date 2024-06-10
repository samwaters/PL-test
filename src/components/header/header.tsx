import { DarkMode } from "@mui/icons-material"
import { AppBar, Avatar, Box, FormControlLabel, Switch, Toolbar, Typography } from "@mui/material"
import * as React from "react"
import { ChangeEvent } from "react"
import { useDispatch, useSelector } from "react-redux"
import { darkMode, getUIMode, lightMode } from "../../store/ui.reducer"

export const Header = () => {
  const mode = useSelector(getUIMode)
  const dispatch = useDispatch()

  const handleModeChange = (e: ChangeEvent<HTMLInputElement>) => {
    dispatch(e.target.checked ? darkMode() : lightMode())
  }

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Box sx={{ flexGrow: 1 }}>
            <Typography variant="h6" component="div">
              PetLab
            </Typography>
          </Box>
          <Box>
            <FormControlLabel control={<Switch checked={mode === "dark"} onChange={handleModeChange} />} label={<DarkMode />} />
          </Box>
          <Avatar>PL</Avatar>
        </Toolbar>
      </AppBar>
    </Box>
  )
}
