import {
  Box,
  Card,
  TextField,
  Typography,
  Container,
  Button,
} from '@mui/material';

// import { useRouter } from 'next/router';
// import { authService } from '../src/services/auth/authService';

import styles from '../styles/login.module.css';

export default function Login() {

  return (
    <>
     <Container
      sx={{
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'column'
      }}
      maxWidth="lg">
      <Card
        sx={{
          p: 6,
          my: 12
        }}
        className={styles.card}
      >
        <Box textAlign="center">
          <Typography my={3}>
            <img src="logo.png" alt="Logo Dvr" width={120} height={110} />
          </Typography>
        </Box>
        <form>
          <TextField
            fullWidth
            margin="normal"
            autoFocus
            label='Usúario'
            name="usuario"
            variant="standard"
          />
          <TextField
            fullWidth
            margin="normal"
            label='Senha'
            name="senha"
            variant="standard"
          /> 
          <Button
            sx={{
              mt: 2
            }}
            color="primary"
            type="submit"
            fullWidth
            size="large"
            variant="contained"
          >
           Entrar
          </Button>
        </form>
      </Card>
    </Container>
    </>
  )
}
