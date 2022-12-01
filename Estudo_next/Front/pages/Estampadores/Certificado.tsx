import { Card, Grid, Button, Typography, Box, Modal, Paper, InputBase, Divider } from '@mui/material'
import { Container } from '@mui/system'
import React from 'react'
import styles from '../../styles/EstampadoresStyles/Certificado.module.css'

const style = {
    position: 'absolute' as 'absolute',
    top: '30%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 750,
    bgcolor: '#f6f8fa',
    color: '#000000',
    border: '2px solid #0000004f',
    boxShadow: 24,
    p: 4,
    borderRadius: '10px',
  };
export default function Certificado() {

    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    return (
        <Container>
            <Grid sx={{
            my: 0, mx: 38
            }}
            className={styles.title}>
                Certificado
            </Grid>
            <Card sx={{
            my: 2, mx: 6
            }}  
            className={styles.body}> 
                <Typography>Certificado: /certficates/2928.pfx</Typography>

                <Button onClick={handleOpen} variant="contained" size="medium" className={styles.button2} sx={{mt: 2}}>
                    Enviar Certificado
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
                    <Grid sx={{pb: 2}}>
                        <Typography className={styles.text}> Certificado </Typography>
                    </Grid>
                    <Divider/>

                    <Paper
                        sx={{ display: 'flex', alignItems: 'center', width: '100%', height:45, mt: 2}} variant="outlined" component="label">
                        <InputBase
                            sx={{ ml: 1, flex: 1 }}
                            placeholder="Selecione ou Arraste o certificado"
                        />           
                        <Button variant="contained" component="label" className={styles.button2} sx={{width: 220, height:45, fontSize:'16px', fontWeight: 700, m: -0.1}}>
                            Selecionar Certificado
                            <input hidden accept="/*" multiple type="file" />
                        </Button>
                    </Paper>

                    <Typography sx={{mt: 2}}>Senha</Typography>
                    <Paper
                        sx={{ display: 'flex', alignItems: 'center', width: '100%', height:32}} variant="outlined">
                        <InputBase
                            sx={{ ml: 1, flex: 1 }}
                        />
                    </Paper>
                    <Button onClick={handleOpen} variant="contained" size="medium" className={styles.button2} sx={{mt: 2}}>
                            Enviar Certificado
                    </Button>
                </Box>
            </Modal>
        </Container>
    )
}