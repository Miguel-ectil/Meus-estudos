import * as React from 'react';
import { Grid, Card,Typography, CardContent, Box } from '@mui/material';
import styles from '../cards/Card-dashboard.module.css'
import { useEffect } from 'react';
import { useDashboardeEstoque } from '../../hooks/EstoqueEstampador';

const bull = (
    <Box
      component="span"
      sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
    >
      •
    </Box>
  );


export default function CardsDashboard () {
	
	const {estoque , getEstoque}=useDashboardeEstoque()
	
	
	useEffect(() => {
		getEstoque()

	} ,[getEstoque])

  return (
    <article 
      className={styles.wrapper}>
		{estoque?.map(estoque =>{ 
			return (
		
        <><Grid>
			<Card className={styles.card}>
				<CardContent>
					<header>
						<div className={styles.author}>
							<img
								src='cardsFoto/carro.png'
								alt='foto moto'
								className={styles.carro} />
							<div className={styles.authorInfo}>
								<strong>Carro </strong>
							</div>
						</div>
					</header>
					<Typography variant="body2">
						<strong>Estoque: ___________  {estoque.carro_estoque} </strong>
					</Typography>
					<Typography variant="body2">
						<strong>Produzidos:_________{estoque.carro_produzidos} </strong>
					</Typography>
					<Typography variant="body2">
						<strong>Transporte: _________ {estoque.carro_transporte} </strong>
					</Typography>
					<Typography variant="body2">
						<strong>Inativados:__________{estoque.carro_inativados} </strong>
					</Typography>
				</CardContent>


			</Card>
		</Grid><Grid>
				<Card className={styles.card}>

					<CardContent>
						<header>
							<div className={styles.author}>
								<img
									src='cardsFoto/carro.png'
									alt='foto moto'
									className={styles.carro} />
								<div className={styles.authorInfo}>
									<strong>Carro Colecionador </strong>
								</div>
							</div>
						</header>
						<Typography variant="body2">
						<strong>Estoque: __________{estoque.carro_estoque_preta} </strong>
						</Typography>
						<Typography variant="body2">
							<strong>Produzidos:________ {estoque.carro_estoque_preta} </strong>
						</Typography>
						<Typography variant="body2">
							<strong>Transporte:_________{estoque.carro_produzidos_preta} </strong>
						</Typography>
						<Typography variant="body2">
							<strong>Inativados:_________ {estoque.carro_inativados_preta} </strong>
						</Typography>
					</CardContent>
				</Card>
			</Grid><Grid>
				<Card className={styles.card}>
					<CardContent>
						<header>
						  <div className={styles.author}>
							<img
								src='cardsFoto/carro.png'
								alt='foto moto'
								className={styles.carro} />
							<div className={styles.authorInfo}>
								<strong>Mini 11  </strong>
							</div>
						</div>
						</header>
						<Typography variant="body2">
						<strong>Estoque: __________  {estoque.mini11_estoque} </strong>
					</Typography>
					<Typography variant="body2">
						<strong>Produzidos:________{estoque.mini11_produzidos} </strong>
					</Typography>
					<Typography variant="body2">
						<strong>Transporte: ________ {estoque.mini11_transporte} </strong>
					</Typography>
					<Typography variant="body2">
						<strong>Inativados:_________{estoque.mini11_inativados} </strong>
					</Typography>
					</CardContent>
				</Card>
			</Grid><Grid>
				<Card className={styles.card}>
					<CardContent>
						<header>
							<div className={styles.author}>
								<img
									src='cardsFoto/carro.png'
									alt='foto moto'
									className={styles.carro} />
								<div className={styles.authorInfo}>
									<strong>Mini 11 Colecionador </strong>
								</div>
							</div>
						</header>
						<Typography variant="body2">
						<strong>Estoque: ___________ {estoque.mini11_estoque_preta} </strong>
					</Typography>
					<Typography variant="body2">
						<strong>Produzidos:_________{estoque.mini11_produzidos_preta} </strong>
					</Typography>
					<Typography variant="body2">
						<strong>Transporte: _________ {estoque.mini11_transporte_preta} </strong>
					</Typography>
					<Typography variant="body2">
						<strong>Inativados:__________{estoque.mini11_inativados_preta} </strong>
					</Typography>
					</CardContent>
				</Card>
			</Grid><Grid>
				<Card className={styles.card}>
					<CardContent>
						<header>
							<div className={styles.author}>
								<img
									src='cardsFoto/carro.png'
									alt='foto moto'
									className={styles.carro} />
								<div className={styles.authorInfo}>
									<strong>Mini 13 </strong>
								</div>
							</div>
						</header>
						<Typography variant="body2">
						<strong>Estoque: _________  {estoque.mini13_estoque} </strong>
					</Typography>
					<Typography variant="body2">
						<strong>Produzidos:_______{estoque.mini13_produzidos} </strong>
					</Typography>
					<Typography variant="body2">
						<strong>Transporte: _______ {estoque.mini13_transporte} </strong>
					</Typography>
					<Typography variant="body2">
						<strong>Inativados:________{estoque.mini13_inativados} </strong>
					</Typography>
					</CardContent>
				</Card>
			</Grid><Grid>   {/*item xs={12} sm={6} lg={2}*/}
				<Card className={styles.card}>
					<CardContent>
						<header>
							<div className={styles.author}>
								<img
									src='cardsFoto/carro.png'
									alt='foto moto'
									className={styles.carro} />
								<div className={styles.authorInfo}>
									<strong>Mini 13 Colecionador</strong>
								</div>
							</div>
						</header>
						<Typography variant="body2">
						<strong>Estoque: _________ {estoque.mini13_estoque_preta} </strong>
					</Typography>
					<Typography variant="body2">
						<strong>Produzidos:________{estoque.mini13_produzidos_preta} </strong>
					</Typography>
					<Typography variant="body2">
						<strong>Transporte: ________ {estoque.mini13_transporte_preta} </strong>
					</Typography>
					<Typography variant="body2">
						<strong>Inativados:_________{estoque.mini13_inativados_preta} </strong>
					</Typography>
					</CardContent>
				</Card>
			</Grid><Grid> {/*item xs={12} sm={6} lg={2}*/}
				<Card className={styles.card}>
					<CardContent>
						<header>
							<div className={styles.author}>
								<img
									src='cardsFoto/moto.png'
									alt='foto moto'
									className={styles.moto} />
								<div className={styles.authorInfo}>
									<strong>Moto </strong>
								</div>
							</div>
						</header>
						<Typography variant="body2">
						<strong>Estoque: _________  {estoque.moto_estoque} </strong>
					</Typography>
					<Typography variant="body2">
						<strong>Produzidos:_______{estoque.moto_produzidos} </strong>
					</Typography>
					<Typography variant="body2">
						<strong>Transporte: _______ {estoque.moto_transporte} </strong>
					</Typography>
					<Typography variant="body2">
						<strong>Inativados:________{estoque.moto_inativados} </strong>
					</Typography>
					</CardContent>
				</Card>
			</Grid><Grid> {/*item xs={12} sm={6} lg={2}*/}
				<Card className={styles.card}>
					<CardContent>
						<header>
							<div className={styles.author}>
								<img
									src='cardsFoto/moto.png'
									alt='foto moto'
									className={styles.moto} />
								<div className={styles.authorInfo}>
									<strong>Moto Colecionador </strong>
								</div>
							</div>
						</header>
						<Typography variant="body2">
						<strong>Estoque: _________  {estoque.moto_estoque_preta} </strong>
					</Typography>
					<Typography variant="body2">
						<strong>Produzidos:_______{estoque.moto_produzidos_preta} </strong>
					</Typography>
					<Typography variant="body2">
						<strong>Transporte: _______ {estoque.moto_transporte_preta} </strong>
					</Typography>
					<Typography variant="body2">
						<strong>Inativados:________{estoque.moto_transporte_preta} </strong>
					</Typography>
					</CardContent>
				</Card>
			</Grid></>
			)  
		})}      
    </article>
  )
}