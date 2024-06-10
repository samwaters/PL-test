import * as React from "react"
import { createRoot } from "react-dom/client"
// Router
import { Provider } from "react-redux"

// Components
import { App } from "./app"
import { store } from "./store"
// Redux

const root = createRoot(document.getElementById("app"))
root.render(
  <Provider store={store}>
    <App />
  </Provider>,
)
