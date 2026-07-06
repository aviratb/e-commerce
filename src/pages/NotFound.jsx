import { Box, Button, Container, Typography } from '@mui/material'
import { Link } from 'react-router-dom'

function NotFound() {
  return (
    <Container maxWidth="md" sx={{ py: 10 }}>
      <Box sx={{ bgcolor: 'background.paper', border: '1px solid', borderColor: 'divider', borderRadius: 2, p: 5, textAlign: 'center' }}>
        <Typography variant="h2" mb={1}>
          Page not found
        </Typography>
        <Typography color="text.secondary" mb={3}>
          This route is not part of the LuxeLane demo.
        </Typography>
        <Button component={Link} to="/" variant="contained">
          Back Home
        </Button>
      </Box>
    </Container>
  )
}

export default NotFound
