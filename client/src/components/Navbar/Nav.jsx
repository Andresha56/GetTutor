

import React from 'react'
import AppBar from '@mui/material/AppBar';
import { Box, Container, List, ListItem, Toolbar, Button } from '@mui/material';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';

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
            sx={{ display: "flex", alignItems: "center" }}
          >
            <img
              src="./assets/logo.svg"
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
                  <ListItem>Home</ListItem>
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