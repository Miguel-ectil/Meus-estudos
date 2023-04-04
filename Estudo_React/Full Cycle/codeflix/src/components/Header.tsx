import React from 'react'
import {
  AppBar, Box, Button, 
  IconButton, Toolbar, 
  Typography
} from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu';


export function Header() {
  return (
    <Box sx={{ flexGrow: 1 }}>
    <AppBar position="static">
      <Toolbar>
        <IconButton
          size="large"
          edge="start"
          color="inherit"
          aria-label="menu"
          sx={{ mr: 2 }}
        >
          <MenuIcon />
        </IconButton>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          News
        </Typography>
        <Button color="inherit">Login</Button>
      </Toolbar>
    </AppBar>
  </Box>
  )
}
