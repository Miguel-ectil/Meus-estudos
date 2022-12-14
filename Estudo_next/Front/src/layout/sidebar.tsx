import * as React from 'react';
import { styled, useTheme, Theme } from '@mui/material/styles';
import { makeStyles } from '@mui/styles'
import { AppBar, Drawer, Toolbar, List, Typography, Divider, IconButton, ListItemButton, ListItemText, Collapse, ListItemIcon, Button } from '@mui/material';
import createStyles from '@mui/styles/createStyles'
import MuiAppBar, { AppBarProps as MuiAppBarProps } from '@mui/material/AppBar';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import SettingsIcon from '@mui/icons-material/Settings';
import LanguageIcon from '@mui/icons-material/Language';
import WarehouseIcon from '@mui/icons-material/Warehouse';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import clsx from 'clsx';

import { 
  StarBorder, 
  ExpandMore, 
  ExpandLess, 
  } from '@mui/icons-material'

  import styles from './Sidebar.module.css'  

const backgroundHeader = '#92140c'
const drawerWidth = 242;
const drawerHeight = '40rem';
const drawerFundo = '#29292e';
const drawercolor = 'withe'

const Main = styled('main', { shouldForwardProp: (prop) => prop !== 'open' })<{
  open?: boolean;
}>(({ theme, open }) => ({
  flexGrow: 1,
  padding: theme.spacing(1),
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
    marginLeft: 0,
  }),
}));

interface AppBarProps extends MuiAppBarProps {
  open?: boolean;
}

