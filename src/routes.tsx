import * as React from "react"
import { createHashRouter } from "react-router-dom"
import { Layout } from "./components/layout/layout"
import { ProductViewer } from "./components/product-viewer/product-viewer"
import { Search } from "./components/search/search"

export const routes = createHashRouter([
  {
    children: [
      { path: "/", element: <Search /> },
      { path: "/product/:productName", element: <ProductViewer /> },
    ],
    element: <Layout />,
    path: "/",
  },
])
