import React from 'react'
import { Post, PostContent, PostPicture,PostHeader,PostBody,PostFooter,PostActions} from './style'
import { Avatar, Badge, IconButton, Typography } from '@mui/material'
import { BookmarkAddOutlined, MoreHoriz } from '@mui/icons-material'
import Image from 'next/image'
export default function PostCard() {
  return (
      <Post>
        <PostContent>
          <PostHeader>
            <Avatar>R</Avatar>
            <Typography variant='body2'>Author Name</Typography>
          </PostHeader>
          <PostBody>
            <Typography variant='h5' sx={{fontWeight:'bold'}}>Title should be visible here</Typography>
            <Typography variant='body1'>Description of the post here will be shown the description may be one or more lines</Typography>
          </PostBody>
          <PostFooter>
            <Typography variant='caption' sx={{display:'flex',gap:5,alignItems:'center'}}>
              Apr 19/2023 . 7 min read <Badge color='success' badgeContent='Nextjs' /></Typography>
            <PostActions>
              <IconButton><BookmarkAddOutlined /></IconButton>
              <IconButton><MoreHoriz /></IconButton>
            </PostActions>
          </PostFooter>
        </PostContent>
        <PostPicture>
          <Image src={'/post.jpg'} width='150' height='150' />
        </PostPicture>
      </Post>
      
  )
}
