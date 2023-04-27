import Banner from '@/components/banner'
import DiscoverMore from '@/components/discover'
import Post from '@/components/post'
import Trending from '@/components/trending'
import { Box, Divider } from '@mui/material'
export default function Home() {
  return (
    <>
     <Banner />
     <Trending />
     <Divider />
     <Box sx={{display:'flex',gap:10,margin:'50px 0',flexDirection:{sm:'column-reverse',md:'row'}}}>
      <Post />
      <DiscoverMore />
     </Box>
    </>
  )
}
