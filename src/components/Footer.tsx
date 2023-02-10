import React from 'react'
import { Link as RouterLink } from 'react-router-dom'
import { Box, Stack, Typography, Link } from '@mui/material'
const Footer: React.FC = (): React.ReactElement => {
  return (
    <Box component="footer" textAlign="center" p={3} sx={{ backgroundColor: 'secondary.main' }}>
      <Stack direction="row">
        <Typography>Vipul</Typography>
        <Typography sx={{ width: '100%' }}>
          &copy; {new Date().getFullYear()}{' '}
          <Link href="https://github.com/vipul-vaishnav" target="_blank" rel="noopener noreferrer">
            Vipul Vaishnav
          </Link>{' '}
          | All rights reserved.
        </Typography>
        <Box>
          <RouterLink to="/about" style={{ color: 'white', textDecoration: 'none' }}>
            About
          </RouterLink>
        </Box>
      </Stack>
    </Box>
  )
}
export default Footer
