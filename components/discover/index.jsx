import { Box, Chip, Divider, Typography } from '@mui/material'
import Link from 'next/link'
import React from 'react'
import Footer from '../footer'

export default function DiscoverMore() {
  return (
    <Box sx={{flex:'0.4',display:'flex',gap:3,flexDirection:'column'}}>
      <Typography>Discover more of what matters to you</Typography>
      <Box sx={{display:'flex',flexWrap:'wrap',gap:2}}>
        <Chip variant='filled' label='Programming' />
        <Chip variant='filled' label='Python' />
        <Chip variant='filled' label='Javascript' />
        <Chip variant='filled' label='Php' />
        <Chip variant='filled' label='Google' />
        <Chip variant='filled' label='Chat GPT' />
        <Chip variant='filled' label='Java' />
        <Chip variant='filled' label='Microsoft' />
      </Box>
      <Link href={''} style={{color:'green', textDecoration:'none'}}>see more topics</Link>
      <Divider />
      <Box sx={{display:{sm:'none',md:'block'}}}>
      <Footer />
      </Box>
    </Box>
  )
}
