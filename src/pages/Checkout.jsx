import CreditCardOutlinedIcon from '@mui/icons-material/CreditCardOutlined'
import { Box, Button, Container, Divider, Stack, TextField, Typography } from '@mui/material'
import { useState } from 'react'
import { Navigate, useNavigate } from 'react-router-dom'
import OrderSummary from '../components/OrderSummary.jsx'
import { useCart } from '../hooks/useCart.js'

const initialForm = {
  name: '',
  email: '',
  address: '',
  city: '',
  zip: '',
}

function Checkout() {
  const { cartItems, subtotal, shipping, tax, total, createOrder } = useCart()
  const [form, setForm] = useState(initialForm)
  const navigate = useNavigate()

  if (cartItems.length === 0) return <Navigate to="/products" replace />

  const handleChange = (event) => {
    setForm((current) => ({ ...current, [event.target.name]: event.target.value }))
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    const order = createOrder(form)
    navigate(`/order/${order.id}`)
  }

  return (
    <Container maxWidth="xl" sx={{ py: { xs: 5, md: 8 } }}>
      <Typography variant="h2" mb={1}>
        Checkout
      </Typography>
      <Typography color="text.secondary" mb={4}>
        Complete a realistic demo checkout and generate a saved mock order.
      </Typography>
      <Box component="form" onSubmit={handleSubmit} sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', lg: '1fr 380px' }, gap: 4 }}>
        <Box sx={{ bgcolor: 'background.paper', border: '1px solid', borderColor: 'divider', borderRadius: 2, p: { xs: 2.5, md: 4 } }}>
          <Typography variant="h5" mb={2}>
            Shipping Details
          </Typography>
          <Stack spacing={2}>
            <TextField label="Full name" name="name" value={form.name} onChange={handleChange} required fullWidth />
            <TextField label="Email" name="email" type="email" value={form.email} onChange={handleChange} required fullWidth />
            <TextField label="Street address" name="address" value={form.address} onChange={handleChange} required fullWidth />
            <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2}>
              <TextField label="City" name="city" value={form.city} onChange={handleChange} required fullWidth />
              <TextField label="ZIP code" name="zip" value={form.zip} onChange={handleChange} required fullWidth />
            </Stack>
          </Stack>

          <Divider sx={{ my: 4 }} />
          <Stack direction="row" spacing={1.5} alignItems="center" mb={2}>
            <CreditCardOutlinedIcon color="secondary" />
            <Typography variant="h5">Payment</Typography>
          </Stack>
          <Stack spacing={2}>
            <TextField label="Card number" value="4242 4242 4242 4242" fullWidth disabled />
            <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2}>
              <TextField label="Expiry" value="12 / 30" fullWidth disabled />
              <TextField label="CVC" value="123" fullWidth disabled />
            </Stack>
          </Stack>
          <Button type="submit" variant="contained" size="large" fullWidth sx={{ mt: 4 }}>
            Place Demo Order
          </Button>
        </Box>

        <OrderSummary subtotal={subtotal} shipping={shipping} tax={tax} total={total} />
      </Box>
    </Container>
  )
}

export default Checkout
