import { Card, Divider, Grid, Typography } from '@mui/material'
import { Container } from '@mui/system'
import React from 'react'
import styles from '../../styles/RelatoriosStyles/Estoque.module.css'

export default function Estoque() {
    return (
        <Container>
            <Grid sx={{
            my: 0, mx: 38
            }}
            className={styles.title}>
                Relatório de Estoque
            </Grid>
            <Card sx={{
            my: 2
            }}
            className={styles.body}>
                    <Typography className={styles.titleBody1}>PLACAS</Typography> 
                <Divider/>
                <Grid sx={{p: 2}}>
                    <Typography className={styles.text}>MOTO</Typography>
                    <Typography sx={{ml: 5}}>ESTAMPADAS:</Typography>
                </Grid>
                <Grid sx={{p: 2}}>
                    <Typography className={styles.text}>CARRO</Typography>
                    <Typography sx={{ml: 5}}>ESTAMPADAS:</Typography>
                </Grid>
                <Grid sx={{p: 2}}>
                    <Typography className={styles.text}>MINI-PLACAS</Typography>
                    <Typography sx={{ml: 5}}>ESTAMPADAS:</Typography>
                </Grid>
            </Card>
            <Card sx={{
            my: 2
            }}
            className={styles.body}>
                    <Typography className={styles.titleBody1}>BLANKS</Typography>
                <Divider/>
                <Grid sx={{p: 2}}>
                    <Typography>LOTES</Typography>
                    <Typography>BLANKS</Typography>
                </Grid>
            </Card>
        </Container>
    )
}