import React from 'react';
import { Container, Button, Card, TextField, Box, Typography, CardMedia, Alert, Stack } from '@mui/material';
import { IconButton } from '@mui/material';
import { useRouter } from 'next/router';

export default function HomeScreen() {
  const router = useRouter();
  const [values, setValues] = React.useState({
    usuario: 'omariosouto',
    senha: 'safepassword',
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
    <div>
      <Container
        sx={{
          display: 'flex',
          alignItems: 'center',
          flexDirection: 'column'
        }}
        maxWidth="sm"
      >
        <Box>
          <Card
            variant="outlined"
            sx={{
              p: 1,
              display: 'flex',
              flexDirection: { xs: 'column', sm: 'row' },
            }}>
              <h1>Login</h1>
              <form onSubmit={(event) => {
                event.preventDefault();

                // router.push('/auth-page-static');
                router.push('/auth-page-ssr');
              }}>
              <TextField
                placeholder="Usuário" name="usuario"
                value={values.usuario} onChange={handleChange}
              />
              <TextField
                placeholder="Senha" name="senha" type="password"
                value={values.senha} onChange={handleChange}
              />
              {/* <pre>
                {JSON.stringify(values, null, 2)}
              </pre> */}
              
                <Button 
                  color="primary"
                  size="large"
                  variant="contained"
                  >
                  Entrar
                </Button> 
            </form>
          </Card>
        </Box>
      </Container>
    </div>
  );
}
