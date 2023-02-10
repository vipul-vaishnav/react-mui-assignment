import React from 'react'
import { Box } from '@mui/material'
import GitHubIcon from '@mui/icons-material/GitHub'
import Link from '@mui/material/Link'

type AboutProps = {}

const About: React.FC<AboutProps> = () => {
  return (
    <Box sx={{ display: 'flex', align: 'center', gap: 3 }}>
      <GitHubIcon />{' '}
      <Link href="https://github.com/vipul-vaishanv" style={{ color: 'white' }}>
        Vipul Vaishnav
      </Link>
    </Box>
  )
}
export default About
