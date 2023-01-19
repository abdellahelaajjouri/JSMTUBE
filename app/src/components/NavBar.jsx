import React , {useState } from 'react'
import {useNavigate} from 'react-router-dom'
import {AppBar , Toolbar , Input , IconButton , Typography} from '@mui/material'
import { Search } from "@mui/icons-material";

function NavBar() {
  const [value, setValue] = useState("")
  const navigate = useNavigate()
  const handleChange = (event) =>{
    setValue(event.target.value)
  }
  
  const handleSubmit = (event) =>{
    event.preventDefault()
    if (value){
      navigate(`/search/${value}`)
      setValue('')
    }
  }
  return (
    <AppBar sx={{display:'flex', justifyContent:{md :'space-between', sm : 'space-around'},alignItems:'center', flexDirection:'row'}}>
      <Toolbar>
        <Typography variant="h5">
            YoutFocus
        </Typography>
      </Toolbar>
      <Toolbar component="form" onSubmit={handleSubmit}>
        <Input type='text' onChange={handleChange} value={value}/>
        <IconButton  type='submit' sx={{ p: "10px", color: "#fff" }}>
          <Search />
        </IconButton>
      </Toolbar>
    </AppBar>
  )
}

export default NavBar

// AppBar: This component is used to create a top app bar that can contain elements such as a toolbar, menu, or a title. You can use this component to create the top bar that contains the YouTube logo and the search bar.

// Toolbar: This component is used to create a toolbar that can contain other elements such as buttons, text, and icons. You can use it to create the container for the YouTube logo and the search bar.

// Input: This component is used to create an input field where the user can enter the search term. You can use it to create the search bar component.

// IconButton: This component is used to create a button that contains an icon. You can use it to create a button for the YouTube logo.