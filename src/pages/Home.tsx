import React from 'react'
import IHome from './interfaces/IHome'
import { Navigate } from 'react-router-dom'

const Home: React.FC<IHome> = (props): React.ReactElement => {
  const { user } = props

  if (!user) {
    return <Navigate to="/login" />
  }

  return <div>Have a good coding</div>
}
export default Home
