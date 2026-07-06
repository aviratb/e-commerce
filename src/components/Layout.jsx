import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined'
import LocalMallOutlinedIcon from '@mui/icons-material/LocalMallOutlined'
import MenuIcon from '@mui/icons-material/Menu'
import {
  AppBar,
  Badge,
  Box,
  Button,
  Container,
  Drawer,
  IconButton,
  Snackbar,
  Stack,
  Toolbar,
  Typography,
} from '@mui/material'
import { useState } from 'react'
import { NavLink, Outlet } from 'react-router-dom'
import { useCart } from '../hooks/useCart.js'
import CartDrawer from './CartDrawer.jsx'

const navItems = [
  { label: 'Home', to: '/' },
  { label: 'Shop', to: '/products' },
  { label: 'Account', to: '/account' },
]

const navButtonSx = ({ isActive }) => ({
  color: isActive ? 'primary.main' : 'text.secondary',
  bgcolor: isActive ? 'rgba(15, 118, 110, 0.10)' : 'transparent',
  '&:hover': { bgcolor: 'rgba(15, 118, 110, 0.10)' },
})

function Layout() {
  const { closeToast, openCartDrawer, toast, totalItems } = useCart()
  const [open, setOpen] = useState(false)

  const navLinks = (
    <Stack direction={{ xs: 'column', md: 'row' }} spacing={1}>
      {navItems.map((item) => (
        <Button key={item.to} component={NavLink} to={item.to} sx={navButtonSx}>
          {item.label}
        </Button>
      ))}
    </Stack>
  )

  return (
    <Box className="app-shell">
      <AppBar
        position="sticky"
        elevation={0}
        sx={{
          bgcolor: 'rgba(255, 253, 248, 0.88)',
          backdropFilter: 'blur(18px)',
          borderBottom: '1px solid',
          borderColor: 'divider',
          color: 'primary.main',
        }}
      >
        <Toolbar sx={{ minHeight: 72 }}>
          <Container
            maxWidth="xl"
            sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}
          >
            <Stack direction="row" spacing={1.2} alignItems="center" component={NavLink} to="/">
              <Box
                sx={{
                  width: 38,
                  height: 38,
                  borderRadius: 1,
                  bgcolor: 'primary.main',
                  color: 'primary.contrastText',
                  display: 'grid',
                  placeItems: 'center',
                  fontWeight: 900,
                }}
              >
                L
              </Box>
              <Box>
                <Typography variant="h6" lineHeight={1}>
                  LuxeLane
                </Typography>
                <Typography variant="caption" color="text.secondary">
                  Modern atelier
                </Typography>
              </Box>
            </Stack>

            <Box sx={{ display: { xs: 'none', md: 'block' } }}>{navLinks}</Box>

            <Stack direction="row" spacing={1} alignItems="center">
              <IconButton component={NavLink} to="/account" aria-label="Account">
                <AccountCircleOutlinedIcon />
              </IconButton>
              <IconButton onClick={openCartDrawer} aria-label="Open cart">
                <Badge badgeContent={totalItems} color="secondary">
                  <LocalMallOutlinedIcon />
                </Badge>
              </IconButton>
              <IconButton
                onClick={() => setOpen(true)}
                sx={{ display: { xs: 'inline-flex', md: 'none' } }}
                aria-label="Open menu"
              >
                <MenuIcon />
              </IconButton>
            </Stack>
          </Container>
        </Toolbar>
      </AppBar>

      <Drawer anchor="right" open={open} onClose={() => setOpen(false)}>
        <Box sx={{ width: 280, p: 3 }} onClick={() => setOpen(false)}>
          <Typography variant="h6" mb={3}>
            LuxeLane
          </Typography>
          {navLinks}
          <Button
            component={NavLink}
            to="/cart"
            variant="contained"
            fullWidth
            sx={{ mt: 3 }}
            startIcon={<LocalMallOutlinedIcon />}
          >
            Cart
          </Button>
        </Box>
      </Drawer>

      <Box component="main">
        <Outlet />
      </Box>

      <CartDrawer />
      <Snackbar
        key={toast?.id}
        open={Boolean(toast)}
        autoHideDuration={2600}
        onClose={closeToast}
        message={toast?.message}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
      />

      <Box component="footer" sx={{ bgcolor: '#17211f', color: '#ffffff', mt: 8, py: 5 }}>
        <Container maxWidth="xl">
          <Stack
            direction={{ xs: 'column', md: 'row' }}
            spacing={2}
            justifyContent="space-between"
            alignItems={{ xs: 'flex-start', md: 'center' }}
          >
            <Box>
              <Typography variant="h5">LuxeLane</Typography>
              <Typography color="rgba(255,255,255,0.70)">
                Curated fashion essentials, built as a polished React commerce demo.
              </Typography>
            </Box>
            <Stack direction="row" spacing={1.5} flexWrap="wrap">
              <Typography variant="body2">Secure checkout</Typography>
              <Typography variant="body2">Local cart</Typography>
              <Typography variant="body2">Responsive UI</Typography>
            </Stack>
          </Stack>
        </Container>
      </Box>
    </Box>
  )
}

export default Layout
