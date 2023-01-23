import axios from 'axios';
import React, { useState, useEffect } from "react";
import ReactPlayer from 'react-player'
import { fetchFromAPI } from "../utils/fetchFromAPI";
import { Link, useParams } from 'react-router-dom';
import {  Box, Typography, CardMedia, CardContent, Card , Stack} from "@mui/material";
import { CheckCircle } from "@mui/icons-material";
const VideoDetail = () => {
  const [videoData, setVideoData] = useState(null);
  const { id } = useParams();


  useEffect(() => {
    fetchFromAPI(`videos?part=snippet,statistics&id=${id}`)
    .then(data => setVideoData(data.items[0]))
  }, [id]);


  if (!videoData) {
    return <p>Loading...</p>;
  }
  const URL =  `https://www.youtube.com/watch?v=${id}`

  const {snippet : {title  , channelTitle}, statistics : {viewCount , likeCount}}= videoData;


const handleDownload = async (event) => {
  event.preventDefault()
  console.log('download')
}



  return (
    <Box minHeight='95h' display='flex' justifyContent='center' >
      <Box sx={{maxWidth :'60vw'}} mt='15vh'>
        <ReactPlayer url={URL}
          className="react-player" controls
        />
        <Typography color="black" variant='h5' fontWeight="bold" p={2}>
          {title}
        </Typography>
        <Stack direction='row' justifyContent='space-between' sx={{color:'black'}} py={1} px={2}>
          <Typography variant={{sm:'subtitle1' , md:'h6'}} color='black'>
              {channelTitle}
              <CheckCircle sx={{fontSize : '12px' , color:'gray' , ml: '5px'}}/>
          </Typography>
          <Stack direction='row' gap='20px' alignItems='center'>
            <Typography variant='body1' sx={{opacity:0.7}}>
                  {parseInt(viewCount).toLocaleString()} views
            </Typography>
            <Typography variant='body1' sx={{opacity:0.7}}>
                  {parseInt(likeCount).toLocaleString()} likes
            </Typography>
          </Stack>
        </Stack> 
        <button onClick={handleDownload}> 
            Download
        </button>
      </Box>
    </Box>
  );
};

export default VideoDetail;
