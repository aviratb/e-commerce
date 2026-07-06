import SearchIcon from '@mui/icons-material/Search'
import { Box, Chip, Container, InputAdornment, MenuItem, Stack, TextField, Typography } from '@mui/material'
import { useMemo, useState } from 'react'
import ProductCard from '../components/ProductCard.jsx'
import { categories, products } from '../data/products.js'

function Products() {
  const [category, setCategory] = useState('All')
  const [sort, setSort] = useState('featured')
  const [query, setQuery] = useState('')

  const filteredProducts = useMemo(() => {
    const list = products
      .filter((product) => category === 'All' || product.category === category)
      .filter((product) => product.name.toLowerCase().includes(query.toLowerCase()))

    return [...list].sort((a, b) => {
      if (sort === 'low') return a.price - b.price
      if (sort === 'high') return b.price - a.price
      if (sort === 'rating') return b.rating - a.rating
      return 0
    })
  }, [category, query, sort])

  return (
    <Container maxWidth="xl" sx={{ py: { xs: 4, md: 6 } }}>
      <Stack direction={{ xs: 'column', md: 'row' }} justifyContent="space-between" alignItems={{ md: 'end' }} spacing={3} mb={4}>
        <Box>
          <Typography variant="overline" color="secondary.main" fontWeight={800}>
            Shop
          </Typography>
          <Typography variant="h2" fontSize={{ xs: 42, md: 58 }}>
            Collection
          </Typography>
          <Typography color="text.secondary" maxWidth={620}>
            Browse a focused fashion catalog with filters, sorting, and cart actions.
          </Typography>
        </Box>
        <Stack direction={{ xs: 'column', sm: 'row' }} spacing={1.5} width={{ xs: '100%', md: 'auto' }}>
          <TextField
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder="Search products"
            InputProps={{ startAdornment: <InputAdornment position="start"><SearchIcon /></InputAdornment> }}
          />
          <TextField select value={sort} onChange={(event) => setSort(event.target.value)} sx={{ minWidth: 160 }}>
            <MenuItem value="featured">Featured</MenuItem>
            <MenuItem value="low">Price low</MenuItem>
            <MenuItem value="high">Price high</MenuItem>
            <MenuItem value="rating">Top rated</MenuItem>
          </TextField>
        </Stack>
      </Stack>

      <Box sx={{ mb: { xs: 3, md: 4.5 } }}>
        <Stack direction="row" spacing={1} rowGap={1.2} flexWrap="wrap" useFlexGap>
          {categories.map((item) => (
            <Chip
              key={item}
              label={item}
              clickable
              color={category === item ? 'secondary' : 'default'}
              variant={category === item ? 'filled' : 'outlined'}
              onClick={() => setCategory(item)}
              sx={{ px: 0.35 }}
            />
          ))}
        </Stack>
      </Box>

      <Box
        sx={{
          display: 'grid',
          gridTemplateColumns: {
            xs: '1fr',
            sm: 'repeat(2, minmax(0, 1fr))',
            lg: 'repeat(3, minmax(0, 1fr))',
            xl: 'repeat(4, minmax(0, 1fr))',
          },
          gap: { xs: 2, md: 3 },
        }}
      >
        {filteredProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </Box>
    </Container>
  )
}

export default Products
