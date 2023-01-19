import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import {NavBar , SearchFeed , VideoDetail , Home} from './components'
import { Box } from '@mui/material';

const App = () => (
  <BrowserRouter>
      <Box>
          <NavBar/>
          <Routes>
              <Route path='/' exact element={<Home/>} />
              <Route path='/searchfeed:id'  element={<SearchFeed/>} />
              <Route path='/video:id'  element={<VideoDetail/>} />
          </Routes>
      </Box>
  </BrowserRouter>
);

export default App;