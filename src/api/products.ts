import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"
import { Product, SearchOptions } from "./types"

export const productsApi = createApi({
  reducerPath: "products",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:3010" }),
  endpoints: (builder) => ({
    getProductById: builder.query<Product, string>({
      query: (id) => `products/${id}`,
    }),
    getProductBySlug: builder.query<Product[], string>({
      query: (slug) => `products?slug=${slug}`,
    }),
    search: builder.query<{ data: Product[]; total: string }, SearchOptions>({
      query: (options) => {
        const opts = [
          "sort=" + options.sort,
          "sortOrder=" + options.sortOrder,
          // Note - must add _start and _end for X-Total-Count header
          // Not using limit and page here as they are redundant
          "_start=" + options.limit * (options.page - 1),
          "_end=" + (options.limit * (options.page - 1) + options.limit),
        ]
        if (options.priceRange) {
          opts.push("price_gte=" + options.priceRange[0]) // min
          opts.push("price_lte=" + options.priceRange[1]) // max
        }
        if (options.subscription) {
          opts.push("subscription=true")
        }
        if (options.tags) {
          options.tags.forEach((tag) => opts.push("tags_like=" + tag))
        }
        return "products?" + opts.join("&")
      },
      transformResponse: (response: Product[], meta) => {
        const total = meta.response.headers.get("X-Total-Count")
        return { data: response, total }
      },
    }),
    searchAll: builder.query<Product[], string>({
      query: (text) => `products?q=${text}`,
    }),
  }),
})

export const { useGetProductByIdQuery, useSearchQuery, useSearchAllQuery, useLazyGetProductByIdQuery, useLazySearchQuery, useLazySearchAllQuery } = productsApi
