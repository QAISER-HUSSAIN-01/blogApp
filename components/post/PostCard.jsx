import React from 'react'
import { Post, PostContent, PostPicture,PostHeader,PostBody,PostFooter,PostActions} from './style'
import { Avatar, Badge, IconButton, Typography } from '@mui/material'
import { BookmarkAddOutlined, MoreHoriz } from '@mui/icons-material'
import Image from 'next/image'
export default function PostCard() {
  const token = ''
  return (
      <Post>
        <PostContent>
          <PostHeader>
            <Avatar>R</Avatar>
            <Typography variant='body2'>Author Name</Typography>
          </PostHeader>
          <PostBody>
            <Typography variant='h5' sx={{fontWeight:'bold',fontSize:{xs:'16px',sm:'18px',md:'22px'}}}>Title should be visible here</Typography>
            <Typography variant='body1' sx={{fontSize:{xs:'14px',sm:'16px',md:'18px'},display:{xs:'none',sm:'block'}}}>Description of the post here will be shown the description may be one or more lines</Typography>
          </PostBody>
          <PostFooter>
            <Typography variant='caption' sx={{display:'flex',gap:5,alignItems:'center'}}>
              Apr 19/2023 . 7 min read {token && <Badge color='success' badgeContent='Nextjs' /> } </Typography>
            <PostActions>
              <IconButton><BookmarkAddOutlined /></IconButton>
              {token && <IconButton><MoreHoriz /></IconButton>}
            </PostActions>
          </PostFooter>
        </PostContent>
        <PostPicture>
          <Image src={'/post.jpg'} width='200' height='200' layout='responsive' />
        </PostPicture>
      </Post>
      
  )
}
