import Inventory2OutlinedIcon from '@mui/icons-material/Inventory2Outlined'
import PersonOutlinedIcon from '@mui/icons-material/PersonOutlined'
import { Box, Button, Chip, Container, Divider, Stack, Typography } from '@mui/material'
import { Link } from 'react-router-dom'
import { useCart } from '../hooks/useCart.js'
import { formatCurrency } from '../utils/format.js'

function Account() {
  const { addToCart, orders, toggleWishlist, wishlistItems } = useCart()

  return (
    <Container maxWidth="xl" sx={{ py: { xs: 5, md: 8 } }}>
      <Stack direction={{ xs: 'column', md: 'row' }} spacing={4}>
        <Box
          sx={{
            flex: '0 0 360px',
            bgcolor: 'background.paper',
            border: '1px solid',
            borderColor: 'divider',
            borderRadius: 2,
            p: 3,
            alignSelf: 'start',
          }}
        >
          <PersonOutlinedIcon sx={{ fontSize: 48, color: 'secondary.main', mb: 1 }} />
          <Typography variant="h4">Demo Customer</Typography>
          <Typography color="text.secondary" mb={3}>
            customer@luxelane.dev
          </Typography>
          <Divider sx={{ mb: 3 }} />
          <Stack spacing={1}>
            <Typography fontWeight={800}>Portfolio features shown</Typography>
            <Typography color="text.secondary">Persistent cart with localStorage</Typography>
            <Typography color="text.secondary">Saved mock order history</Typography>
            <Typography color="text.secondary">Wishlist saved across visits</Typography>
            <Typography color="text.secondary">Variant-aware cart items</Typography>
          </Stack>
        </Box>

        <Box sx={{ flex: 1 }}>
          <Typography variant="h2" mb={1}>
            Account
          </Typography>
          <Typography color="text.secondary" mb={4}>
            A customer dashboard with local order history for demo confidence.
          </Typography>

          <Box sx={{ mb: 4 }}>
            <Stack direction={{ xs: 'column', sm: 'row' }} justifyContent="space-between" spacing={1} mb={2}>
              <Box>
                <Typography variant="h4">Wishlist</Typography>
                <Typography color="text.secondary">Saved pieces stay available after refresh.</Typography>
              </Box>
              <Chip label={`${wishlistItems.length} saved`} color="secondary" variant="outlined" />
            </Stack>

            {wishlistItems.length === 0 ? (
              <Box sx={{ bgcolor: 'background.paper', border: '1px solid', borderColor: 'divider', borderRadius: 2, p: 3 }}>
                <Typography variant="h6" mb={0.5}>
                  No saved pieces yet
                </Typography>
                <Typography color="text.secondary" mb={2}>
                  Tap the heart on any product to build a wishlist.
                </Typography>
                <Button component={Link} to="/products" variant="outlined">
                  Browse Collection
                </Button>
              </Box>
            ) : (
              <Box
                sx={{
                  display: 'grid',
                  gridTemplateColumns: { xs: '1fr', lg: 'repeat(2, minmax(0, 1fr))' },
                  gap: 2,
                }}
              >
                {wishlistItems.map((item) => (
                  <Box
                    key={item.id}
                    sx={{
                      display: 'grid',
                      gridTemplateColumns: '92px 1fr',
                      gap: 2,
                      bgcolor: 'background.paper',
                      border: '1px solid',
                      borderColor: 'divider',
                      borderRadius: 2,
                      p: 1.5,
                    }}
                  >
                    <Box
                      component="img"
                      src={item.image}
                      alt={item.name}
                      sx={{ width: 92, height: 112, objectFit: 'cover', borderRadius: 1 }}
                    />
                    <Stack spacing={1}>
                      <Box>
                        <Typography component={Link} to={`/products/${item.id}`} fontWeight={800}>
                          {item.name}
                        </Typography>
                        <Typography color="text.secondary" variant="body2">
                          {item.category} - {formatCurrency(item.price)}
                        </Typography>
                      </Box>
                      <Stack direction="row" spacing={1} flexWrap="wrap" useFlexGap>
                        <Button size="small" variant="contained" onClick={() => addToCart(item.id)}>
                          Add to Cart
                        </Button>
                        <Button size="small" variant="text" color="error" onClick={() => toggleWishlist(item.id)}>
                          Remove
                        </Button>
                      </Stack>
                    </Stack>
                  </Box>
                ))}
              </Box>
            )}
          </Box>

          <Typography variant="h4" mb={2}>
            Orders
          </Typography>
          {orders.length === 0 ? (
            <Box sx={{ bgcolor: 'background.paper', border: '1px solid', borderColor: 'divider', borderRadius: 2, p: 5, textAlign: 'center' }}>
              <Inventory2OutlinedIcon sx={{ fontSize: 54, color: 'secondary.main', mb: 1 }} />
              <Typography variant="h4" mb={1}>
                No orders yet
              </Typography>
              <Typography color="text.secondary" mb={3}>
                Complete checkout once and the order will appear here.
              </Typography>
              <Button component={Link} to="/products" variant="contained">
                Shop Collection
              </Button>
            </Box>
          ) : (
            <Stack spacing={2}>
              {orders.map((order) => (
                <Box key={order.id} sx={{ bgcolor: 'background.paper', border: '1px solid', borderColor: 'divider', borderRadius: 2, p: 3 }}>
                  <Stack direction={{ xs: 'column', sm: 'row' }} justifyContent="space-between" spacing={1} mb={2}>
                    <Box>
                      <Typography variant="h6">{order.id}</Typography>
                      <Typography color="text.secondary">
                        {new Date(order.createdAt).toLocaleDateString()}
                      </Typography>
                    </Box>
                    <Chip label="Demo confirmed" color="secondary" />
                  </Stack>
                  <Stack spacing={1}>
                    {order.items.map((item) => (
                      <Stack key={item.lineKey ?? item.id} direction="row" justifyContent="space-between" spacing={2}>
                        <Box>
                          <Typography color="text.secondary">
                            {item.quantity} x {item.name}
                          </Typography>
                          {item.selectedColor && item.selectedSize && (
                            <Typography color="text.secondary" variant="body2">
                              {item.selectedColor} - {item.selectedSize}
                            </Typography>
                          )}
                        </Box>
                        <Typography>{formatCurrency(item.price * item.quantity)}</Typography>
                      </Stack>
                    ))}
                  </Stack>
                  <Divider sx={{ my: 2 }} />
                  <Stack direction="row" justifyContent="space-between">
                    <Typography variant="h6">Total</Typography>
                    <Typography variant="h6">{formatCurrency(order.total)}</Typography>
                  </Stack>
                </Box>
              ))}
            </Stack>
          )}
        </Box>
      </Stack>
    </Container>
  )
}

export default Account
