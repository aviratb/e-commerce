import { Box, Button, Divider, Stack, Typography } from '@mui/material'
import { Link } from 'react-router-dom'
import { formatCurrency } from '../utils/format.js'

const rowSx = {
  display: 'grid',
  gridTemplateColumns: '1fr auto',
  alignItems: 'center',
  columnGap: 3,
}

function OrderSummary({ subtotal, shipping, tax, total, actionLabel, actionTo, disabled = false }) {
  return (
    <Box
      sx={{
        bgcolor: 'background.paper',
        border: '1px solid',
        borderColor: 'divider',
        borderRadius: 2,
        p: { xs: 2.5, md: 3 },
        position: { md: 'sticky' },
        top: 96,
      }}
    >
      <Typography variant="h5" mb={2}>
        Order Summary
      </Typography>
      <Stack spacing={1.8}>
        <Box sx={rowSx}>
          <Typography color="text.secondary">Subtotal</Typography>
          <Typography fontWeight={700}>{formatCurrency(subtotal)}</Typography>
        </Box>
        <Box sx={rowSx}>
          <Typography color="text.secondary">Shipping</Typography>
          <Typography fontWeight={700}>{shipping === 0 ? 'Free' : formatCurrency(shipping)}</Typography>
        </Box>
        <Box sx={rowSx}>
          <Typography color="text.secondary">Estimated tax</Typography>
          <Typography fontWeight={700}>{formatCurrency(tax)}</Typography>
        </Box>
        <Divider sx={{ my: 0.5 }} />
        <Box sx={rowSx}>
          <Typography variant="h6">Total</Typography>
          <Typography variant="h6">{formatCurrency(total)}</Typography>
        </Box>
      </Stack>
      {actionLabel && actionTo && (
        <Button
          component={Link}
          to={actionTo}
          variant="contained"
          fullWidth
          disabled={disabled}
          sx={{ mt: 3 }}
        >
          {actionLabel}
        </Button>
      )}
    </Box>
  )
}

export default OrderSummary
