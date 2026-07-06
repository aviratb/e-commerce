import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart'
import CloseIcon from '@mui/icons-material/Close'
import FavoriteIcon from '@mui/icons-material/Favorite'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder'
import StarRoundedIcon from '@mui/icons-material/StarRounded'
import {
  Box,
  Button,
  Chip,
  Dialog,
  DialogContent,
  Divider,
  IconButton,
  Stack,
  Typography,
} from '@mui/material'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import { useCart } from '../hooks/useCart.js'
import { formatCurrency } from '../utils/format.js'
import ProductOptions from './ProductOptions.jsx'

function QuickViewDialog({ product, open, onClose }) {
  const { addToCart, isWishlisted, toggleWishlist } = useCart()
  const [selectedSize, setSelectedSize] = useState(product?.sizes?.[0] ?? 'One size')
  const [selectedColor, setSelectedColor] = useState(product?.colors?.[0]?.name ?? 'Default')

  if (!product) return null

  const saved = isWishlisted(product.id)

  const handleAddToCart = () => {
    addToCart(product.id, 1, { size: selectedSize, color: selectedColor })
    onClose()
  }

  return (
    <Dialog open={open} onClose={onClose} maxWidth="md" fullWidth>
      <DialogContent sx={{ p: 0, position: 'relative' }}>
        <IconButton
          onClick={onClose}
          aria-label="Close quick view"
          sx={{
            position: 'absolute',
            top: 12,
            right: 12,
            zIndex: 2,
            bgcolor: 'rgba(255,255,255,0.92)',
            '&:hover': { bgcolor: '#ffffff' },
          }}
        >
          <CloseIcon />
        </IconButton>

        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: { xs: '1fr', md: '1fr 1fr' },
            minHeight: { md: 560 },
          }}
        >
          <Box
            component="img"
            src={product.gallery[0] ?? product.image}
            alt={product.name}
            sx={{
              width: '100%',
              height: { xs: 360, md: '100%' },
              objectFit: 'cover',
            }}
          />

          <Stack spacing={2.2} sx={{ p: { xs: 3, md: 4 }, justifyContent: 'center' }}>
            <Stack direction="row" spacing={1} alignItems="center" flexWrap="wrap" useFlexGap>
              <Chip label={product.badge} color="secondary" />
              <Chip label={product.category} variant="outlined" />
            </Stack>

            <Box>
              <Typography variant="h3" fontSize={{ xs: 34, md: 44 }} lineHeight={1.02}>
                {product.name}
              </Typography>
              <Stack direction="row" spacing={1} alignItems="center" mt={1.5} color="#a66f00">
                <StarRoundedIcon />
                <Typography fontWeight={800}>{product.rating}</Typography>
                <Typography color="text.secondary">Rated by LuxeLane shoppers</Typography>
              </Stack>
            </Box>

            <Typography variant="h4">{formatCurrency(product.price)}</Typography>
            <Typography color="text.secondary" fontSize={17}>
              {product.description}
            </Typography>

            <Divider />

            <ProductOptions
              product={product}
              selectedSize={selectedSize}
              selectedColor={selectedColor}
              onSizeChange={setSelectedSize}
              onColorChange={setSelectedColor}
            />

            <Divider />

            <Stack spacing={1}>
              {product.details.map((detail) => (
                <Typography key={detail} color="text.secondary">
                  - {detail}
                </Typography>
              ))}
            </Stack>

            <Stack direction={{ xs: 'column', sm: 'row' }} spacing={1.5}>
              <Button
                variant="contained"
                size="large"
                startIcon={<AddShoppingCartIcon />}
                onClick={handleAddToCart}
                fullWidth
              >
                Add to Cart
              </Button>
              <Button
                variant="outlined"
                size="large"
                color={saved ? 'error' : 'primary'}
                startIcon={saved ? <FavoriteIcon /> : <FavoriteBorderIcon />}
                onClick={() => toggleWishlist(product.id)}
                fullWidth
              >
                {saved ? 'Saved' : 'Save'}
              </Button>
            </Stack>

            <Button component={Link} to={`/products/${product.id}`} onClick={onClose}>
              View full details
            </Button>
          </Stack>
        </Box>
      </DialogContent>
    </Dialog>
  )
}

export default QuickViewDialog
