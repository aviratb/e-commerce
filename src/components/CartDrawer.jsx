import AddIcon from '@mui/icons-material/Add'
import CloseIcon from '@mui/icons-material/Close'
import DeleteOutlinedIcon from '@mui/icons-material/DeleteOutlined'
import LocalMallOutlinedIcon from '@mui/icons-material/LocalMallOutlined'
import RemoveIcon from '@mui/icons-material/Remove'
import {
  Box,
  Button,
  Divider,
  Drawer,
  IconButton,
  Stack,
  Typography,
} from '@mui/material'
import { Link } from 'react-router-dom'
import { useCart } from '../hooks/useCart.js'
import { formatCurrency } from '../utils/format.js'

function CartDrawer() {
  const {
    cartDrawerOpen,
    cartItems,
    closeCartDrawer,
    removeFromCart,
    subtotal,
    total,
    totalItems,
    updateQuantity,
  } = useCart()

  return (
    <Drawer anchor="right" open={cartDrawerOpen} onClose={closeCartDrawer}>
      <Box
        sx={{
          width: { xs: '100vw', sm: 430 },
          maxWidth: '100vw',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          bgcolor: 'background.default',
        }}
      >
        <Stack
          direction="row"
          alignItems="center"
          justifyContent="space-between"
          sx={{ p: 2.5, bgcolor: 'background.paper', borderBottom: '1px solid', borderColor: 'divider' }}
        >
          <Box>
            <Typography variant="h5">Your Cart</Typography>
            <Typography color="text.secondary">
              {totalItems} {totalItems === 1 ? 'item' : 'items'} selected
            </Typography>
          </Box>
          <IconButton onClick={closeCartDrawer} aria-label="Close cart">
            <CloseIcon />
          </IconButton>
        </Stack>

        {cartItems.length === 0 ? (
          <Stack alignItems="center" justifyContent="center" textAlign="center" spacing={2} sx={{ flex: 1, p: 4 }}>
            <LocalMallOutlinedIcon sx={{ fontSize: 56, color: 'secondary.main' }} />
            <Box>
              <Typography variant="h5">Your cart is empty</Typography>
              <Typography color="text.secondary">Add a piece from the collection to start checkout.</Typography>
            </Box>
            <Button component={Link} to="/products" variant="contained" onClick={closeCartDrawer}>
              Shop Collection
            </Button>
          </Stack>
        ) : (
          <>
            <Stack spacing={2} sx={{ flex: 1, overflowY: 'auto', p: 2.5 }}>
              {cartItems.map((item) => (
                <Box
                  key={item.lineKey}
                  sx={{
                    display: 'grid',
                    gridTemplateColumns: '96px 1fr',
                    gap: 1.8,
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
                    sx={{ width: 96, height: 122, objectFit: 'cover', borderRadius: 1 }}
                  />
                  <Stack spacing={1}>
                    <Box>
                      <Typography variant="subtitle1" fontWeight={800} lineHeight={1.2}>
                        {item.name}
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        {item.category}
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        {item.selectedColor} · {item.selectedSize}
                      </Typography>
                    </Box>
                    <Typography fontWeight={800}>{formatCurrency(item.price)}</Typography>
                    <Stack direction="row" alignItems="center" justifyContent="space-between">
                      <Stack direction="row" alignItems="center" spacing={0.6}>
                        <IconButton
                          size="small"
                          onClick={() => updateQuantity(item.lineKey, item.quantity - 1)}
                          aria-label="Decrease quantity"
                        >
                          <RemoveIcon fontSize="small" />
                        </IconButton>
                        <Typography sx={{ minWidth: 24, textAlign: 'center' }}>{item.quantity}</Typography>
                        <IconButton
                          size="small"
                          onClick={() => updateQuantity(item.lineKey, item.quantity + 1)}
                          aria-label="Increase quantity"
                        >
                          <AddIcon fontSize="small" />
                        </IconButton>
                      </Stack>
                      <IconButton
                        size="small"
                        onClick={() => removeFromCart(item.lineKey)}
                        aria-label="Remove item"
                      >
                        <DeleteOutlinedIcon fontSize="small" />
                      </IconButton>
                    </Stack>
                  </Stack>
                </Box>
              ))}
            </Stack>

            <Box sx={{ p: 2.5, bgcolor: 'background.paper', borderTop: '1px solid', borderColor: 'divider' }}>
              <Stack spacing={1.4} mb={2}>
                <Stack direction="row" justifyContent="space-between">
                  <Typography color="text.secondary">Subtotal</Typography>
                  <Typography fontWeight={800}>{formatCurrency(subtotal)}</Typography>
                </Stack>
                <Stack direction="row" justifyContent="space-between">
                  <Typography variant="h6">Estimated total</Typography>
                  <Typography variant="h6">{formatCurrency(total)}</Typography>
                </Stack>
              </Stack>
              <Divider sx={{ mb: 2 }} />
              <Stack spacing={1.2}>
                <Button component={Link} to="/checkout" variant="contained" fullWidth onClick={closeCartDrawer}>
                  Checkout
                </Button>
                <Button component={Link} to="/cart" variant="outlined" fullWidth onClick={closeCartDrawer}>
                  View Full Cart
                </Button>
              </Stack>
            </Box>
          </>
        )}
      </Box>
    </Drawer>
  )
}

export default CartDrawer
