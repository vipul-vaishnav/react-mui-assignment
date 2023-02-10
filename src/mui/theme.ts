import { createTheme } from '@mui/material'

const theme = createTheme({
  palette: {
    primary: {
      main: '#1db954',
      contrastText: '#ffffff'
    },
    secondary: {
      main: '#191414'
    }
  },
  typography: {
    fontFamily: "'Inter', sans-serif"
  }
})

export default theme
