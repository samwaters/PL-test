import { store } from "../../store"
import { addTag, perPage, priceRange, removeTag, subscription } from "../filters.reducer"

describe("Filters reducer", () => {
  it("Adds and removes tags", () => {
    expect(store.getState().filters.tags).toEqual([])
    store.dispatch(addTag("foo"))
    expect(store.getState().filters.tags).toEqual(["foo"])
    store.dispatch(addTag("bar"))
    store.dispatch(addTag("baz"))
    expect(store.getState().filters.tags).toEqual(["foo", "bar", "baz"])
    store.dispatch(removeTag("bar"))
    expect(store.getState().filters.tags).toEqual(["foo", "baz"])
  })

  it("Sets the per page value", () => {
    expect(store.getState().filters.perPage).toEqual(10)
    store.dispatch(perPage(25))
    expect(store.getState().filters.perPage).toEqual(25)
  })

  it("Sets the price range", () => {
    expect(store.getState().filters.minPrice).toEqual(0)
    expect(store.getState().filters.maxPrice).toEqual(150)
    store.dispatch(priceRange([15, 75]))
    expect(store.getState().filters.minPrice).toEqual(15)
    expect(store.getState().filters.maxPrice).toEqual(75)
  })

  it("Sets the subscription value", () => {
    expect(store.getState().filters.subscription).toEqual(false)
    store.dispatch(subscription(true))
    expect(store.getState().filters.subscription).toEqual(true)
  })
})
