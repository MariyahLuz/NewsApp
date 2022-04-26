import * as React from 'react';
import Box from '@material-ui/core/Box';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import Button from '@material-ui/core/Button';
import ListItem from '@material-ui/core/ListItem';
import MenuIcon from '@material-ui/icons/Menu';

import "./DrawerIcon.css"





export default function SwipeableTemporaryDrawer() {
   
   const [state, setState] = React.useState({
       left: false
  });
  
  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event &&
      event.type === 'keydown' &&
      (event.key === 'Tab' || event.key === 'Shift')
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <Box 
      
      sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 300 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
      >
    
      <div className="nav-items" bgcolor= "burlywood">

      <ListItem><a href="/">local News</a></ListItem>
      
       <ListItem><a href="/global-news">global</a></ListItem>
        <ListItem><a href="/business">Business</a></ListItem>
        <ListItem><a href="/Politics">Politics</a></ListItem>
        <ListItem><a href="/Sports">Sports</a></ListItem>
        <ListItem><a href="/entertainment">Entertainment</a></ListItem>
        <ListItem><a href="/weather">Weather</a></ListItem>

      
      </div>
     
    </Box>
  );

  return (
    <div>
     
        <React.Fragment key={"left"}>
          <Button onClick={toggleDrawer("left", true)}>
              <MenuIcon/>
          </Button>

          <SwipeableDrawer
            anchor={"left"}
            open={state["left"]}
            onClose={toggleDrawer("left", false)}
            onOpen={toggleDrawer("left", true)}
          >
            {list("left")}
          </SwipeableDrawer>
         

        </React.Fragment>
   
    </div>
  );
  
}