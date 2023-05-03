import * as React from 'react';
import { useEffect, useState } from 'react'
import {
  Grid, Card, Box, CardActions, InputBase, Divider, Select, FormControl, 
  Typography, Input, MenuItem, Button, TextField, 
  Modal, Checkbox, FormControlLabel, Container
} from '@mui/material';

import styles from '@/styles/login.module.css';
import { useCadastroservices } from '../../src/services/cadastro'

export default function cadastro() {
  const service = useCadastroservices();

  const [name, setName] = useState<string>("")
  const [usuario, setUsuario] = useState<string>("")
  const [senha, setSenha] = useState<any>("")
  const [email, setEmail] = useState<string>("")

  const submit = () => {
    const cadastro = {name, usuario, senha, email}
	  service.postCadastro(cadastro)
	  .then((response) => {
        console.log(response)
	  })
      .catch((error) => {
        console.log(error.data);
        console.log(error, "Falha ao cadastrar Usuário")
	  })
  }

  return (
    <Grid sx={{marginLeft: 32}}>
      <Card
        sx={{
          p: 6,
          my: 12
        }}
        className={styles.card}
      >
        <Box flexDirection='column' gap={8} >
          <TextField
            name='nome'
            id="nome"
            label="Nome"
            fullWidth
            variant="standard"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <TextField
            name='usuario'
            id="usuario"
            label="Usuario"
            fullWidth
            variant="standard"   
            value={usuario}    
            onChange={(e) => setUsuario(e.target.value)}   
          />
          <TextField
            name='senha'
            id="senha"
            label="Senha"
            fullWidth
            variant="standard"
            value={senha}
            onChange={(e) => setSenha(e.target.value)}
          />
          <TextField
            name='email'
            id="email"
            label="Email"
            variant="standard"
            fullWidth
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </Box>
        <CardActions>
          <Box width='100%' display='flex' justifyContent='center'>
            <Button sx={{
              height: ' 1.8rem',
              margin: '1rem'
              }} 
              variant="contained" 
              color="success"
              onClick={submit}
            >
              Enviar
            </Button>
          </Box>
        </CardActions>
      </Card>
    </Grid>
  )
}