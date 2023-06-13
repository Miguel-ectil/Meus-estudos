import MenuIcon from '@mui/icons-material/Menu';
import AccountCircle from '@mui/icons-material/AccountCircle';
import {Grid, Button, Typography, Toolbar, Box, IconButton, AppBar} from '@mui/material';

import { tokenService } from '../services/auth/tokenService';
import Head from 'next/head';
// import Content from '../components/Content';

export default function Navbar() {
  return (
	<>
	  <Head>
		<title>Sistema DVR </title>
	  </Head>
	  <Grid sx={{ minWidth: 200 }}>
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
			<Button variant="contained" color="error" href="/logout">Sair</ Button>
		  </Toolbar>
		</AppBar>
		{/* <pre>
	    {JSON.stringify(props, null, 2)}
	    </pre> */}
	  </Grid>
	  {/* <LeftNavbar /> */}
	</>
  )
}

// export async function getServerSideProps(ctx) {
// 	const token = tokenService.get(ctx)
// 	console.log(token);

// 	return {
// 		props: {
// 			token: tokenService.get(ctx),
// 		},

// 	}
// }