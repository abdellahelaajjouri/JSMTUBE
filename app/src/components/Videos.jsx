import React from 'react'
import { Stack, Box } from "@mui/system";
import { VideoCard, ChannelCard } from "./index";
export default function Videos({videos}) {
  return (
    <Stack direction="row" flexWrap="wrap" justifyContent="start" gap={2}>
      {videos.map((item, idx) => (
        <Box key={idx}>
          {item.id.videoId}
        </Box>
      ))} 
    </Stack>
  )
}
