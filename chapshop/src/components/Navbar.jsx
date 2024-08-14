import { AppBar, Box, styled, Toolbar, Typography } from '@mui/material'
import ForumIcon from '@mui/icons-material/Forum';
import React from 'react'

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
    backgroundColor: "white"
}))
const Navbar = () => {

  return (
    <AppBar position='sticky'>
        <StyledToolBar>
            <Typography variant='h6' sx={{display: {xs: "none", sm: "block"}}}>Sema</Typography>
            <ForumIcon sx={{display: {xs: "block", sm: "none"}}}/>
            <Search>search</Search>
            <Icons>Icons</Icons>
        </StyledToolBar>
    </AppBar>
  )
}

export default Navbar