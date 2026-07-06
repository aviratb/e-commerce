import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart'
import FavoriteIcon from '@mui/icons-material/Favorite'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder'
import StarRoundedIcon from '@mui/icons-material/StarRounded'
import { Box, Button, Chip, Container, Divider, Stack, Typography } from '@mui/material'
import { useState } from 'react'
import { Navigate, useParams } from 'react-router-dom'
import { useCart } from '../hooks/useCart.js'
import { getProductById, products } from '../data/products.js'
import { formatCurrency } from '../utils/format.js'
import ProductCard from '../components/ProductCard.jsx'
import ProductOptions from '../components/ProductOptions.jsx'

function ProductDetails() {
  const { id } = useParams()
  const product = getProductById(id)
  const { addToCart, isWishlisted, toggleWishlist } = useCart()
  const [selectedSize, setSelectedSize] = useState(product?.sizes?.[0] ?? 'One size')
  const [selectedColor, setSelectedColor] = useState(product?.colors?.[0]?.name ?? 'Default')

  if (!product) return <Navigate to="/products" replace />

  const related = products.filter((item) => item.category === product.category && item.id !== product.id).slice(0, 3)
  const saved = isWishlisted(product.id)

  return (
    <Container maxWidth="xl" sx={{ py: { xs: 5, md: 8 } }}>
      <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', md: '1.1fr 0.9fr' }, gap: { xs: 4, md: 7 } }}>
        <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', sm: '1fr 1fr' }, gap: 2 }}>
          {product.gallery.map((image) => (
            <Box
              key={image}
              component="img"
              src={image}
              alt={product.name}
              sx={{ width: '100%', height: { xs: 420, md: 620 }, objectFit: 'cover', borderRadius: 2 }}
            />
          ))}
        </Box>
        <Box sx={{ alignSelf: 'start', position: { md: 'sticky' }, top: 96 }}>
          <Chip label={product.badge} color="secondary" sx={{ mb: 2 }} />
          <Typography variant="h2" fontSize={{ xs: 38, md: 56 }} lineHeight={1}>
            {product.name}
          </Typography>
          <Stack direction="row" spacing={1} alignItems="center" my={2} color="#a66f00">
            <StarRoundedIcon />
            <Typography fontWeight={800}>{product.rating}</Typography>
            <Typography color="text.secondary">Premium customer rating</Typography>
          </Stack>
          <Typography variant="h4" mb={2}>
            {formatCurrency(product.price)}
          </Typography>
          <Typography color="text.secondary" fontSize={18} mb={3}>
            {product.description}
          </Typography>
          <ProductOptions
            product={product}
            selectedSize={selectedSize}
            selectedColor={selectedColor}
            onSizeChange={setSelectedSize}
            onColorChange={setSelectedColor}
          />
          <Divider sx={{ my: 3 }} />
          <Stack direction={{ xs: 'column', sm: 'row' }} spacing={1.5}>
            <Button
              variant="contained"
              size="large"
              startIcon={<AddShoppingCartIcon />}
              onClick={() => addToCart(product.id, 1, { size: selectedSize, color: selectedColor })}
              fullWidth
            >
              Add to Cart
            </Button>
            <Button
              variant="outlined"
              size="large"
              startIcon={saved ? <FavoriteIcon /> : <FavoriteBorderIcon />}
              onClick={() => toggleWishlist(product.id)}
              color={saved ? 'error' : 'primary'}
              fullWidth
            >
              {saved ? 'Saved' : 'Wishlist'}
            </Button>
          </Stack>
          <Divider sx={{ my: 3 }} />
          <Stack spacing={1}>
            {product.details.map((detail) => (
              <Typography key={detail}>- {detail}</Typography>
            ))}
          </Stack>
        </Box>
      </Box>

      {related.length > 0 && (
        <Box mt={8}>
          <Typography variant="h4" mb={3}>
            Complete the edit
          </Typography>
          <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', sm: 'repeat(2, 1fr)', lg: 'repeat(3, 1fr)' }, gap: 3 }}>
            {related.map((item) => (
              <ProductCard key={item.id} product={item} />
            ))}
          </Box>
        </Box>
      )}
    </Container>
  )
}

export default ProductDetails
