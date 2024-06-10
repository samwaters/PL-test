import * as React from "react"
import { PropsWithChildren } from "react"
import { Provider } from "react-redux"
import { store } from "../store"

export const ProviderWrapper = ({ children }: PropsWithChildren) => {
  return <Provider store={store}>{children}</Provider>
}
