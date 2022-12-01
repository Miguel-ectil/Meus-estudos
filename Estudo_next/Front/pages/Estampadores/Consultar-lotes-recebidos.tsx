import React from 'react'
import {Grid , Card, Paper, Container, TableContainer, Table, TableHead, TableRow, TableCell, TableBody, Typography, Divider} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import { useEffect } from 'react';
import styles from '../../styles/EstampadoresStyles/ConsultLoteRecebidos.module.css'
import { useConsultarLotesRecebidos } from '../../src/hooks/ConsultarLotesRecebidos';
import { useRouter } from 'next/router';

export default function ConsultarLotesRecebidos() {
	
	const {consultalotesrecebidos, getConsultarLotesRecebidos}=useConsultarLotesRecebidos()
	
	useEffect(() => { getConsultarLotesRecebidos()

	},[getConsultarLotesRecebidos])
	console.log(consultalotesrecebidos)
	
	
	const router = useRouter()
	return ( 
    <Container>
        <Grid sx={{
        my: 0, mx: 38
        }}
        className={styles.title}>Consulta de lotes recebidos
        </Grid>

        <Card sx={{
        my: 2, 
        }}
         className={styles.body}>
            <Grid sx={{pb: 2}}>
                        <Typography className={styles.text}> Lotes </Typography>
                </Grid>
                <Divider/>
             <Paper sx={{ width: '100%', overflow: 'hidden' }} className={styles.card1}>
                <TableContainer sx={{ maxHeight: 500 }}>
                <Table stickyHeader aria-label="sticky table">
                    <TableHead>
                        <TableRow>
                            <TableCell className={styles.text}>Lotes</TableCell>
                            <TableCell className={styles.text}>Tipo Placa</TableCell>
                            <TableCell className={styles.text}>Data envio</TableCell>
                        </TableRow>
                    </TableHead>
					<TableBody>
                {consultalotesrecebidos?.map(consultas =>(
                  <TableRow key={consultas.id}>
                  <TableCell>{consultas.lotes}</TableCell>
                  <TableCell>{consultas.tipoplaca}</TableCell>
                  <TableCell>{consultas.dataenvio}</TableCell>
              </TableRow>

                ))}

              </TableBody>
                
                </Table>
                </TableContainer>
            </Paper>
        </Card>
    </Container>
    )
}