import React from 'react'
import { Typography, Box, Button,Link as StyledLink } from '@mui/material'
import Link from 'next/link'
import { StyledAppBar, StyledToolbar, NavBox, NavItems } from './style';
export default function Navbar() {
  return (
    <StyledAppBar>
      <StyledToolbar >
        <Box>
          <Typography variant='h5' component='div' sx={{fontFamily:'Bruno Ace SC, cursive'}}>BlogApp</Typography>
        </Box>
        <NavBox>
          <NavItems component={'nav'}>
            <Link href='story' style={{color:'black',textDecoration:'none'}}>Our Story</Link>
            <Link href='story' style={{color:'black',textDecoration:'none'}}>Membership</Link>
            <Link href='story' style={{color:'black',textDecoration:'none'}}>Write</Link>
            <Link href='story' style={{color:'black',textDecoration:'none'}}>Sign In</Link>
          </NavItems>
          <Box>
            <Button variant='contained' color='primary'>Get Started</Button>
          </Box>
        </NavBox>
      </StyledToolbar>
    </StyledAppBar>
  )
}