const DrawerFooter = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: 'flex-end',
}));

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: 'flex',
    },
    appBar: {
      transition: theme.transitions.create(['margin', 'width'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
    },
    appBarShift: {
      width: `calc(100% - ${drawerWidth}px)`,
      marginLeft: drawerWidth,
      transition: theme.transitions.create(['margin', 'width'], {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    hide: {
      display: 'none',
    },
    drawer: {
      width: drawerWidth,
      flexShrink: 0,
    },
    drawerPaper: {
      width: drawerWidth,
    },
    drawerHeader: {
      display: 'flex',
      alignItems: 'center',
      padding: theme.spacing(0, 2),
      // necessary for content to be below app bar
      ...theme.mixins.toolbar,
      justifyContent: 'flex-end',
    },
    content: {
      flexGrow: 1,
      padding: theme.spacing(3),
      transition: theme.transitions.create('margin', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
      marginLeft: -drawerWidth,
    },
    contentShift: {
      // transition: theme.transitions.create('margin', {
      //   easing: theme.transitions.easing.easeOut,
      //   duration: theme.transitions.duration.enteringScreen,
      // }),
      marginLeft: 0,
    },
  })
);

export default function Sidebar({ children }) {
  const classes = useStyles();
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };
  // ==============================================
  const [open1, setOpen1] = React.useState(false);

  const dadosBlank = () => {
    setOpen1(!open1);
 };

  const [open2, setOpen2] = React.useState(false);
  const estampador = () => {
    setOpen2(!open2);
  };

  const [open3, setOpen3] = React.useState(false);
  const estampagem = () => {
    setOpen3(!open3);
  };

  const [open4, setOpen4] = React.useState(false);
  const relatorios = () => {
    setOpen4(!open4);
  };

  const [open5, setOpen5] = React.useState(false);

  const configuracoes = () => {
    setOpen5(!open5);
 };

  return (
    <div className={classes.root}>
      <AppBar 
        position="fixed"
        className={clsx(classes.appBar, {
          [classes.appBarShift]: open,
        })}
        sx={{
          '& .MuiDrawer-paper': {
            background: backgroundHeader,
          },
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
            className={clsx(classes.menuButton, open && classes.hide)}
          >
            <MenuIcon />
          </IconButton>

          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={{ mr: 2, ...(!open && { display: 'none' }) }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" noWrap sx={{ flexGrow: 1 }}> </Typography>
          <div>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              color="inherit"
            >
              {/* <AccountCircle /> */}
            </IconButton>
          </div>
         <Button variant="contained" color="primary" href="/logout">Sair</ Button>
		    </Toolbar>
      </AppBar>
      <Drawer
        sx={{
          width: 240,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: drawerWidth,
            minHeight: drawerHeight,
            color: drawercolor,
            background: drawerFundo,
            boxSizing: 'border-box',
          },
        }}
        variant="persistent"
        anchor="left"
        open={open}
        className={styles.sidebar}
      >
        <img className={styles.cover} src="img/sidebar.png" />
        <div className={styles.profile}>
        <img className={styles.avatar}
          src="/img/logo.png"/>
        {/* <strong>DVR</strong>
        <span>Sistema dvr</span> */}
      </div>
        {/* <DrawerHeader  >
          
        </DrawerHeader> */}
        {/* <Divider /> */}
        <List
          sx={{ width: '100%', maxWidth: 360, color: 'white' }}
          component="nav"
          aria-labelledby="nested-list-subheader"
        >
          <a href='/dashboard'>
            <ListItemButton sx={{ my: 2, color: 'white' }}>
              <ListItemIcon>
                <HomeOutlinedIcon  sx={{color: 'white'}}/>
              </ListItemIcon>
              <ListItemText primary="Tela inicial" />
            </ListItemButton>
          </a>
          {/*==========================================*/}

          <ListItemButton
            sx={{ my: 1, color: 'white'  }}
            onClick={dadosBlank}>
            <ListItemIcon>
              <LanguageIcon sx={{ color: 'white' }} />
            </ListItemIcon>
            <ListItemText primary="Dados Blank" />
            {open1 ? <ExpandLess /> : <ExpandMore />}
          </ListItemButton>
          <Collapse in={open1}  unmountOnExit sx={{ color: 'white' }}>
            <List component="div" disablePadding>
              <a href='/Blank/Consultar-blank'>
                <ListItemButton sx={{ pl: 4, }}>
                  <ListItemText primary="Consultar blanck" />
                </ListItemButton>
              </a>
              <a href='/Blank/Inativar-blanks-estampador'>
                <ListItemButton sx={{ pl: 4 }}>
                  <ListItemText primary="Inativar blanck - Estampador" />
                </ListItemButton>
              </a>
              <a href='/Blank/Devolver-placa-fabricante'>
                <ListItemButton sx={{ pl: 4 }}>
                  <ListItemText primary="Devolver placa ao fabricante" />
                </ListItemButton>
              </a>
            </List>
          </Collapse>
          {/*==========================================*/}

          <ListItemButton 
            sx={{ my: 1, color: 'white'  }} 
            onClick={estampador}>
            <ListItemIcon>
            <WarehouseIcon sx={{ color: 'white'}} />
            </ListItemIcon>
            <ListItemText primary="Estampador" />
            {open2 ? <ExpandLess /> : <ExpandMore />}
          </ListItemButton>
          <Collapse in={open2}  unmountOnExit sx={{ color: 'white' }}>
            <List component="div" disablePadding>
              <a href='/Estampadores/Confirmar-recebimento-caixa'>
                <ListItemButton sx={{ pl: 4 }}>
                  <ListItemText primary="Confirmar recebimeto caixa" />
                </ListItemButton>
              </a>
              <a href='/Estampadores/Cadastrar-solicitante-proprietario'>
                <ListItemButton sx={{ pl: 4 }}>
                  <ListItemText primary="Solicitante & Proprietário" />
                </ListItemButton>
              </a>
              <a href='/Estampadores/Consultar-blanks-estampagem'>
                <ListItemButton sx={{ pl: 4 }}>
                  <ListItemText primary="Consultar Estampagem blank" />
                </ListItemButton>
              </a>
              <a href='/Estampadores/Consultar-lotes-recebidos'>
                <ListItemButton sx={{ pl: 4 }}>
                  <ListItemText primary="Consultar lotes recebidos" />
                </ListItemButton>
              </a>
            </List>
          </Collapse>
          {/*==========================================*/}

          <ListItemButton 
            sx={{ my: 1, color: 'white' }} 
            onClick={estampagem}>
            <ListItemIcon>
            <WarehouseIcon sx={{ color: 'white'}} />
            </ListItemIcon>
            <ListItemText primary="Estampagem" />
            {open3 ? <ExpandLess /> : <ExpandMore />}
          </ListItemButton>
          <Collapse in={open3}  unmountOnExit sx={{ color: 'white' }}>
            <List component="div" disablePadding>
              <a href='/Estampadores/EstamparBlank'>
                <ListItemButton sx={{ pl: 4 }}>
                  <ListItemText primary="estampar Placas" />
                </ListItemButton>
              </a>
              <a href='/Estampagem/Lista-aes'>
                <ListItemButton sx={{ pl: 4 }}>
                  <ListItemText primary="Listar AEs" />
                </ListItemButton>
              </a>
            </List>
          </Collapse>
          {/*==========================================*/}

          <ListItemButton 
            sx={{ my: 1, color: 'white' }} 
            onClick={relatorios}>
            <ListItemIcon>
            <WarehouseIcon sx={{ color: 'white'}} />
            </ListItemIcon>
            <ListItemText primary="Relatórios" />
            {open4 ? <ExpandLess /> : <ExpandMore />}
          </ListItemButton>

          <Collapse in={open4}  unmountOnExit sx={{ color: 'white' }}>
            <List component="div" disablePadding>
              <a href='/Relatorios/Estoque'>
                <ListItemButton sx={{ pl: 4 }}>
                  <ListItemText primary="Estoque" />
                </ListItemButton>
              </a>
              <a href='/Relatorios/Notas-fiscais'>
                <ListItemButton sx={{ pl: 4 }}>
                  <ListItemText primary="Notas Fiscais" />
                </ListItemButton>
              </a>
              <a href='/Relatorios/Cupons-fiscais'>
                <ListItemButton sx={{ pl: 4 }}>
                  <ListItemText primary="Cupons Fiscais" />
                </ListItemButton>
              </a>
              <a href='/Relatorios/Estampagem'>
                <ListItemButton sx={{ pl: 4 }}>
                  <ListItemText primary="Estampagem" />
                </ListItemButton>
              </a>
            </List>
          </Collapse>
          {/*==========================================*/}
          <ListItemButton onClick={configuracoes} sx={{color: 'white' }}>
            <ListItemIcon>
            <SettingsIcon sx={{ color: 'white'}} />
            </ListItemIcon>
            <ListItemText primary="Configurações" />
            {open5 ? <ExpandLess /> : <ExpandMore />}
          </ListItemButton>

          <Collapse in={open5}  unmountOnExit sx={{ color: 'white' }}>
            <List component="div" disablePadding>
              <a href='/Estampadores/Certificado'>
                <ListItemButton sx={{ pl: 4 }}>
                  <ListItemText primary="Certificado" />
                </ListItemButton>
              </a>
            </List>
          </Collapse>
        </List>
        <DrawerFooter>
          <IconButton  sx={{color: 'white'}} onClick={handleDrawerClose}>
            {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
          </IconButton>
        </DrawerFooter>
      </Drawer>
        <main
          className={clsx(classes.content, {
            [classes.contentShift]: open,
          })}
        >
          <div className={classes.drawerHeader} />
          {children}
        </main>
    </div>
  );
}
