import { AppBar, Avatar, Badge, Box, styled, Toolbar, Typography } from '@mui/material'
import ForumIcon from '@mui/icons-material/Forum';
import { InputBase } from '@mui/material'
import MailIcon from '@mui/icons-material/Mail';
import React from 'react'
import { Notifications } from '@mui/icons-material';

const StyledToolBar = styled(Toolbar)({
    display: "flex",
    justifyContent: "space-between"
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
                <Avatar alt="Remy Sharp" sx={{width: 36, height: 36}} src="/static/images/avatar/1.jpg" />
            </Icons>
            <UserBox>
                <Avatar alt="Remy Sharp" sx={{width: 36, height: 36}} src="/static/images/avatar/1.jpg" />
                <Typography variant='span'>Alex</Typography>
            </UserBox>
        </StyledToolBar>
    </AppBar>
  )
}

export default Navbar