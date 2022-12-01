import React from 'react'
import styles from '../../styles/BlankStyles/ConsultBlank.module.css'
import {Grid , Card, Typography, Paper, InputBase, Button } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';

import Sidebar from '../../src/layout/sidebar'

export default function ConsultarBlank() {

  return (
    <Sidebar>
      <Grid className={styles.bodyTitle}>
        <h4>Consultar Blank</h4>
      </Grid>
      <Card className={styles.body1}>
        <Typography className={styles.text}> Serial: </Typography>
        <Paper
          sx={{ p: '1px 0px', display: 'flex', alignItems: 'center', width: 430, height:30}} className={styles.arredondamento}variant="outlined"
        >
          <InputBase
            sx={{ ml: 1, flex: 1 }}
          />
          <Button aria-label="search" className={styles.button}>
            <SearchIcon />
          </Button>
        </Paper> 
      </Card>
      <Card className={styles.body2}>
        <h4>Dados Blank</h4>
      </Card>
      <Card className={styles.body3}>
        <Typography className={styles.text}> Serial: </Typography>
        <Typography className={styles.text}> Serial Hash: </Typography>
        <Typography className={styles.text}> QR-Code: </Typography>
        <Typography className={styles.text}> Status: </Typography>
        <Typography className={styles.text}> Criado em: </Typography>
        <Typography className={styles.text}> Inutizado: </Typography>
        <Typography className={styles.text}> Estampador: </Typography>
        <Typography className={styles.text}> Lote Entrada: </Typography>
        <Typography className={styles.text}> Lote Saída: </Typography>
      </Card>
    </Sidebar>
  )
}