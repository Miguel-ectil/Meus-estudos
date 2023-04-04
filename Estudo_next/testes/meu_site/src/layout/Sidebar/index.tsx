import * as React from 'react';
import {
  Box, Drawer, List, Divider, ListItemButton, ListItemText, Typography, 
  ListItemIcon, useMediaQuery, Button, IconButton, Toolbar
} from '@mui/material'
import { HomeSharp} from '@mui/icons-material'
import { styled, useTheme } from '@mui/material/styles';
import Link from 'next/link';
import MuiAppBar, { AppBarProps as MuiAppBarProps } from '@mui/material/AppBar';
import CssBaseline from '@mui/material/CssBaseline';
import MenuIcon from '@mui/icons-material/Menu';

import DarkModeIcon from '@mui/icons-material/DarkMode';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';

import { useAppThemeContext } from '../../contexts'

const drawerWidth = 300;
const drawerFundo = 'linear-gradient(0deg, rgba(2,0,36,1) 14%, rgba(20,0,0,1) 100%)'
const fontSize = '22rem'
const backgroundHeader = '#2c387e'

const Main = styled('main', { shouldForwardProp: (prop) => prop !== 'open' })<{
	open?: boolean;
}>(({ theme, open }) => ({
	flexGrow: 1,
	padding: theme.spacing(3),
	transition: theme.transitions.create('margin', {
		easing: theme.transitions.easing.sharp,
		duration: theme.transitions.duration.leavingScreen,
	}),
	marginLeft: `-${drawerWidth}px`,
	...(open && {
		transition: theme.transitions.create('margin', {
			easing: theme.transitions.easing.easeOut,
			duration: theme.transitions.duration.enteringScreen,
		}),
		marginLeft: -20,
	}),
}));

interface AppBarProps extends MuiAppBarProps {
	open?: boolean;
}


const AppBar = styled(MuiAppBar, {
	shouldForwardProp: (prop) => prop !== 'open',
})<AppBarProps>(({ theme, open }) => ({
	transition: theme.transitions.create(['margin', 'width'], {
		easing: theme.transitions.easing.sharp,
		duration: theme.transitions.duration.leavingScreen,
	}),
	...(open && {
		width: `calc(100% - ${drawerWidth}px)`,
		marginLeft: `${drawerWidth}px`,
		transition: theme.transitions.create(['margin', 'width'], {
			easing: theme.transitions.easing.easeOut,
			duration: theme.transitions.duration.enteringScreen,
		}),
	}),
}));

const DrawerHeader = styled('div')(({ theme }) => ({
	display: 'flex',
	alignItems: 'center',
	padding: theme.spacing(0, 1),
	// necessary for content to be below app bar
	...theme.mixins.toolbar,
	justifyContent: 'flex-end',
}));

const DrawerFooter = styled('div')(({ theme }) => ({
	width: '100%',
	button: 0,
	padding: theme.spacing(0, 1),

}));

export default function Sidebar({ children }) {
  const [open, setOpen] = React.useState(false)
  const theme = useTheme();
  const smDown = useMediaQuery(theme.breakpoints.down('xs'));
  const { toggleTheme } = useAppThemeContext();

  const handleDrawerClose = () => {
		setOpen(false);
	};

  const handleDrawerOpen = () => {
		setOpen(true);
	};

  return (
    <>
      <CssBaseline />
      <AppBar
				position="fixed"
				sx={{
					'& .MuiAppBar-paper': {
					},
					background: backgroundHeader
				}}
			>
				<Toolbar>
					<IconButton
						color="inherit"
						aria-label="open drawer"
						onClick={handleDrawerOpen}
						edge="start"
						sx={{
							mr: 2,
							marginRight: 5,
						}}
					>
						<MenuIcon />
					</IconButton>

          <Typography 
            variant="h6" component="div" 
            noWrap sx={{ flexGrow: 1 }}> 
          </Typography>

          <Button
           variant="contained"
           color="primary"
           >
            Sair
          </ Button>
		    </Toolbar>
      </AppBar>
      <Drawer
        sx={{
          width: drawerWidth,
          '& .MuiDrawer-paper': {
            maxWidth: drawerWidth,
            background: drawerFundo,
            boxSizing: 'border-box',
          },
        }}
        anchor="left"
        variant={ smDown ? 'temporary' : "permanent"}
        open={open}
      >
        <Box>
          <Box
            sx={{
              '& .MuiDrawer-paper': {
                size: fontSize
              }
            }}
          >
            <List
              sx={{ maxWidth: 360, color: 'white' }}
              component="nav"
              aria-labelledby="nested-list-subheader"
            >
              <Link href='/dashboard' >
                <ListItemButton sx={{ my: 2, color: 'white' }}>
                  <ListItemIcon>
                    <HomeSharp sx={{ color: 'white', fontSize: '2rem' }} />
                  </ListItemIcon>
                  <ListItemText primary="Tela Inicial" />
                </ListItemButton>
              </Link>
              <Link href='/botao' >
                <ListItemButton sx={{ my: 2, color: 'white' }}>
                  <ListItemIcon>
                    <HomeSharp sx={{ color: 'white', fontSize: '2rem' }} />
                  </ListItemIcon>
                  <ListItemText primary="Modelos de Botões" />
                </ListItemButton>
              </Link>
              <Link href='/headers' >
                <ListItemButton sx={{ my: 2, color: 'white' }}>
                  <ListItemIcon>
                    <HomeSharp sx={{ color: 'white', fontSize: '2rem' }} />
                  </ListItemIcon>
                  <ListItemText primary="Modelos de Navbar " />
                </ListItemButton>
              </Link>
              <Link href='/inputs' >
                <ListItemButton sx={{ my: 2, color: 'white' }}>
                  <ListItemIcon>
                    <HomeSharp sx={{ color: 'white', fontSize: '2rem' }} />
                  </ListItemIcon>
                  <ListItemText primary="Modelos de inputs" />
                </ListItemButton>
              </Link>
              <Link href='/tabelas' >
                <ListItemButton sx={{ my: 2, color: 'white' }}>
                  <ListItemIcon>
                    <HomeSharp sx={{ color: 'white', fontSize: '2rem' }} />
                  </ListItemIcon>
                  <ListItemText primary="Modelos de Tabelas" />
                </ListItemButton>
              </Link>
            </List>
          </Box>  
        </Box>
        <Typography 
          variant="h6" 
          component="div" 
          noWrap sx={{ flexGrow: 1 }}
        > 
        </Typography>
				<DrawerFooter sx={{ color: 'white', mt: 4.2 }}>
					<List component="nav" >
						<ListItemButton onClick={toggleTheme}>
							<ListItemText primary="Alternar Tema" />
							<DarkModeIcon />
						</ListItemButton>
						{
							smDown && (
								<ListItemButton onClick={handleDrawerClose}>
									<ListItemText primary="Fechar barra lateral" />
									{theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
								</ListItemButton>
							)
						}
					</List>
				</DrawerFooter>
      </Drawer>
      <DrawerHeader />
      <Main open={open} sx={{ marginLeft: -1 }}>
				{children}
			</Main>
    </>
  )
}