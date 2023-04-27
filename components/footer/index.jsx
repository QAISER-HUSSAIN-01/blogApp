import { Box } from '@mui/material'
import Link from 'next/link'
import React from 'react'

export default function Footer() {
  return (
    <Box sx={{display:'flex',flexWrap:'wrap',gap:2}}>
        <Link style={{color:'grey', textDecoration:'none'}} href={''}>Help</Link>
        <Link style={{color:'grey', textDecoration:'none'}} href={''}>Status</Link>
        <Link style={{color:'grey', textDecoration:'none'}} href={''}>Writers</Link>
        <Link style={{color:'grey', textDecoration:'none'}} href={''}>Blog</Link>
        <Link style={{color:'grey', textDecoration:'none'}} href={''}>Careers</Link>
        <Link style={{color:'grey', textDecoration:'none'}} href={''}>Privacy</Link>
        <Link style={{color:'grey', textDecoration:'none'}} href={''}>Terms</Link>
        <Link style={{color:'grey', textDecoration:'none'}} href={''}>About</Link>
        <Link style={{color:'grey', textDecoration:'none'}} href={''}>Text to speech</Link>
    </Box>
  )
}
