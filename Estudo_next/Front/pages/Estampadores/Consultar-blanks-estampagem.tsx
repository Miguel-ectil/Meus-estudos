import React from 'react'
import { 
    Container, 
    Card, 
    Divider, 
    Typography, 
    CardContent, 
    InputBase, 
    Paper, 
    Box,
    Grid,
    TextField,
    TableBody,
    TableCell,
    Table,
    TableContainer,
    TableHead,
    TableRow,
    Button
  } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';

import styles from '../../styles/Cards.module.css'

export default function ConsultarBlanksEstampagem() {
  return (
    <Container>
      <Card 
        sx={{
        my: 0.8,
        minHeight: '8.2rem' ,
        padding: '0.6rem',
        borderLeft:" 5px solid #6c757d",
        borderRight: "5px solid #6c757d",
        borderRadius: '12px'
        }}
        variant="outlined"
      >
        <Grid
          sx={{
            display: 'grid',
            gridTemplateColumns:' 0.4fr  0.4fr',
          }}>
          <div>
            <Typography
              sx={{
                marginLeft: 0.4,
              }}  
              component="div">
                <strong>No Autorização</strong>
            </Typography>
            <Paper
              component="form"
              sx={{ p: '1px 1px', m: 0.4, display: 'flex', alignItems: 'center', width: 320, height: 36 }}
              variant="outlined"
            >
              <InputBase
                sx={{ 
                  ml: 1,
                  flex: 1 
                }}
              />
            </Paper>
            <Button
                sx={{
                marginLeft: 0.4,
                textTransform: 'none'
                }}
                variant="contained"
                disableElevation>
                Consultar Ae
            </Button>
          </div>
          <div>
            <Typography 
              sx={{
                marginLeft: 0.4,
              }}  
              component="div">
                <strong>Placa</strong>
            </Typography>
            <Paper
              component="form"
              sx={{ p: '2px 4px', m: 0.4, display: 'flex', alignItems: 'center', width: 320, height: 36 }}
              variant="outlined" 
            >
              <InputBase
                sx={{
                  ml: 1,
                  flex: 1 
                }}
              />
            </Paper>
            <Button
              sx={{
                marginLeft: 0.4,
                textTransform: 'none'
              }}
              variant="contained"
              disableElevation>
                Consultar placa
            </Button>
          </div>
        </Grid>
        <Divider 
          sx={{ 
            my: 4
          }} />     

        <Box
          component="form"
          sx={{
            '& .MuiTextField-root': { m: 0.8, width: '42ch' },
          }}
          noValidate
          autoComplete="off"
        >
          <div>
            <TextField
              id="outlined-required"
              label="Numero AE"
            />
            <TextField
            //   required
              id="outlined-required"
              label="Placa do AE"
            />
            <TextField
              id="outlined-required"
              label="Status do AE"
            />
            <TextField
            //   required
              id="outlined-required"
              label="Nome Cliente"
            />
            <TextField
              id="outlined-required"
              label="Documento Cliente"
            />
            <TextField
            //   required
              id="outlined-required"
              label="Telefone Cliente"
            />
          </div>
        </Box>
        <TextField
          sx={{m: 1, minWidth: '46rem'}}
          id="outlined-required"
          label="Endereço Cliente"
        />
      </Card>
      <Paper 
        sx={{ 
          my: 1, 
          width: '100%',
          overflow: 'hidden',
          borderLeft:" 5px solid #6c757d",
          borderRight: "5px solid #6c757d",
          borderRadius: '12px'
        }}
        variant="outlined"
      >
        <TableContainer sx={{ maxHeight: 500 }}>
          <Table stickyHeader aria-label="sticky table">
            <TableHead>
                <TableRow>
                  <TableCell><strong>Placa</strong></TableCell>
                  <TableCell><strong>TipoPlaca</strong></TableCell>
                  <TableCell><strong>Status</strong></TableCell>
                  <TableCell><strong>Categoria</strong></TableCell>
                  <TableCell><strong>Especie</strong></TableCell>
                  <TableCell><strong>Tipo</strong></TableCell>
                  <TableCell><strong>Serial Placa</strong></TableCell>
              </TableRow>
              </TableHead>
              <TableBody>
                  <TableRow >
                  <TableCell> </TableCell>
                  <TableCell> </TableCell>
                  <TableCell></TableCell>
              </TableRow>
              </TableBody>
          </Table>
        </TableContainer>
        
        {/* <Button
          variant="contained"
          onClick={() => router.push('../dashboard')}
          disableElevation>
          Salvar
        </Button> */}
      </Paper>
    </Container>
  )
}