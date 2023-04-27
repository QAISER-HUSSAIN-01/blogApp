import React from 'react'
import { DetailTitle, GridDetail, GridIndex, GridItem, StyledTrending, TrendHeading } from './style'
import { TrendingUp } from '@mui/icons-material'
import { Avatar, Box, Grid, Typography } from '@mui/material'
import data from '@/shared/data';
export default function Trending() {
    return (
        <StyledTrending>
            <TrendHeading> <TrendingUp /> Trending Blogs </TrendHeading>
            <Grid container gap={2} justifyContent={'center'} alignItems={'center'}>
                {data.map((item, index) => (
                    <GridItem key={index} item xs={12} sm={5.8} md={3.8} lg={3.8}>
                        <GridIndex>{item.id}</GridIndex>
                        <GridDetail>
                            <Box sx={{ display: 'flex', gap: 1, alignItems: 'center' }}>
                                <Avatar sx={{ width: '30px', height: '30px' }} />
                                <Typography> {item.author} </Typography>
                            </Box>
                            <DetailTitle variant='body1'>{item.title}</DetailTitle>
                            <Typography variant='caption'>{item.date}</Typography>
                        </GridDetail>
                    </GridItem>
                ))}
            </Grid>
        </StyledTrending>
    )
}
