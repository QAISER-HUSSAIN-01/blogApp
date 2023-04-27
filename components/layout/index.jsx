import React from 'react'
import { Container, Box } from '@mui/material'
import Navbar from '../navbar'
export default function Layout({ children }) {
  return (
    <Container maxWidth='xl' disableGutters>
      <Box><Navbar /></Box>
      <Box sx={{
        padding: {
          xs: '150px 20px 0px 20px',
          sm: '150px 20px 0px 20px',
          md: '150px 60px 0px 60px',
          lg: '150px 60px 0px 60px',
          xl: '150px 100px 0px 100px'
        }
      }}>  {/* add background color here */}
        {children}
      </Box>
    </Container>
  )
}
