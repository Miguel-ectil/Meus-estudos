import React from 'react'
import styles from '../../../styles/EstampadoresStyles/CadastSolicitPropr.module.css'
import {
  Grid,
  Card,
  Select,
  SelectChangeEvent,
  FormControl,
  Typography,
  MenuItem,
  Button,
  TextField,
  Modal,
  Box,
  Divider,
  IconButton,
  Paper
} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';

const style = {
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  bgcolor: 'background.paper',
 
  boxShadow: 24,
  borderRadius: '14px',
  pt: 3,
  px: 4,
  pb: 2,
};

export default function CadastrarSolicitanteProprietario() {
  const [solicity, setSolicity] = React.useState('');

  const handleChange = (event: SelectChangeEvent) => {
    setSolicity(event.target.value);
  };

  const [client, setClient] = React.useState('');

  const hundleChange = (event: SelectChangeEvent) => {
    setClient(event.target.value);
  };

  const [open1, setOpen1] = React.useState(false);
  const Solicitante = () => {
    setOpen1(true);
  };
  const handleClose1 = () => {
    setOpen1(false);
  };

  const [open2, setOpen2] = React.useState(false);
  const Proprietario = () => {
    setOpen2(true);
  };
  const handleClose2 = () => {
    setOpen2(false);
  };

  return (
    <>
      <Grid className={styles.bodyTitle}>
        <Typography className={styles.title}>Solicitante & Proprietários</Typography>
      </Grid>  
      <Card className={styles.body1}>
        <div>
          <Typography className={styles.text}>Solicitante/Despachante</Typography>
            <FormControl className={styles.select}>
              <Select
                sx={{width: 630,  height: 40}}
                value={solicity}
                onChange={handleChange}
                displayEmpty
                inputProps={{ 'aria-label': 'Without label' }}
              >
                <MenuItem value="">
                  <em>Selecione um Solicitante na lista, caso não apareça cliquem em Cadastrar Solicitante</em>
                </MenuItem>
                <MenuItem value={10}>teste0</MenuItem>
                <MenuItem value={20}>teste1</MenuItem>
                <MenuItem value={30}>teste2</MenuItem>
              </Select>
            </FormControl> <br/>
            <Button 
              sx={{
                width: 144,
                height:31
                }} 
              variant="contained" 
              size="medium" 
              className={styles.button1}
              onClick={Solicitante}
            >
              Cadastrar Solicitante
            </Button>
            <Button variant="contained" size="medium" color='success' className={styles.button1} sx={{width: 145, height:31, left: 6 }} onClick={Solicitante}>
              Editar Solicitante
            </Button>
        </div>
        <Modal
          open={open1}
          onClose={handleClose1}
          aria-labelledby="parent-modal-title"
          aria-describedby="parent-modal-description"
        >
          <Box sx={{ ...style, maxwidth: '42rem' }}>
            <Typography sx={{ display: 'flex', alignItems: 'center'}} id="parent-modal-title" ><strong>Cadastrar Solicitante </strong></Typography>
            <Box
              component="form"
              sx={{
                '& .MuiTextField-root': { m: 0.4, width: '32ch'},
              }}
              noValidate
              autoComplete="off"
            >
              <TextField
                id="standard-read-only-input"
                label="Nome ou Razão Social*"
                variant="standard"
              />
              <TextField
                id="standard-read-only-input"
                label="Nome Fantasia"
                variant="standard"
              />
              <TextField
                id="standard-read-only-input"
                label="Tipo Pessoa"
                variant="standard"
              />
              <TextField
                id="standard-read-only-input"
                label="CPF"
                variant="standard"
              />
              <TextField
                id="standard-read-only-input"
                label="RG"
                InputProps={{
                  readOnly: true,
                }}
                variant="standard"
              />

              <TextField
                id="standard-read-only-input"
                label="CEP"
                variant="standard"
              />
              <IconButton
                type="button"
                aria-label="search"
                sx={{
                  marginLeft: '-1.8rem', 
                  marginTop: '1rem'
                }}
              >
                <SearchIcon />
              </IconButton>
              <TextField
                id="standard-read-only-input"
                label="UF"
                InputProps={{
                  readOnly: true,
                }}
                variant="standard"
              />
              <TextField
                id="standard-read-only-input"
                label="Município"
                InputProps={{
                  readOnly: true,
                }}
                variant="standard"
              />
              <TextField
                id="standard-read-only-input"
                label="Logradouro"
                InputProps={{
                  readOnly: true,
                }}
                variant="standard"
              />
              <TextField
                id="standard-read-only-input"
                label="Número"
                InputProps={{
                  readOnly: true,
                }}
                variant="standard"
              />
              <TextField
                id="standard-read-only-input"
                label="Bairro"
                InputProps={{
                  readOnly: true,
                }}
                variant="standard"
              />
              <TextField
                id="standard-read-only-input"
                label="E-Mail"
                InputProps={{
                  readOnly: true,
                }}
                variant="standard"
              />
              <TextField
                id="standard-read-only-input"
                label="Telefone1"
                InputProps={{
                  readOnly: true,
                }}
                variant="standard"
              />
              <TextField
                id="standard-read-only-input"
                label="Telefone2"
                InputProps={{
                  readOnly: true,
                }}
                variant="standard"
              />
              <Button variant="contained" size="medium" color='success' sx={{ width: 100, height: 30, margin:' 20px 0px 0px 4px' }}>
                Cadastrar
              </Button>
            </Box>
          </Box>
        </Modal>
        <div>
          <Typography className={styles.text}>Proprietário</Typography>
          <FormControl className={styles.select}>
            <Select
              sx={{ width: 630,  height: 40}}
              value={client}
              onChange={hundleChange}
              displayEmpty
              inputProps={{ 'aria-label': 'Without label' }}
            >
              <MenuItem value="">
                <em>Selecione um Cliente na lista, caso não apareça cliquem em Cadastrar Cliente</em>
              </MenuItem>
            </Select>
          </FormControl> <br/>
          <Grid sx={{margin:"0px 0px 0px 0px"}}>
            <Button 
              variant="contained" 
              size="medium" 
              className={styles.button1}
              sx={{width: 144, height: 32 }}
              onClick={Proprietario}>
              Cadastrar Proprietário
            </Button>
            <Button variant="contained" color='success' className={styles.button1} sx={{width: 145, height: 32, left: 6 }} onClick={Proprietario}>
              Editar Proprietário
            </Button>
          </Grid>
          <Modal
          open={open2}
          onClose={handleClose2}
          aria-labelledby="parent-modal-title"
          aria-describedby="parent-modal-description"
        >
          <Box sx={{ ...style, maxwidth: '42rem' }}>
            <Typography sx={{ display: 'flex', alignItems: 'center'}} id="parent-modal-title" ><strong>Cadastrar Proprietário </strong></Typography>
            <Box
              component="form"
              sx={{
                '& .MuiTextField-root': { m: 0.3, width: '33.6ch'},
              }}
              noValidate
              autoComplete="off"
            >
              <TextField
                id="standard-read-only-input"
                label="Nome ou Razão Social*"
                variant="standard"
              />
              <TextField
                id="standard-read-only-input"
                label="Nome Fantasia"
                variant="standard"
              />
              <TextField
                id="standard-read-only-input"
                label="Tipo Pessoa"
                variant="standard"
              />
              <TextField
                id="standard-read-only-input"
                label="CPF"
                variant="standard"
              />
              <TextField
                id="standard-read-only-input"
                label="RG"
                InputProps={{
                  readOnly: true,
                }}
                variant="standard"
              />

              <TextField
                id="standard-read-only-input"
                label="CEP"
                variant="standard"
              />
              <IconButton
                type="button"
                aria-label="search"
                sx={{
                  marginLeft: '-1.8rem', 
                  marginTop: '1rem'
                }}
              >
                <SearchIcon />
              </IconButton>
              <TextField
                id="standard-read-only-input"
                label="UF"
                InputProps={{
                  readOnly: true,
                }}
                variant="standard"
              />
              <TextField
                id="standard-read-only-input"
                label="Município"
                InputProps={{
                  readOnly: true,
                }}
                variant="standard"
              />
              <TextField
                id="standard-read-only-input"
                label="Logradouro"
                InputProps={{
                  readOnly: true,
                }}
                variant="standard"
              />
              <TextField
                id="standard-read-only-input"
                label="Número"
                InputProps={{
                  readOnly: true,
                }}
                variant="standard"
              />
              <TextField
                id="standard-read-only-input"
                label="Bairro"
                InputProps={{
                  readOnly: true,
                }}
                variant="standard"
              />
              <TextField
                id="standard-read-only-input"
                label="E-Mail"
                InputProps={{
                  readOnly: true,
                }}
                variant="standard"
              />
              <TextField
                id="standard-read-only-input"
                label="Telefone1"
                InputProps={{
                  readOnly: true,
                }}
                variant="standard"
              />
              <TextField
                id="standard-read-only-input"
                label="Telefone2"
                InputProps={{
                  readOnly: true,
                }}
                variant="standard"
              />
              <Button variant="contained" size="medium" color='success' sx={{ width: 100, height:30, margin:' 20px 6px' }}>
                Cadastrar
              </Button>
            </Box>
          </Box>
        </Modal>
        </div>
      </Card>
    </>  
  )
}