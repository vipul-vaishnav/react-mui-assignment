import React, { ChangeEvent, FormEvent, useState } from 'react'
import { Box, Button, InputAdornment, TextField } from '@mui/material'
import PersonIcon from '@mui/icons-material/Person'
import AlternateEmailIcon from '@mui/icons-material/AlternateEmail'
import PhoneIcon from '@mui/icons-material/Phone'
import Input from './Input'
import IInput from './interfaces/IInput'

export type RegisterData = {
  name: string
  email: string
  phone: string
}

type Input = {
  type: IInput['type']
  name: string
  placeholder: string
  icon: React.ComponentType
}

const INPUTS: Input[] = [
  { type: 'text', name: 'name', placeholder: 'John Doe', icon: PersonIcon },
  { type: 'email', name: 'email', placeholder: 'johndoe@email.com', icon: AlternateEmailIcon },
  { type: 'phone', name: 'phone', placeholder: '0123456789', icon: PhoneIcon }
]

const Register: React.FC = (): React.ReactElement => {
  const [formData, setFormData] = useState<RegisterData>({ name: '', email: '', phone: '' })
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setFormData((prev) => {
      return { ...prev, [e.target.name]: e.target.value }
    })
  }

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    console.log(formData)
  }

  return (
    <Box component="form" mb={3} onSubmit={handleSubmit}>
      {INPUTS.map((input, idx) => {
        return (
          <Input
            key={idx}
            name={input.name}
            type={input.type}
            placeholder={input.placeholder}
            icon={input.icon}
            value={formData[input.name as keyof typeof formData]}
            onChange={handleChange}
          />
        )
      })}
      <Button type="submit" variant="contained" sx={{ py: 1 }} fullWidth>
        Register
      </Button>
    </Box>
  )
}
export default Register
