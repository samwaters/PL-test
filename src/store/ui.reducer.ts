import { createSlice } from "@reduxjs/toolkit"
import { RootState } from "../store"

export interface UIState {
  mode: "light" | "dark"
}

const initialState: UIState = {
  mode: "light",
}

const uiSlice = createSlice({
  initialState,
  name: "ui",
  reducers: {
    lightMode: (state) => {
      state.mode = "light"
    },
    darkMode: (state) => {
      state.mode = "dark"
    },
  },
})

export const { lightMode, darkMode } = uiSlice.actions
export const getUIMode = (state: RootState) => state.ui.mode
export default uiSlice.reducer
