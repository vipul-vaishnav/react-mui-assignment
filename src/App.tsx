import { CssBaseline, ThemeProvider } from '@mui/material'
import React, { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import theme from './mui/theme'
import About from './pages/About'
import Auth from './pages/Auth'
import Home from './pages/Home'
import NotFound from './pages/NotFound'
import Entry from './components/Entry'
import { Toaster } from 'react-hot-toast'
import { RegisterData } from './components/Register'

export type User = {
  [Property in keyof RegisterData]: RegisterData[Property]
}

const App: React.FC = (): React.ReactElement => {
  const loggedInUser = localStorage.getItem('loggedInUser')
  const [user, setUser] = useState<User | null>(loggedInUser ? JSON.parse(loggedInUser) : null)

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Entry>
        <Routes>
          <Route path="/" element={<Home user={user} setUser={setUser} />} />
          <Route path="/register" element={<Auth setUser={setUser} />} />
          <Route path="/login" element={<Auth setUser={setUser} />} />
          <Route path="/about" element={<About />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Entry>
      <Toaster />
    </ThemeProvider>
  )
}
export default App
