import React, { useState, useEffect } from "react";
import { Box, Typography } from "@mui/material";
import { fetchFromAPI } from "../utils/fetchFromAPI";
import { useParams } from "react-router-dom";
import Videos from './Videos';
function SearchFeed() {
  const [videos, setVideos] = useState([]);
  const { id } = useParams();
  useEffect(() => {
    fetchFromAPI(`search?part=snippet&q=${id}`).then((data) => {
      const videos = data.items.filter((item) => item.id.kind === "youtube#video");
      setVideos(videos);
    });
  }, [id]);
  return (
    <Box p={2}  mt={7} sx={{ overflowY: "auto", height: "90vh", flex: 2 }} >
      <Typography variant="h4" mb={4} fontWeight="bold">
        Best 10 videos for : <span style={{ color: "#1976d2" }}>{id}</span> 
      </Typography>
      <Videos videos={videos} />
    </Box>
  )
}

export default SearchFeed