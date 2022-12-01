import React from 'react'
import styles from '../../styles/BlankStyles/InativarBlank.module.css'
// import Sidebar from '../../src/layout/sidebar'

import {Grid , Card, Typography, Paper, InputBase, Button, Container, Box, Modal, Divider } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import TextField from '@mui/material/TextField';

const style = {
    position: 'absolute' as 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: '#25282b',
    color: '#ffffff',
    border: '2px solid #0000004f',
    boxShadow: 24,
    p: 4,
    borderRadius: '10px',
  };

export default function InativarBlacksEstampador() {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    return (
        <>
          <Grid sx={{
            my: 0, mx: 38
            }}
            className={styles.title}> Inativar Blank
            </Grid>

            <Card sx={{
            my: 2
            }} 
            className={styles.body1}>
                <Typography className={styles.text}> Serial Hash: </Typography> 
                <Paper
                    sx={{ p: '1px 0px', display: 'flex', alignItems: 'center', width: 450, height:35}} variant="outlined">
                    <InputBase
                        sx={{ ml: 1, flex: 1 }}
                    />
                    <Button type="button" sx={{ p: '10px' }} aria-label="search" className={styles.buttonSearch}>
                        <SearchIcon />
                    </Button>
                </Paper>
            </Card>

            <Card
             className={styles.tabelaBody}>
                <Typography sx={{fontSize: 18, fontWeight: 600}}>Dados Blank</Typography>
                <Divider/>
                <Grid sx={{p: 2}}>
                    <strong> Serial: </strong> 220923061669923 <br/>
                    <strong> Status: </strong> BLANK_ESTAMPADO <br/>
                    <strong> Criado em: </strong> Não Informado <br/>
                    <strong> Inutizado: </strong> Não Informado <br/>
                    <strong> Estampador:</strong> 2928 <br/>
                    <strong> Lote Entrada:</strong> 1630 <br/>
                    <strong> Lote Saída: </strong> 2022091327

                </Grid>
            </Card>

            <Card sx={{
            my: 2, 
            }}
            className={styles.bodyTextArea}
            >
                <Typography className={styles.text}>Observação:</Typography>
                <TextField
                multiline
                maxRows={5}
                sx={{ width: '100%' }}
                />
                <Button variant="contained" size="medium" onClick={handleOpen} className={styles.button1} sx={{ width: 230, height:30, float: 'right', my: 1 }}>
                Confirmar
                </Button>
            </Card>

            <Modal
                keepMounted
                open={open}
                onClose={handleClose}
                aria-labelledby="keep-mounted-modal-title"
                aria-describedby="keep-mounted-modal-description"
            >
                <Box sx={style}>
                    <Typography>
                        Tem certeza que gostaria de concluir?
                    </Typography>
                    <Button type="button" variant="contained" sx={{ mx: '12px', my: '2px', mt: '10px'}}>
                        SIM
                    </Button>
                    <Button type="button" variant="contained" sx={{ mx: '10px', my: '2px', mt: '10px'}}>
                        NÃO
                    </Button>
                </Box>
            </Modal>
        </>
    )
}