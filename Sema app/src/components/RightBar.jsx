import {Avatar,AvatarGroup,Box,Divider,ImageList,ImageListItem,List,ListItem,ListItemAvatar,ListItemText,Typography,} from "@mui/material";
import React from "react";

const Rightbar = () => {
  return (
    <Box flex={2} p={2} sx={{ display: { xs: "none", sm: "block" } }}>
      <Box position="fixed" width={300} sx={{ maxHeight: '100vh', overflowY: 'auto' }}>
        <Typography variant="h6" fontWeight={100}>
          Online Friends
        </Typography>
        <AvatarGroup max={7}>
          <Avatar
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTN_UdmVPfL7QTBvd4flglK8BIJQSMQ1YfxEA&s"
            alt="Remy Sharp"
          />
          
          <Avatar
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQM1mg3jdPsRRoGOEK7sptfdFFaA2SMHWjbJg&s"
            alt="avatar image"
          />
          <Avatar
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTN_UdmVPfL7QTBvd4flglK8BIJQSMQ1YfxEA&s"
            alt="avatar image"
          />
          <Avatar
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTN_UdmVPfL7QTBvd4flglK8BIJQSMQ1YfxEA&s"
            alt="avatar image"
          />
        </AvatarGroup>
        <Typography variant="h6" fontWeight={100} mt={2} mb={2}>
          Latest Posts
        </Typography>
        <ImageList cols={3} rowHeight={100} gap={5}>
          <ImageListItem>
            <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQmoCwCnIcKGGu-zfspBntv_JDUsNTSTExUGw&s"
              alt=""
            />
          </ImageListItem>
          <ImageListItem>
            <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTN_UdmVPfL7QTBvd4flglK8BIJQSMQ1YfxEA&s"
              alt=""
            />
          </ImageListItem>
          <ImageListItem>
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTt3txbJaC9HlgVjd15FCZ-VZ2FgHJBgfQd7A&s"
              alt=""
            />
          </ImageListItem>
        </ImageList>
        <Typography variant="h6" fontWeight={100} mt={2}>
          Latest Conversations
        </Typography>
        <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="avatar image" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ1LDD6rSqXoNp4PntJ4yvFED4oDA0MRFp3JQ&s" />
        </ListItemAvatar>
        <ListItemText
          primary="Kenyan athletes are making headlines with significant achievements"
          secondary={
            <React.Fragment>
              <Typography
                sx={{ display: 'inline' }}
                component="span"
                variant="body2"
                color="text.primary"
              >
                Ali Juma
              </Typography>
              {" — Safaricom’s temporary halt of M-Pesa services…"}
            </React.Fragment>
          }
        />
      </ListItem>
      <Divider variant="inset" component="li" />
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="avatar image" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ1LDD6rSqXoNp4PntJ4yvFED4oDA0MRFp3JQ&s" />
        </ListItemAvatar>
        <ListItemText
          primary="Kenyan athletes are making headlines with significant achievements"
          secondary={
            <React.Fragment>
              <Typography
                sx={{ display: 'inline' }}
                component="span"
                variant="body2"
                color="text.primary"
              >
                Ali Juma
              </Typography>
              {" — Safaricom’s temporary halt of M-Pesa services…"}
            </React.Fragment>
          }
        />
      </ListItem>
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="avatar image" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ1LDD6rSqXoNp4PntJ4yvFED4oDA0MRFp3JQ&s" />
        </ListItemAvatar>
        <ListItemText
          primary="Kenyan athletes are making headlines with significant achievements"
          secondary={
            <React.Fragment>
              <Typography
                sx={{ display: 'inline' }}
                component="span"
                variant="body2"
                color="text.primary"
              >
                Ali Juma
              </Typography>
              {" — Safaricom’s temporary halt of M-Pesa services…"}
            </React.Fragment>
          }
        />
      </ListItem>
      <Divider variant="inset" component="li" />
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="avatar image" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ1LDD6rSqXoNp4PntJ4yvFED4oDA0MRFp3JQ&s" />
        </ListItemAvatar>
        <ListItemText
          primary="Kenyan athletes are making headlines with significant achievements"
          secondary={
            <React.Fragment>
              <Typography
                sx={{ display: 'inline' }}
                component="span"
                variant="body2"
                color="text.primary"
              >
                Ali Juma
              </Typography>
              {" — Safaricom’s temporary halt of M-Pesa services…"}
            </React.Fragment>
          }
        />
      </ListItem>
      <Divider variant="inset" component="li" />
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="avatar image" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ1LDD6rSqXoNp4PntJ4yvFED4oDA0MRFp3JQ&s" />
        </ListItemAvatar>
        <ListItemText
          primary="Kenyan athletes are making headlines with significant achievements"
          secondary={
            <React.Fragment>
              <Typography
                sx={{ display: 'inline' }}
                component="span"
                variant="body2"
                color="text.primary"
              >
                Ali Juma
              </Typography>
              {" — Safaricom’s temporary halt of M-Pesa services…"}
            </React.Fragment>
          }
        />
      </ListItem>
      <Divider variant="inset" component="li" />
    </List>
      </Box>
    </Box>
  );
};

export default Rightbar;