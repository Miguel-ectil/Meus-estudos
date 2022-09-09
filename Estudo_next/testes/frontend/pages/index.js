import React from 'react'
import {
  Box,
  Card,
  TextField,
  Typography,
  Container,
  Button,
  styled
} from '@mui/material';
import { useRouter } from 'next/router';
import { authService } from '../services/auth/authService';


export default function Login() {
  const router = useRouter();
  const [values, setValues] = React.useState({
    usuario: '',
    senha: '',
  });

  function handleChange(event) {
    const fieldValue = event.target.value;
    const fieldName = event.target.name;
    setValues((currentValues) => {
      return {
        ...currentValues,
        [fieldName]: fieldValue,
      };
    })
  }

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
          my: 26
        }}
      >
        <Box textAlign="center">
          <Typography my={3}>
            <img src="logo.jpg" alt="Logo Dvr" width={120} height={110}></img>
          </Typography>
        </Box>
        <form onSubmit={(event) => {
          event.preventDefault();
          authService
          .login({
            username: values.usuario,
            password: values.senha,
          })
          .then(() => {
            // router.push('/auth-page-static');
            router.push('/dashboard'); 
          })
          .catch(() => {
            alert('Usúario  ou senha estão invalido')
          })
          
        }}>
          <TextField
            fullWidth
            margin="normal"
            autoFocus
            label='Usúario'
            name="usuario"
            variant="standard"
            value={values.usuario}
            onChange={handleChange}
          />
          <TextField
            fullWidth
            margin="normal"
            label='Senha'
            name="senha"
            variant="standard"
            value= {values.senha}
            onChange={handleChange}
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