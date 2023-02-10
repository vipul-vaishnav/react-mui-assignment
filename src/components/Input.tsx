import React from 'react'
import IInput from './interfaces/IInput'
import { TextField, InputAdornment } from '@mui/material'
import PhoneIcon from '@mui/icons-material/Phone'

const Input: React.FC<IInput> = (props): React.ReactElement => {
  const { type = 'text', name, placeholder, icon: Icon = PhoneIcon, value, onChange = () => {} } = props

  return (
    <TextField
      type={type}
      name={name}
      size="medium"
      variant="standard"
      autoComplete="off"
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      sx={{
        input: {
          color: 'white',
          padding: '12px 0',
          '::placeholder': {
            color: '#adb5bd',
            opacity: 1
          }
        },
        mb: 3
      }}
      InputProps={{
        startAdornment: (
          <InputAdornment position="start">
            <Icon sx={{ color: '#adb5bd' }} />
          </InputAdornment>
        )
      }}
      fullWidth
      focused
    />
  )
}
export default Input
