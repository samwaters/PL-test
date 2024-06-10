import * as React from "react"
import { useParams } from "react-router"

export const ProductViewer = () => {
  const { productName } = useParams()

  return <>{productName}</>
}
