import { Box, Container, Grid, Link } from '@material-ui/core'
import React from 'react'

export default function Footer() {
  return (
    <footer>
   <Box 
   px={{xs: 3, sm: 10 }}
   py= {{xs: 5, sm: 10}}
   bgcolor="text.secondary"
    color="white" 
   marginTop={10} 
 
   >
  
       <Container maxWidth = "1g"  >
      <Grid container spacing = {5} >
      <Grid item xs ={20} sm={6}>
          <Box borderBottom={1}>Help</Box>
          <Box >
              <Link href= "/" color="inherit">
                  Contact Us 
                
              </Link>
          </Box>
          <Box   text-transform= "lowercase">
              <Link href= "https://mail.google.com/mail/u/0/?tab=rm&ogbl#inbox?compose=new" color="inherit">
                  group11@gmail.com 
                
              </Link>
          </Box>
          <Box>
              <Link href= "/" color = "inherit">
                  support
              </Link>
          </Box>
          <Box>
              <Link href= "/" color = "inherit">
                  Privacy
              </Link>
          </Box>
      </Grid>
      
      </Grid>
      <Box textAlign="center" pt={{xs: 5 , sm:10}} paddingBottom= {{xs: 5 , sm: 0}}>
           
          Group 11 Copyright © {new Date().getFullYear()}{""}
      </Box>
       </Container>
   </Box>
    </footer>
  )
}
