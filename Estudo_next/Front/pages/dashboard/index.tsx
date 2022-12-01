import { useRouter } from 'next/router'
import { Container, Grid, Button } from '@mui/material';

// import { tokenService } from '../../src/services/auth/tokenService';

import Sidebar from '../../src/layout/sidebar'
import CardsDashboard from '../../src/components/cards/Card-dashboard'
import styles from '../../styles/Home.module.css';
// import Sidebar from '../../src/components/sidebar'

export default function Dashboard() {
  const router = useRouter()
  return (
    <Sidebar>
      {/* <Grid className={styles.wrapper}>
        <Grid>
          <Button
            variant="contained"
            onClick={() => router.push('../Estampadores/Confirmar-recebimento-caixa')}
            disableElevation>
            Reecber placa do fabricante
          </Button>
        </Grid>
        <Grid>
          <Button 
            variant="contained" 
            onClick={() => router.push('../Estampagem/EstamparAe')}
            disableElevation>
            Estampar Placa
          </Button>
        </Grid>
        <Grid>
          <Button
            variant="contained"
            onClick={() => router.push('../Estampagem/Lista-aes')}
            disableElevation>
            Listagem de ae
          </Button>
        </Grid>
        <Grid>
          <Button
            variant="contained"
            onClick={() => router.push('../Estampadores/Cadastrar-solicitante-proprietario')}
            disableElevation>
            Proprietario & Solicitante
          </Button>
        </Grid>
      </Grid> */}
      <CardsDashboard />
    </Sidebar> 
  )
}

