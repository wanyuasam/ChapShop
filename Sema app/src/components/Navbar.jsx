import { AppBar, Avatar, Badge, Box, styled, Toolbar, Typography } from '@mui/material'
import ForumIcon from '@mui/icons-material/Forum';
import { InputBase } from '@mui/material'
import MailIcon from '@mui/icons-material/Mail';
import React, { useState } from 'react'
import { Notifications } from '@mui/icons-material';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';

const StyledToolBar = styled(Toolbar)({
    display: "flex",
    justifyContent: "space-between",
    backgroundColor: "black"
});

const Search = styled("div")(({theme}) => ({
    backgroundColor: "white",
    padding: "0 10px",
    borderRadius: theme.shape.borderRadius,
    width: "40%"
}));

const Icons = styled(Box)(({theme}) => ({
    // backgroundColor: "white"
    display: "none",
    alignItems: "center",
    gap: "30px",
    [theme.breakpoints.up("sm")]: {
        display: "flex"
    }
}));

const UserBox = styled(Box)(({theme}) => ({
    display: "flex",
    alignItems: "center",
    gap: "10px",
    [theme.breakpoints.up("sm")]: {
        display: "none"
    }
}))
const Navbar = () => {
    const [open, setOpen] = useState(false);

  return (
    <AppBar position='sticky'>
        <StyledToolBar>
            <Typography variant='h6' sx={{display: {xs: "none", sm: "block"}}}>Sema</Typography>
            <ForumIcon sx={{display: {xs: "block", sm: "none"}}}/>
            <Search><InputBase placeholder='Search here...'/></Search>
            <Icons>
                <Badge badgeContent={4} color="error">
                    <MailIcon />
                </Badge>
                <Badge badgeContent={4} color="error">
                    <Notifications />
                </Badge>
                <Avatar alt="profile picture" sx={{width: 36, height: 36}} src="https://www.compassion.com/Images/child-smiling-bg-wearing-kenyan-necklaces-made-of-beads.jpeg" onClick={e => setOpen(true)}/>
            </Icons>
            <UserBox onClick={(e) => setOpen(true)}>
                <Avatar alt="profile picture" sx={{width: 36, height: 36}} src="https://www.compassion.com/Images/child-smiling-bg-wearing-kenyan-necklaces-made-of-beads.jpeg" />
                <Typography variant='span'>Alex Kiprono</Typography>
            </UserBox>
        </StyledToolBar>
        <Menu
        id="demo-positioned-menu"
        aria-labelledby="demo-positioned-button"
        open={open}
        onClose={(e) => setOpen(false)}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
      >
        <MenuItem>Profile</MenuItem>
        <MenuItem>My account</MenuItem>
        <MenuItem>Logout</MenuItem>
      </Menu>
    </AppBar>
  )
}

export default Navbar