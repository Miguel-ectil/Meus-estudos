import React, { useEffect, useState } from 'react'
import { 
  Container, 
  Card, 
  Divider, 
  Typography, 
  CardContent, 
  InputBase, 
  Paper, 
  IconButton,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Button
} from '@mui/material';
import { useRouter } from 'next/router'
import SearchIcon from '@mui/icons-material/Search';
import styles from '../../styles/Cards.module.css'
import { useLotesRecebidosEstampador } from '../../src/hooks/LotesRecebidosEstampador'
import Sidebar from '../../src/layout/sidebar'


export default function ConfirmarRecebimentoCaixa() {

	// const [rows,setConfirmarRecebimentoCaixa]=useState<LotesRecebidos[]>([])
	const { getBlanks , lotes }=useLotesRecebidosEstampador();

	useEffect(() =>  {
		getBlanks();

	},[getBlanks])

  const router = useRouter()
  return (

      <Sidebar>
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
            <form>
              <Paper
                sx={{ p: '1px 0px', display: 'flex', alignItems: 'center', width: 400, height:35}} variant="outlined">
                <InputBase
                 sx={{ ml: 1, flex: 1 }}
                 name="numLote"
              />
              
                <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" />
                <Button type="submit" sx={{ p: '2px' }} aria-label="search" className={styles.  buttonSearch}>
                  <SearchIcon />
                  </Button>
              </Paper>
            </form>
           
          </CardContent>
        </Card>
        
      <Paper sx={{ width: '100%', overflow: 'hidden' }} className={styles.card1}>
        <TableContainer sx={{ maxHeight: 500 }}>
          <Table stickyHeader aria-label="sticky table">
            <TableHead>
                <TableRow>
                  <TableCell>Serial</TableCell>
                  <TableCell>Status</TableCell>
                  <TableCell>Estampador</TableCell>
              </TableRow>
              </TableHead>
              <TableBody>
                {lotes?.map(lote =>(
                  <TableRow key={lote.tipoPlaca}>
                  <TableCell>{lote.serial}</TableCell>
                  <TableCell>{lote.status}</TableCell>
                  <TableCell>{lote.estampador}</TableCell>
              </TableRow>

                ))}

              </TableBody>
          </Table>
        </TableContainer>
        
        <Button
          variant="contained"
          onClick={() => router.push('../dashboard')}
          disableElevation>
          Salvar
        </Button>
      </Paper>
      </Sidebar>
  )
}

function useLotes(): { useLotesRecebidosEstampador: any; } {
	throw new Error('Function not implemented.');
}
