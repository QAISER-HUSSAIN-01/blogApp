import { Box, Chip, Divider, Typography } from '@mui/material'
import Link from 'next/link'
import React from 'react'
import Footer from '../footer'
import {useResponsive} from '@/hooks/useResponsive';
export default function DiscoverMore() {
  const {offset} = useResponsive()
  return (
    <Box sx={{ flex: '0.4'}}>
      <Box sx={{ display: 'flex',width:{md:offset > 886 ? '31%' : '100%',sm:'100%',xs:'100%'}, gap: 3, flexDirection: 'column',
       position: {md:offset > 886 ? 'fixed' : 'relative',sm:'relative',xs:'relative'},
       top:{md:offset > 886 ? '100px' :'0',sm:'0',xs:'0'},
       right:{md:offset > 886 ? '60px' : '0',sm:'0',xs:'0'}
       }}>
      <Typography>Discover more of what matters to you </Typography>
      <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 2 }}>
        <Chip variant='filled' label='Programming' />
        <Chip variant='filled' label='Python' />
        <Chip variant='filled' label='Javascript' />
        <Chip variant='filled' label='Php' />
        <Chip variant='filled' label='Google' />
        <Chip variant='filled' label='Chat GPT' />
        <Chip variant='filled' label='Java' />
        <Chip variant='filled' label='Microsoft' />
      </Box>
      <Link href={''} style={{ color: 'green', textDecoration: 'none' }}>see more topics</Link>
      <Divider />
      <Box sx={{ display: { xs: 'none', sm: 'none', md: 'block' } }}>
        <Footer />
      </Box>
      </Box>
    </Box>
  )
}
