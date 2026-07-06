import { createTheme } from '@mui/material/styles'

export const theme = createTheme({
  palette: {
    mode: 'light',
    background: {
      default: '#f7f5f0',
      paper: '#fffdf8',
    },
    primary: {
      main: '#17211f',
      contrastText: '#ffffff',
    },
    secondary: {
      main: '#0f766e',
      contrastText: '#ffffff',
    },
    error: {
      main: '#b42318',
    },
    text: {
      primary: '#17211f',
      secondary: '#63706b',
    },
    divider: 'rgba(23, 33, 31, 0.12)',
  },
  shape: {
    borderRadius: 8,
  },
  typography: {
    fontFamily:
      'Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
    h1: { fontWeight: 800, letterSpacing: 0 },
    h2: { fontWeight: 800, letterSpacing: 0 },
    h3: { fontWeight: 800, letterSpacing: 0 },
    h4: { fontWeight: 800, letterSpacing: 0 },
    h5: { fontWeight: 750, letterSpacing: 0 },
    h6: { fontWeight: 750, letterSpacing: 0 },
    button: { fontWeight: 750, textTransform: 'none', letterSpacing: 0 },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 8,
          boxShadow: 'none',
          minHeight: 44,
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: 8,
          boxShadow: '0 18px 50px rgba(29, 35, 33, 0.10)',
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          backgroundImage: 'none',
        },
      },
    },
  },
})
