import React, { useState, useEffect } from "react";
import { fetchFromAPI } from "../utils/fetchFromAPI";

function Movie({id , chartRating}) {
    const [movie , setMovie] = useState([])    
    useEffect(() => {
        fetchFromAPI(`${id}`).then((data) =>
        setMovie(data)
        );
      }, []);

      console.log(movie)
  
  return (
    <div>Movie</div>
  )
}

export default Movie