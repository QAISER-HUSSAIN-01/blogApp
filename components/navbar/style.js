import {AppBar,Toolbar, Box, styled} from '@mui/material';

export const StyledAppBar = styled(AppBar)(({theme})=>({
    background:'white',
    color:'black',
    padding:'0 60px',
    [theme.breakpoints.down('md')]:{
        padding:'0 20px'
    },
    [theme.breakpoints.down('sm')]:{
        padding:'0 20px'
    }
}));

export const StyledToolbar = styled(Toolbar)((theme)=>({
    display:'flex',
    justifyContent:'space-between',
    padding:'0px !important'
}));

export const NavBox = styled(Box)((theme)=>({
    display:'flex',
    justifyContent:'space-between',
    alignItems:'center',
    gap:20
}));

export const NavItems = styled(Box)(({theme})=>({
    gap:20,
    display:'flex',
    [theme.breakpoints.down('sm')]:{display:'none'}
}));