import { Box, Typography, Button } from '@mui/material'
import React from 'react'
import { useNavigate } from 'react-router-dom'

const NotFound: React.FC = (): React.ReactElement => {
  const navigate = useNavigate()
  const handleClick = () => navigate('/')

  return (
    <Box sx={{ my: 5, textAlign: 'center', maxWidth: '540px', mx: 'auto' }}>
      <Typography variant="h3" component="h1" fontWeight={600}>
        404
      </Typography>
      <Typography variant="subtitle1" component="h6" fontWeight={500} mt={4}>
        Oops! Page not found
        <br />
        <br />
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Natus rem consequatur quasi ab ea ipsam quas
        cupiditate est? Voluptates consequatur odit earum mollitia ipsam suscipit.
      </Typography>
      <Button onClick={handleClick} variant="contained" color="secondary" sx={{ mt: 4 }}>
        Home
      </Button>
    </Box>
  )
}
export default NotFound
