import AddIcon from '@mui/icons-material/Add'
import DeleteOutlinedIcon from '@mui/icons-material/DeleteOutlined'
import RemoveIcon from '@mui/icons-material/Remove'
import ShoppingBagOutlinedIcon from '@mui/icons-material/ShoppingBagOutlined'
import { Box, Button, Container, IconButton, Stack, Typography } from '@mui/material'
import { Link } from 'react-router-dom'
import OrderSummary from '../components/OrderSummary.jsx'
import { useCart } from '../hooks/useCart.js'
import { formatCurrency } from '../utils/format.js'

function Cart() {
  const { cartItems, subtotal, shipping, tax, total, updateQuantity, removeFromCart } = useCart()

  return (
    <Container maxWidth="xl" sx={{ py: { xs: 5, md: 8 } }}>
      <Typography variant="h2" mb={1}>
        Shopping Cart
      </Typography>
      <Typography color="text.secondary" mb={4.5}>
        Review your selected pieces before checkout.
      </Typography>

      {cartItems.length === 0 ? (
        <Box sx={{ bgcolor: 'background.paper', border: '1px solid', borderColor: 'divider', borderRadius: 2, p: 5, textAlign: 'center' }}>
          <ShoppingBagOutlinedIcon sx={{ fontSize: 54, color: 'secondary.main', mb: 1 }} />
          <Typography variant="h4" mb={1}>
            Your cart is empty
          </Typography>
          <Typography color="text.secondary" mb={3}>
            Add a few LuxeLane pieces to start an order.
          </Typography>
          <Button component={Link} to="/products" variant="contained">
            Shop Collection
          </Button>
        </Box>
      ) : (
        <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', lg: '1fr 420px' }, gap: { xs: 3, lg: 4 } }}>
          <Stack spacing={2.5}>
            {cartItems.map((item) => (
              <Box
                key={item.lineKey}
                sx={{
                  display: 'grid',
                  gridTemplateColumns: { xs: '96px 1fr', sm: '140px 1fr auto' },
                  gap: { xs: 2, sm: 3 },
                  bgcolor: 'background.paper',
                  border: '1px solid',
                  borderColor: 'divider',
                  borderRadius: 2,
                  p: { xs: 2, sm: 2.5 },
                }}
              >
                <Box component="img" src={item.image} alt={item.name} sx={{ width: '100%', height: 150, objectFit: 'cover', borderRadius: 1 }} />
                <Box>
                  <Typography variant="h6">{item.name}</Typography>
                  <Typography color="text.secondary">{item.category}</Typography>
                  <Typography color="text.secondary" variant="body2">
                    {item.selectedColor} · {item.selectedSize}
                  </Typography>
                  <Typography fontWeight={800} mt={1}>
                    {formatCurrency(item.price)}
                  </Typography>
                  <Stack direction="row" alignItems="center" spacing={1} mt={2}>
                    <IconButton size="small" onClick={() => updateQuantity(item.lineKey, item.quantity - 1)} aria-label="Decrease quantity">
                      <RemoveIcon />
                    </IconButton>
                    <Typography sx={{ minWidth: 28, textAlign: 'center' }}>{item.quantity}</Typography>
                    <IconButton size="small" onClick={() => updateQuantity(item.lineKey, item.quantity + 1)} aria-label="Increase quantity">
                      <AddIcon />
                    </IconButton>
                    <IconButton size="small" onClick={() => removeFromCart(item.lineKey)} aria-label="Remove item">
                      <DeleteOutlinedIcon />
                    </IconButton>
                  </Stack>
                </Box>
                <Typography variant="h6" alignSelf="center">
                  {formatCurrency(item.price * item.quantity)}
                </Typography>
              </Box>
            ))}
          </Stack>
          <OrderSummary subtotal={subtotal} shipping={shipping} tax={tax} total={total} actionLabel="Checkout" actionTo="/checkout" />
        </Box>
      )}
    </Container>
  )
}

export default Cart
