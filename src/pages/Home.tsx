import React, { useEffect, useState } from 'react'
import IHome from './interfaces/IHome'
import { Navigate } from 'react-router-dom'
import { Box, Typography, Button, IconButton, useTheme, useMediaQuery, CircularProgress } from '@mui/material'
import PersonIcon from '@mui/icons-material/Person'
import LogoutIcon from '@mui/icons-material/Logout'
import Footer from '../components/Footer'
import axios, { isAxiosError } from 'axios'
import AlternateEmailIcon from '@mui/icons-material/AlternateEmail'
import PhoneIcon from '@mui/icons-material/Phone'

const Home: React.FC<IHome> = (props): React.ReactElement => {
  const { user, setUser } = props
  const theme = useTheme()
  const matches = useMediaQuery('(min-width:600px)')
  const [posts, setPosts] = useState([])
  const [loading, setLoading] = useState<boolean>(false)

  useEffect(() => {
    const getPosts = async () => {
      try {
        setLoading(true)
        const res = await axios.get('https://jsonplaceholder.typicode.com/posts')
        const data = res.data
        setPosts(data)
      } catch (error) {
        if (isAxiosError(error)) {
          console.log(error.message)
        } else {
          console.log(error)
        }
      } finally {
        setLoading(false)
      }
    }

    getPosts()
  }, [])
  const handleLogout = () => {
    setUser(null)
    if (localStorage.getItem('loggedInUser')) {
      localStorage.removeItem('loggedInUser')
    } else {
      return
    }
  }

  if (!user) {
    return <Navigate to="/login" />
  }

  return (
    <Box component="main">
      <Box
        sx={{
          backgroundColor: theme.palette.secondary.main,
          py: 4,
          display: 'grid',
          placeItems: 'center',
          position: 'relative'
        }}
      >
        {matches ? (
          <Button onClick={handleLogout} sx={{ position: 'absolute', top: 0, left: 0 }} startIcon={<LogoutIcon />}>
            Logout
          </Button>
        ) : (
          <IconButton
            onClick={handleLogout}
            sx={{
              position: 'absolute',
              top: 1,
              left: 1,
              color: theme.palette.primary.main
            }}
          >
            <LogoutIcon />
          </IconButton>
        )}
        <PersonIcon
          sx={{
            width: '90px',
            height: '90px',
            backgroundColor: theme.palette.primary.main,
            borderRadius: '100%',
            p: 2
          }}
        />
        <Typography variant="h6" mt={2} fontWeight={600} sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
          <PersonIcon />
          {user.name}
        </Typography>
        <Typography variant="h6" mt={2} fontWeight={600} sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
          <AlternateEmailIcon />
          {user.email}
        </Typography>
        <Typography variant="h6" mt={2} fontWeight={600} sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
          <PhoneIcon />
          {user.phone}
        </Typography>
      </Box>
      {loading && (
        <Box sx={{ width: 'fit-content', mx: 'auto', my: 12 }}>
          <CircularProgress color="secondary" />
        </Box>
      )}
      <Footer />
    </Box>
  )
}
export default Home
