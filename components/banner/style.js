import {styled,Box,Typography} from '@mui/material';

export const StyledBanner = styled(Box)(({theme})=>({
    height:'400px',
    width:'100%',
    display:'flex',   
}))
export const StyledLeft = styled(Box)(({theme})=>({
    flex:'1',
    display:'flex',
    flexDirection:'column',
    justifyContent:'center',
    gap:30,
}))
export const StyledRight = styled(Box)(({theme})=>({
    flex:'0.4',
    display:'flex',
    justifyContent:'center',
    alignItems:'center',
    [theme.breakpoints.down('sm')]:{
        display:'none'
    }
}));
export const StyledHeading = styled(Typography)(({theme})=>({
      fontSize:'74px',
      fontFamily:'Bruno Ace SC, cursive',
      [theme.breakpoints.down('md')]:{
        fontSize:'54px'
      },
      [theme.breakpoints.down('sm')]:{
        fontSize:'54px'
      }
}));
export const StyledCaption = styled(Typography)(({theme})=>({
    fontSize:'28px',
}));