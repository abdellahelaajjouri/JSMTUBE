import React from "react";
import { Stack } from "@mui/material";
import { Link } from "react-router-dom";

import SearchBar from "./SearchBar";
const NavBar = () => (
  <Stack
    direction="row"
    justifyContent="space-between"
    alignItems="center"
    p={2}
    sx={{ position: "sticky", top: "0" , background : "black"}}
  >
    <Link to="/" style={{ display: "flex", alignItems: "center" }}>
      LOGO
    </Link>

    <Link to="/" style={{ display: "flex", alignItems: "center" }}>
      HOME
    </Link>

    <Link to="/MoviesList" style={{ display: "flex", alignItems: "center" }}>
      MOVIES
    </Link>

    <Link to="/tvSeries" style={{ display: "flex", alignItems: "center" }}>
      TV SERIES
    </Link>

    <Link to="/topImdb" style={{ display: "flex", alignItems: "center" }}>
      TOP IMDB
    </Link>
    
    <SearchBar />
  </Stack>
);

export default NavBar;