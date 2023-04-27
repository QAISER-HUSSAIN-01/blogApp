import React from 'react';
import { Box, Button } from '@mui/material';
import { StyledBanner, StyledCaption, StyledHeading, StyledLeft, StyledRight } from './style'
import Image from 'next/image';
import banner from '@/public/banner.gif'
export default function Banner() {
    return (
        <StyledBanner>
            <StyledLeft>
                <StyledHeading component='div' variant='h2'>Stay Curious</StyledHeading>
                <StyledCaption component='div' variant='body1'>Discover stories, thinking, and expertise <br /> from writers on any topic.</StyledCaption>
                <Box>
                    <Button variant='outlined' color='primary'>Start Reading</Button>
                </Box>
            </StyledLeft>
            <StyledRight>
             <Image src='/banner.gif' width='400' height='400' alt="banner" />
            </StyledRight>
        </StyledBanner>
    )
}
