import { Box, Button, Stack, Typography } from '@mui/material'

function ProductOptions({ product, selectedColor, selectedSize, onColorChange, onSizeChange }) {
  return (
    <Stack spacing={2}>
      <Box>
        <Stack direction="row" alignItems="center" justifyContent="space-between" mb={1}>
          <Typography fontWeight={800}>Size</Typography>
          <Typography variant="body2" color="text.secondary">
            {selectedSize}
          </Typography>
        </Stack>
        <Stack direction="row" spacing={1} flexWrap="wrap" useFlexGap>
          {product.sizes.map((size) => (
            <Button
              key={size}
              variant={selectedSize === size ? 'contained' : 'outlined'}
              size="small"
              onClick={() => onSizeChange(size)}
              sx={{ minWidth: 48 }}
            >
              {size}
            </Button>
          ))}
        </Stack>
      </Box>

      <Box>
        <Stack direction="row" alignItems="center" justifyContent="space-between" mb={1}>
          <Typography fontWeight={800}>Color</Typography>
          <Typography variant="body2" color="text.secondary">
            {selectedColor}
          </Typography>
        </Stack>
        <Stack direction="row" spacing={1} flexWrap="wrap" useFlexGap>
          {product.colors.map((color) => (
            <Button
              key={color.name}
              variant={selectedColor === color.name ? 'contained' : 'outlined'}
              size="small"
              onClick={() => onColorChange(color.name)}
              sx={{
                gap: 0.8,
                borderColor: selectedColor === color.name ? 'primary.main' : 'divider',
              }}
            >
              <Box
                component="span"
                sx={{
                  width: 14,
                  height: 14,
                  borderRadius: '50%',
                  bgcolor: color.value,
                  border: '1px solid rgba(23, 33, 31, 0.24)',
                }}
              />
              {color.name}
            </Button>
          ))}
        </Stack>
      </Box>
    </Stack>
  )
}

export default ProductOptions
