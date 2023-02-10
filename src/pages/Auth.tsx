import React from 'react'
import { useLocation, Link } from 'react-router-dom'
import { Box, Card, Typography, useTheme } from '@mui/material'
import Register from '../components/Register'
import Login from '../components/Login'
import IAuth from './interfaces/IAuth'

export enum AuthLocation {
  login = '/login',
  register = '/register'
}

const Auth: React.FC<IAuth> = (props): React.ReactElement => {
  const { setUser } = props
  const theme = useTheme()
  const { pathname } = useLocation()

  return (
    <Box sx={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <Card sx={{ width: '480px', backgroundColor: 'secondary.main', color: 'secondary.contrastText', p: 3 }}>
        <Typography variant="h6" fontWeight={600} mb={3}>
          {pathname === AuthLocation.login ? 'Login' : 'Register'}
        </Typography>
        {pathname === AuthLocation.login ? <Login setUser={setUser} /> : <Register setUser={setUser} />}
        <Typography variant="subtitle2" textAlign="center">
          {pathname === AuthLocation.login ? (
            <>
              Don't have an account?{' '}
              <Link to="/register" style={{ color: theme.palette.primary.main }}>
                Sign up
              </Link>
            </>
          ) : (
            <>
              Already have an account?{' '}
              <Link to="/login" style={{ color: theme.palette.primary.main }}>
                Log in
              </Link>
            </>
          )}
        </Typography>
      </Card>
    </Box>
  )
}
export default Auth
