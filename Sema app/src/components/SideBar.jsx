import {AccountBox,Article,Group,Home,ModeNight,Person,Settings,Storefront} from "@mui/icons-material";
import {Box,List,ListItem,ListItemButton,ListItemIcon,ListItemText,Switch} from "@mui/material";
import React, { useState } from "react";
  
const Sidebar = () => {
  const [mode, setMode] = useState();
  return (
    <Box flex={1} p={2} sx={{ display: { xs: "none", sm: "block" } }}>
      <Box position="fixed">
        <List>
          <ListItem disablePadding >
            <ListItemButton component="a" href="#home">
              <ListItemIcon  sx={{ color: 'black' }}  >
                <Home />
              </ListItemIcon>
              <ListItemText primary="Homepage" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton component="a" href="#friends">
              <ListItemIcon sx={{ color: 'black' }}>
                <Person />
              </ListItemIcon>
              <ListItemText primary="Friends" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton component="a" href="#settings">
              <ListItemIcon sx={{ color: 'black' }}>
                <Settings />
              </ListItemIcon>
              <ListItemText primary="Settings" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton component="a" href="#profile">
              <ListItemIcon sx={{ color: 'black' }}>
                <AccountBox />
              </ListItemIcon>
              <ListItemText primary="Profile" />
            </ListItemButton>
          </ListItem>
        </List>
      </Box>
    </Box>
  );
};

export default Sidebar;