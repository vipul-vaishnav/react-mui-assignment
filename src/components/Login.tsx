import React, { useState, FormEvent, ChangeEvent } from 'react'
import { Box, Button } from '@mui/material'
import PersonIcon from '@mui/icons-material/Person'
import Input from './Input'
import { toast } from 'react-hot-toast'
import { RegisterData } from './Register'
import { useNavigate } from 'react-router-dom'
import ILogin from './interfaces/ILogin'

const Login: React.FC<ILogin> = (props): React.ReactElement => {
  const { setUser } = props
  const localUserData = localStorage.getItem('local_users')

  const navigate = useNavigate()

  const [name, setName] = useState<string>('')

  const handleOnChange = (e: ChangeEvent<HTMLInputElement>) => setName(e.target.value)

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    if (!name || name.trim().length < 6) {
      toast.error('Name should be at least 6 characters')
      return
    }

    if (localUserData) {
      const data: RegisterData[] = JSON.parse(localUserData)

      const isNamePresent = data.find((user) => user.name === name)

      if (isNamePresent) {
        toast.success('User found successfully')
        navigate('/')
        setName('')
        setUser(isNamePresent)
      } else {
        toast.error('User not found')
      }
    } else {
      toast.error('User not found')
    }
  }

  return (
    <Box component="form" mb={3} onSubmit={handleSubmit}>
      <Input name="name" placeholder="Enter your name..." icon={PersonIcon} value={name} onChange={handleOnChange} />
      <Button type="submit" variant="contained" sx={{ py: 1 }} fullWidth>
        Log In
      </Button>
    </Box>
  )
}
export default Login
