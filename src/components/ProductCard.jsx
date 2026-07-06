import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart'
import FavoriteIcon from '@mui/icons-material/Favorite'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder'
import StarRoundedIcon from '@mui/icons-material/StarRounded'
import VisibilityOutlinedIcon from '@mui/icons-material/VisibilityOutlined'
import {
  Box,
  Button,
  Card,
  CardContent,
  CardMedia,
  Chip,
  IconButton,
  Stack,
  Typography,
} from '@mui/material'
import { motion } from 'motion/react'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import { useCart } from '../hooks/useCart.js'
import { formatCurrency } from '../utils/format.js'
import QuickViewDialog from './QuickViewDialog.jsx'

function ProductCard({ product }) {
  const { addToCart, isWishlisted, toggleWishlist } = useCart()
  const [quickViewOpen, setQuickViewOpen] = useState(false)
  const saved = isWishlisted(product.id)

  return (
    <>
      <Card
        component={motion.article}
        className="product-card"
        initial={{ opacity: 0, y: 18 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.35 }}
        sx={{
          height: '100%',
          overflow: 'hidden',
          display: 'flex',
          flexDirection: 'column',
          position: 'relative',
        }}
      >
        <Box sx={{ display: 'block', overflow: 'hidden', position: 'relative' }}>
          <Box component={Link} to={`/products/${product.id}`} sx={{ display: 'block' }}>
            <CardMedia
              component="img"
              image={product.image}
              alt={product.name}
              className="product-media"
              sx={{
                aspectRatio: '4 / 3',
                height: 'auto',
                maxHeight: { xs: 280, md: 300 },
                objectFit: 'cover',
              }}
            />
          </Box>
          <Button
            size="small"
            variant="contained"
            startIcon={<VisibilityOutlinedIcon />}
            onClick={() => setQuickViewOpen(true)}
            sx={{
              position: 'absolute',
              left: 14,
              bottom: 14,
              bgcolor: 'rgba(23, 33, 31, 0.92)',
              '&:hover': { bgcolor: 'primary.main' },
            }}
          >
            Quick view
          </Button>
        </Box>

        <IconButton
          onClick={() => toggleWishlist(product.id)}
          aria-label={saved ? 'Remove from wishlist' : 'Save to wishlist'}
          sx={{
            position: 'absolute',
            top: 12,
            right: 12,
            bgcolor: 'rgba(255,255,255,0.92)',
            color: saved ? 'error.main' : 'primary.main',
            '&:hover': { bgcolor: '#ffffff' },
          }}
        >
          {saved ? <FavoriteIcon /> : <FavoriteBorderIcon />}
        </IconButton>

        <CardContent sx={{ p: 2.2, display: 'flex', flexDirection: 'column', flex: 1 }}>
          <Stack direction="row" justifyContent="space-between" alignItems="center" mb={1}>
            <Chip size="small" label={product.badge} color="secondary" variant="outlined" />
            <Stack direction="row" spacing={0.4} alignItems="center" color="#a66f00">
              <StarRoundedIcon fontSize="small" />
              <Typography variant="body2" fontWeight={750}>
                {product.rating}
              </Typography>
            </Stack>
          </Stack>
          <Typography
            component={Link}
            to={`/products/${product.id}`}
            variant="h6"
            sx={{ lineHeight: 1.2 }}
          >
            {product.name}
          </Typography>
          <Typography color="text.secondary" mb={1.8}>
            {product.category}
          </Typography>
          <Stack direction="row" alignItems="center" justifyContent="space-between" spacing={2} mt="auto">
            <Typography variant="h6">{formatCurrency(product.price)}</Typography>
            <Button
              variant="contained"
              size="small"
              startIcon={<AddShoppingCartIcon />}
              onClick={() => addToCart(product.id)}
            >
              Add
            </Button>
          </Stack>
        </CardContent>
      </Card>

      <QuickViewDialog
        product={product}
        open={quickViewOpen}
        onClose={() => setQuickViewOpen(false)}
      />
    </>
  )
}

export default ProductCard
