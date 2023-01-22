import React from 'react'
import { Card, CardMedia, CardContent, Typography } from '@mui/material'
import { Stack } from '@mui/system';
import { Link } from 'react-router-dom';


export default function Videos({videos}) {

  return (
    <Stack direction={"row"} flexWrap="wrap" justifyContent="start" gap={2}>
      {videos.map(({snippet : {thumbnails , title , description} , id  : {videoId}}, idx) => (
        <Link to={`/video/${videoId}`} style={{ textDecoration: "none"}} key={idx}>
          <Card style={{maxWidth: 345}}>
            <CardMedia
              style={{height: 0,paddingTop: '56.25%',}}
              image={thumbnails.medium.url}
              title={title}
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="h2">
                {title}
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
                {description}
              </Typography>
            </CardContent>
          </Card>
        </Link>
      ))}
    </Stack>
  )
}
