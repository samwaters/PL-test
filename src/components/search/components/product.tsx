import { ShoppingBasket } from "@mui/icons-material"
import { Box, Button, Card, CardActionArea, CardContent, CardMedia, Chip, Typography } from "@mui/material"
import * as React from "react"
import { Product } from "../../../api/types"

interface Props {
  product: Product
}
export const ProductCard = ({ product }: Props) => {
  return (
    <Card sx={{ marginBottom: "10px" }} variant="outlined">
      <CardActionArea sx={{ display: "flex" }}>
        <CardMedia component="img" image={product.image_src} sx={{ width: "140px" }} />
        <CardContent sx={{ flexGrow: 1 }}>
          <Typography variant="h6" component="div">
            {product.title}
          </Typography>
          <Box sx={{ display: "flex", flexDirection: "row", gap: "10px" }}>
            {product.tags.map((tag) => (
              <Chip key={tag} label={tag} variant="filled" />
            ))}
          </Box>
          <Box sx={{ alignItems: "center", display: "flex", flexDirection: "row", marginTop: "10px" }}>
            <Typography variant="body2" component="div">
              By {product.vendor}
            </Typography>
            <Box sx={{ flexGrow: 1, textAlign: "center" }}>
              {product.subscription && (
                <Typography variant="body2" component="div">
                  Save {product.subscription_discount}% with a subscription on this product
                </Typography>
              )}
            </Box>
            <Box>
              <Button component="div" size="small" startIcon={<ShoppingBasket />} variant="contained">
                £{product.price.toFixed(2)}
              </Button>
            </Box>
          </Box>
        </CardContent>
      </CardActionArea>
    </Card>
  )
}
