import React from 'react'
import { Box } from '@mui/material'

interface EntryProps extends React.PropsWithChildren {}

const Entry: React.FC<EntryProps> = (props): React.ReactElement => {
  const { children } = props
  return (
    <Box
      sx={{
        minHeight: '100vh',
        backgroundColor: 'primary.main',
        color: 'primary.contrastText',
        maxWidth: '100vw',
        width: '100%',
        overflowX: 'hidden'
      }}
    >
      {children}
    </Box>
  )
}
export default Entry
