import CheckCircleOutlinedIcon from '@mui/icons-material/CheckCircleOutlined'
import { Box, Button, Container, Stack, Typography } from '@mui/material'
import { Link, useParams } from 'react-router-dom'
import { useCart } from '../hooks/useCart.js'
import { formatCurrency } from '../utils/format.js'

function OrderSuccess() {
  const { id } = useParams()
  const { orders } = useCart()
  const order = orders.find((item) => item.id === id)

  return (
    <Container maxWidth="md" sx={{ py: { xs: 6, md: 10 } }}>
      <Box sx={{ bgcolor: 'background.paper', border: '1px solid', borderColor: 'divider', borderRadius: 2, p: { xs: 3, md: 5 }, textAlign: 'center' }}>
        <CheckCircleOutlinedIcon sx={{ fontSize: 70, color: 'secondary.main', mb: 1 }} />
        <Typography variant="h2" fontSize={{ xs: 38, md: 54 }} mb={1}>
          Order Confirmed
        </Typography>
        <Typography color="text.secondary" mb={3}>
          {order ? `Your demo order ${order.id} is saved locally.` : `Order ${id} was completed in this session.`}
        </Typography>
        {order && (
          <Stack spacing={1.2} sx={{ textAlign: 'left', mb: 3 }}>
            {order.items.map((item) => (
              <Stack key={item.lineKey ?? item.id} direction="row" justifyContent="space-between" spacing={2}>
                <Box>
                  <Typography>{item.quantity} x {item.name}</Typography>
                  {item.selectedColor && item.selectedSize && (
                    <Typography variant="body2" color="text.secondary">
                      {item.selectedColor} - {item.selectedSize}
                    </Typography>
                  )}
                </Box>
                <Typography>{formatCurrency(item.price * item.quantity)}</Typography>
              </Stack>
            ))}
            <Stack direction="row" justifyContent="space-between" pt={1}>
              <Typography variant="h6">Total</Typography>
              <Typography variant="h6">{formatCurrency(order.total)}</Typography>
            </Stack>
          </Stack>
        )}
        <Stack direction={{ xs: 'column', sm: 'row' }} spacing={1.5} justifyContent="center">
          <Button component={Link} to="/products" variant="contained">
            Continue Shopping
          </Button>
          <Button component={Link} to="/account" variant="outlined">
            View Orders
          </Button>
        </Stack>
      </Box>
    </Container>
  )
}

export default OrderSuccess
