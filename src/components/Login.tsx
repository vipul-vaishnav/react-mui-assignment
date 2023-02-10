import React, { useState, FormEvent, ChangeEvent } from 'react'
import { Box, Button } from '@mui/material'
import PersonIcon from '@mui/icons-material/Person'
import Input from './Input'

const Login: React.FC = (): React.ReactElement => {
  const [name, setName] = useState<string>('')

  const handleOnChange = (e: ChangeEvent<HTMLInputElement>) => setName(e.target.value)

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    console.log(name)
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
