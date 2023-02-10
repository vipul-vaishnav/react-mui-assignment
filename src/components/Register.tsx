import React, { ChangeEvent, FormEvent, useState } from 'react'
import { Box, Button } from '@mui/material'
import PersonIcon from '@mui/icons-material/Person'
import AlternateEmailIcon from '@mui/icons-material/AlternateEmail'
import PhoneIcon from '@mui/icons-material/Phone'
import Input from './Input'
import IInput from './interfaces/IInput'
import { toast } from 'react-hot-toast'
import { useNavigate } from 'react-router-dom'
import IRegister from './interfaces/IRegister'

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

const Register: React.FC<IRegister> = (props): React.ReactElement => {
  const { setUser } = props

  const localUserData = localStorage.getItem('local_users')

  const navigate = useNavigate()

  const [formData, setFormData] = useState<RegisterData>({ name: '', email: '', phone: '' })
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setFormData((prev) => {
      return { ...prev, [e.target.name]: e.target.value }
    })
  }

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    if (!formData.name || formData.name.trim().length < 6) {
      toast.error('Name should be at least 6 characters')
      return
    }

    if (!formData.email) {
      toast.error('Invalid email address')
      return
    }

    if (!formData.phone || formData.phone.trim().length !== 10) {
      toast.error('Phone number should be 10 characters')
      return
    }

    if (isNaN(Number(formData.phone))) {
      toast.error('Invalid phone number')
      return
    }

    if (localUserData) {
      const data: RegisterData[] = JSON.parse(localUserData)

      const isNamePresent = data.find((user) => user.name === formData.name)

      if (isNamePresent) {
        toast.error('User already exists, please choose another name')
        return
      } else {
        const userData = [...data]
        userData.push(formData)
        localStorage.setItem('local_users', JSON.stringify(userData))
        toast.success('User added successfully')
        setUser(formData)
        navigate('/')
        setFormData({ name: '', email: '', phone: '' })
      }
    } else {
      const userData = []
      userData.push(formData)
      localStorage.setItem('local_users', JSON.stringify(userData))
      toast.success('User added successfully')
      setUser(formData)
      navigate('/')
      setFormData({ name: '', email: '', phone: '' })
    }
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
