import {Box,styled,Typography} from '@mui/material';

export const PostContainer = styled(Box)(({theme})=>({
    flex:'0.7',
}))

export const Post = styled(Box)(({theme})=>({
    display:'flex',
    justifyContent:'space-between',
    alignItems:'center',
    margin:'30px 0',

}))

export const PostContent = styled(Box)(({theme})=>({
    display:'flex',
    flexDirection:'column',
    gap:15,
    flex:'0.9'
}))

export const PostPicture = styled(Box)(({theme})=>({
  width:'150px',
  height:'150px',
  [theme.breakpoints.down('sm')]:{
    width:'120px',
    height:'120px',
  }
}))

export const PostHeader = styled(Box)(({theme})=>({
    display:'flex',
    alignItems:'center',
    gap:10
}))

export const PostBody = styled(Box)(({theme})=>({
        // paddingLeft:'20px'
}))

export const PostFooter = styled(Box)(({theme})=>({
    display:'flex',
    alignItems:'center',
    justifyContent:'space-between'
}))

export const PostActions = styled(Box)(({theme})=>({
    display:'flex',
    alignItems:'center',
    gap:5
}))