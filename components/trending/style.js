import {styled,Box,Typography,Grid} from '@mui/material'

export const StyledTrending = styled(Box)(({theme})=>({
    padding:'50px 0',
    display:'flex',
    flexDirection:'column',
    gap:40
}))
export const TrendHeading = styled(Typography)(({theme})=>({
    fontFamily:'Bruno Ace SC, cursive',
    display:'flex',
    gap:20,
    alignItems:'center'
}))

export const GridItem = styled(Grid)(({theme})=>({
    boxShadow:'2px 2px 5px lightgrey',
    display:'flex',
    gap:20,
    padding:'10px',
    alignItems:'center'
}))
export const GridIndex = styled(Grid)(({theme})=>({
    fontSize:'38px',
    color:'lightgrey'
}))
export const GridDetail = styled(Grid)(({theme})=>({
    width:'100%',
    gap:8,
    display:'flex',
    flexDirection:'column'
}))
export const DetailTitle = styled(Typography)(({theme})=>({
    fontWeight:'bold',
    width:'80%',
    overflow:'hidden',
    whiteSpace:'nowrap',
    textOverflow:'ellipsis'
}))