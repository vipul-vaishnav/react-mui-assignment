import { CssBaseline, ThemeProvider } from '@mui/material'
import React from 'react'
import { Route, Routes } from 'react-router-dom'
import theme from './mui/theme'
import About from './pages/About'
import Auth from './pages/Auth'
import Home from './pages/Home'
import NotFound from './pages/NotFound'
import Entry from './components/Entry'

const App: React.FC = (): React.ReactElement => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Entry>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/register" element={<Auth />} />
          <Route path="/login" element={<Auth />} />
          <Route path="/about" element={<About />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Entry>
    </ThemeProvider>
  )
}
export default App
