import React from 'react'
import { Container, Card, Divider, Typography, CardContent, InputBase, Paper, IconButton } from '@mui/material';

import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import DirectionsIcon from '@mui/icons-material/Directions';


import Navbar from '../../src/components/navbar'
import styles from '../../styles/Cards.module.css'
export default function ConfirmarRecebimentoCaixa() {
  return (
    <>
      <Navbar />
      <Container>
        <Card 
          sx={{
            my: 4, 
          }}
          className={styles.card}
        >
          <CardContent>
            <Typography  component="div">
                <strong>Número Lote:</strong>
            </Typography>
            <Paper
              component="form"
              sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', width: 400 }}
            >
              {/* <IconButton sx={{ p: '10px' }} aria-label="menu">
                <MenuIcon />
                </IconButton> */}
                <InputBase
                  sx={{ ml: 1, flex: 1 }}
                  placeholder="Search Google Maps"
                  inputProps={{ 'aria-label': 'search google maps' }}
                />
                <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" />
                <IconButton type="button" sx={{ p: '10px' }} aria-label="search">
                  <SearchIcon />
                </IconButton>
              </Paper>
          </CardContent> 
        </Card> 
      </Container>
    </>
  )
}