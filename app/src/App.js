import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Box } from "@mui/material";
import {
  Home,
  MoviesList,
  TvSeries,
  TopImdb,
  NavBar,
} from "./components";
const App = () => (
  <BrowserRouter>
      <Box >
          <NavBar/>
          <Routes>
              <Route path='/' exact element={<Home/>} />
              <Route path='/MoviesList'  element={<MoviesList/>} />
              <Route path='/tvSeries'  element={<TvSeries/>} />
              <Route path='/topImdb'  element={<TopImdb/>} />
          </Routes>
      </Box>
  </BrowserRouter>
);

export default App;