import {createTheme} from '@mui/material';

export const theme =  createTheme({
  components:{
    MuiButton:{
      styleOverrides:{
        root:{
          fontSize:'14px',
          textTransform:'capitalize'
        }
      }
    }
  }
})