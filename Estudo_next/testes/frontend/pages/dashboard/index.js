import MenuIcon from '@mui/icons-material/Menu';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import AccountCircle from '@mui/icons-material/AccountCircle';
import IconButton from '@mui/material/IconButton';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

export default function Dashboard() {
  return (
    <>
      <Box sx={{ minWidth: 275 }}>
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
          <Typography variant="h6" component="div" sx={{      flexGrow: 1 }}>
            Sistema  DVR
          </Typography>
          <div>
          <IconButton
            size="large"
            aria-label="account of current user"
            aria-controls="menu-appbar"
            aria-haspopup="true"
            color="inherit"
          >
          <AccountCircle />
          </IconButton>
          </div>
          <Button variant="contained" color="error">Sair</ Button>
          </Toolbar>
        </AppBar>
      </Box>
    </>
  ) 
}  