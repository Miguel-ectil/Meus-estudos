import React from 'react'
import styles from '../../styles/BlankStyles/DevolverPlacas.module.css'
import {Grid , Card, Paper, InputBase, IconButton, Typography, Button } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';

export default function DevolverPlacaFabricante() {
    return ( 
        <>
        <Grid sx={{
        my: 0, mx: 38
        }}
        className={styles.bodyTitle}> Devolução de lote / Blank
        </Grid>

        <Card sx={{
        my: 2, mx: 6
        }}  
        className={styles.body1}> 
            <Typography className={styles.text}> Devolver placa individual: </Typography> 
            <Paper
                sx={{ p: '1px 2px', display: 'flex', alignItems: 'center', width: 450, height:35}} variant="outlined">
                <InputBase
                    sx={{ ml: 1, flex: 1, }}
                    type="text"
                />
            </Paper> 
            <Button variant="contained" size="medium" className={styles.button1} sx={{ width: 280, height:28,  mt: 1}}>
              Confirmar
            </Button>
        </Card> 

        <Card sx={{
        my: 2, mx: 6
        }} 
        className={styles.body2}>
            <Typography className={styles.text}> Devolver caixa fechada: </Typography> 
            <Paper
                sx={{ p: '0px 0px', display: 'flex', alignItems: 'center', width: 450, height:35}} variant="outlined">
                <InputBase
                    sx={{ ml: 1, flex: 1 }}
                />
                <Button type="button" sx={{ p: '10px' }} aria-label="search" className={styles.buttonSearch}>
                    <SearchIcon />
                </Button>
            </Paper>
        </Card>
        </>
    )
}