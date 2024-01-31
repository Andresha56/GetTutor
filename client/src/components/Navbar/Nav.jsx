

import React from 'react'
import AppBar from '@mui/material/AppBar';
import { Box, Container, List, ListItem, Toolbar, Button } from '@mui/material';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import logo from "../../image/logo.png"
import { Link } from 'react-router-dom';
function Nav() {
  return (
    <>
      <AppBar
        position="sticky"
        elevation={0}
        sx={{
          backgroundColor: 'transparent',
          '& .MuiToolbar-root': {
          },
        }}
      >
        <Container>
          <Toolbar
            sx={{ display: "flex", alignItems: "center",height:"70px",borderRadius:"50px",
            background:"linear-gradient(90deg, rgba(24,3,31,0.6) 0%, rgba(48,44,51,0.6) 48%, rgba(21,10,59,1) 100%)",
            marginTop:"1rem"
          }}
          >
            <img
              src={logo}
              alt="logo"
              style={{ width: 120, height: 120, marginRight: 2 }}
            />
            <Box
              sx={{ display: "flex", width: "100%", justifyContent: "center", }}
            >
              <List component="nav">
                <ListItem component="ul"
                  sx={{ fontSize: "1.1rem", display: "flex", gap: 2, color: "#F0F8FF" }}
                >
                  <ListItem><Link to={"/"}>Home</Link></ListItem>
                  <ListItem>About</ListItem>
                  <ListItem>Explore</ListItem>
                </ListItem>
              </List>
            </Box>
            <Button
            >
              Github
              <NavigateNextIcon />
            </Button>
          </Toolbar>
        </Container>
      </AppBar>

    </>
  )
}

export default Nav