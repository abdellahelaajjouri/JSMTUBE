import React from 'react'
import { Typography , Container } from '@mui/material'

function Home() {
  return (
    <Container maxWidth="sm" style={{marginTop :' 15vh'}}>
      <Typography variant="h4" component="h1">
        Welcome to the ultimate YouTube search tool!
      </Typography>
      <Typography variant="body1" component="p">
        With our app, finding the best videos on any topic has never been easier. Simply enter your search term and we'll show you the top 10 results, ensuring that you get the most relevant and informative videos every time. No more getting lost in a sea of irrelevant content - our app is designed to help you stay focused and on track.
      </Typography>
      <Typography variant="body1" component="p">
        But that's not all - our app also gives you the ability to download any video you find, so you can watch it offline at your convenience. This feature makes it perfect for long commutes, flights, or any other time when you don't have access to the internet.
      </Typography>
      <Typography variant="body1" component="p">
        So whether you're looking for the latest news, a tutorial on a new skill, or just some entertainment, our app has you covered. Give it a try today and see how it can improve your YouTube experience!
      </Typography>
    </Container>
  )
}

export default Home