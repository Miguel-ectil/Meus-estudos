import React from 'react';
import { useEffect, useState } from 'react'
import {
  Grid, Card, Box, CardActions, InputBase, Divider, Select, FormControl, Typography, Input, MenuItem, Button, TextField, 
  Modal, Checkbox, FormControlLabel, Container
} from '@mui/material';

import styles from '../styles/login.module.css';
import { useCadastroservices } from '../src/services/cadastro'


export default function Login() {
  const service = useCadastroservices();

  const [cadastro, setCadastro] = useState<any[]>([]);
  const [name, setNome] = useState<string>("")
	const [idade, setIdade] = useState<string>("")
  const [cpf, setCpf] = useState<string>("")
  const [senha, setSenha] = useState<any>("")
  const [id, setId] = useState<any>(1)

  // useEffect(() => {
  //   service.getCadastro()
  //   .then((response) => {
  //     setCadastro(response)

  //   }).catch((err) => {
  //     console.log('erro pangare')
  //   })
  // }, [])

  const submit = () => {
    // const cadastro = {name, idade, cpf}
		service.getCadastro()
      .then(response => response.json())
			.then((data) => {
        setCadastro(data)
        console.log(data)
			})
			.catch((error) => {
				console.log(error, "Cep não encontardo")
			})
	}

  return (
    <Container
      sx={{
        display: 'flex',
      alignItems: 'center',
      flexDirection: 'column'
      }} //background: "#92140c"
      maxWidth="lg"
    >
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
            onChange={(e) => setNome(e.target.value)}
          />
          <TextField
            name='idade'
            id="idade"
            label="Idade"
            variant="standard"
            fullWidth
            value={idade}
            onChange={(e) => setIdade(e.target.value)}
          />
          <TextField
            name='cpf'
            id="cpf"
            label="CPF"
            fullWidth
            variant="standard"
          
            value={cpf}
            onChange={(e) => setCpf(e.target.value)}
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
        </Box>
        <CardActions>
          <Box width='100%' display='flex' justifyContent='center'>
            <Button sx={{
              height: ' 1.8rem',
              margin: '1rem'
              }} 
              onClick={submit}
              variant="contained" 
              color="success"
            >
              Enviar
            </Button>
          </Box>
        </CardActions>
      </Card>
    </Container>
  )
}