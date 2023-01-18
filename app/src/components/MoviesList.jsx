import React, { useState, useEffect } from "react";
import { Box, Stack, Typography } from "@mui/material";
import { fetchFromAPI } from "../utils/fetchFromAPI";
import Movie from './Movie';

function MoviesList(){
    const [movies , setMovies] = useState([])
    useEffect(() => {
      fetchFromAPI(`/title/get-top-rated-movies`).then((data) =>
        setMovies(data)
      );
    }, []);
    return(
        <Box p={2} sx={{ overflowY: "auto", height: "90vh", flex: 2 }}>
        <Typography
          variant="h4"
          fontWeight="bold"
          mb={3}
          sx={{ color: "white" }}
        >
          <span style={{ color: "red" }}>Movies</span>
        </Typography>
        {
          movies.map(({id , chartRating},index)=>{
            return <Movie id={id} chartRating={chartRating} key={index}/>
          })
        }
      </Box>
    )
}
export default MoviesList;