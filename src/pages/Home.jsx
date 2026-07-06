import ArrowForwardIcon from '@mui/icons-material/ArrowForward'
import LocalShippingOutlinedIcon from '@mui/icons-material/LocalShippingOutlined'
import ShieldOutlinedIcon from '@mui/icons-material/ShieldOutlined'
import WorkspacePremiumOutlinedIcon from '@mui/icons-material/WorkspacePremiumOutlined'
import { Box, Button, Chip, Container, Stack, Typography } from '@mui/material'
import { motion } from 'motion/react'
import { Link } from 'react-router-dom'
import ProductCard from '../components/ProductCard.jsx'
import { products } from '../data/products.js'

const features = [
  { icon: <WorkspacePremiumOutlinedIcon />, title: 'Curated edits', copy: 'Seasonal pieces with premium styling.' },
  { icon: <LocalShippingOutlinedIcon />, title: 'Fast dispatch', copy: 'Free shipping on orders over $250.' },
  { icon: <ShieldOutlinedIcon />, title: 'Secure flow', copy: 'Cart and checkout built for trust.' },
]

function Home() {
  return (
    <>
      <Box className="hero-image" sx={{ minHeight: { xs: 620, md: 680 }, display: 'flex', alignItems: 'center' }}>
        <Container maxWidth="xl">
          <Box
            component={motion.div}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55 }}
            sx={{ maxWidth: 690, color: '#ffffff', py: 8 }}
          >
            <Chip label="Spring atelier collection" sx={{ mb: 2, bgcolor: '#fffdf8', color: '#17211f' }} />
            <Typography variant="h1" fontSize={{ xs: 44, md: 74 }} lineHeight={0.96} mb={2}>
              LuxeLane
            </Typography>
            <Typography variant="h5" color="rgba(255,255,255,0.86)" maxWidth={560} mb={4}>
              A premium fashion storefront with a polished shopping experience, local cart, and checkout flow.
            </Typography>
            <Stack direction={{ xs: 'column', sm: 'row' }} spacing={1.5}>
              <Button component={Link} to="/products" variant="contained" color="secondary" endIcon={<ArrowForwardIcon />}>
                Shop Collection
              </Button>
              <Button component={Link} to="/account" variant="outlined" sx={{ color: '#fff', borderColor: 'rgba(255,255,255,0.7)' }}>
                View Account
              </Button>
            </Stack>
          </Box>
        </Container>
      </Box>

      <Container maxWidth="xl" sx={{ mt: { xs: 5, md: 8 } }}>
        <Stack direction={{ xs: 'column', md: 'row' }} spacing={2}>
          {features.map((feature) => (
            <Box
              key={feature.title}
              sx={{
                flex: 1,
                bgcolor: 'background.paper',
                border: '1px solid',
                borderColor: 'divider',
                borderRadius: 2,
                p: 3,
              }}
            >
              <Box sx={{ color: 'secondary.main', mb: 1 }}>{feature.icon}</Box>
              <Typography variant="h6">{feature.title}</Typography>
              <Typography color="text.secondary">{feature.copy}</Typography>
            </Box>
          ))}
        </Stack>

        <Stack direction={{ xs: 'column', md: 'row' }} justifyContent="space-between" alignItems={{ md: 'end' }} spacing={2} mt={8} mb={3}>
          <Box>
            <Typography variant="overline" color="secondary.main" fontWeight={800}>
              Featured edit
            </Typography>
            <Typography variant="h3" fontSize={{ xs: 34, md: 46 }}>
              New season essentials
            </Typography>
            <Typography color="text.secondary" maxWidth={560} mt={1}>
              A tight selection of premium pieces with fast cart actions and product detail pages.
            </Typography>
          </Box>
          <Button component={Link} to="/products" endIcon={<ArrowForwardIcon />}>
            Explore all
          </Button>
        </Stack>

        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: {
              xs: '1fr',
              sm: 'repeat(2, minmax(0, 1fr))',
              lg: 'repeat(3, minmax(0, 1fr))',
            },
            gap: 3,
          }}
        >
          {products.slice(0, 3).map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </Box>
      </Container>
    </>
  )
}

export default Home
