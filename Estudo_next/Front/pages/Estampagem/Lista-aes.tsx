import React from 'react'
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
  TablePagination,
  TableRow,
  Grid,
  Button
} from '@mui/material';
import { 
  Radio,
  RadioGroup,
  FormControlLabel,
  FormControl,
  FormLabel 
} from '@mui/material';
import { useRouter } from 'next/router'

import SearchIcon from '@mui/icons-material/Search';

import Navbar from '../../src/components/navbar'
import styles from '../../styles/Cards.module.css'

interface Column {
  id: 'name' | 'code' | 'population' | 'size' | 'density';
  label: string;
  minWidth?: number;
  align?: 'right';
  format?: (value: number) => string;
}

const columns: readonly Column[] = [
  { id: 'name', label: 'Autorização', minWidth: 170 },
  { id: 'code', label: 'Placa\u00a0', minWidth: 100 },
  {
    id: 'population',
    label: 'Data',
    minWidth: 170,
    align: 'right',
    format: (value: number) => value.toLocaleString('en-US'),
  },
  {
    id: 'size',
    label: 'Tipo', //\u00a0(km\u00b2)
    minWidth: 170,
    align: 'right',
    format: (value: number) => value.toLocaleString('en-US'),
  },
  {
    id: 'density',
    label: 'Anexos',
    minWidth: 170,
    align: 'right',
    format: (value: number) => value.toFixed(2),
  },
  {
    id: 'density',
    label: 'Situação',
    minWidth: 170,
    align: 'right',
    format: (value: number) => value.toFixed(2),
  },
];

interface Data {
  name: string;
  code: string;
  population: number;
  size: number;
  density: number;
}

function createData(
  name: string,
  code: string,
  population: number,
  size: number,
): Data {
  const density = population / size;
  return { name, code, population, size, density };
}

const rows = [
  createData('India', 'IN', 1324171354, 3287263),
  createData('China', 'CN', 1403500365, 9596961),
  createData('Italy', 'IT', 60483973, 301340),
  createData('United States', 'US', 327167434, 9833520),
  createData('Canada', 'CA', 37602103, 9984670),
  createData('Australia', 'AU', 25475400, 7692024),
  createData('Germany', 'DE', 83019200, 357578),
  createData('Ireland', 'IE', 4857000, 70273),
  createData('Mexico', 'MX', 126577691, 1972550),
  createData('Japan', 'JP', 126317000, 377973),
  createData('France', 'FR', 67022000, 640679),
  createData('United Kingdom', 'GB', 67545757, 242495),
  createData('Russia', 'RU', 146793744, 17098246),
  createData('Nigeria', 'NG', 200962417, 923768),
  createData('Brazil', 'BR', 210147125, 8515767),
];

export default function ListarAes() {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const handleChangePage = (event: unknown, newPage: number) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement>) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };
  const router = useRouter()
  return (
    <>
     
      <Container>
        <Card 
          sx={{
            my: 3, 
          }}
          className={styles.card}
        >
          <FormControl>
            <FormLabel id="demo-radio-buttons-group-label">Gender</FormLabel>
            <RadioGroup
              aria-labelledby="demo-radio-buttons-group-label"
              defaultValue="female"
              name="radio-buttons-group"
            >
              <FormControlLabel value="female" control={<Radio />} label="Female" />
              <FormControlLabel value="male" control={<Radio />} label="Male" />
              <FormControlLabel value="other" control={<Radio />} label="Other" />
            </RadioGroup>
          </FormControl>
          
          <Grid className={styles.wrapper}>
            <Grid> 
              <Button 
                type="button" 
                sx={{ 
                  p: '6px', 
                  color:'white' 
                }} 
                aria-label="search"
                variant="contained"
                onClick={() => router.push('../Estampadores/Confirmar-recebimento-caixa')}
                disableElevation>
                  <SearchIcon />
                Pesquisar
              </Button>
            </Grid>
            <Grid>
              <Button
                variant="contained"
                onClick={() => router.push('../Estampadores/Confirmar-recebimento-caixa')}
                disableElevation>
                Aes pendentes
              </Button>
            </Grid>
            <Grid>
              <Button
                variant="contained"
                onClick={() => router.push('../Estampadores/Confirmar-recebimento-caixa')}
                disableElevation>
                Cadastrar Aes
              </Button>
            </Grid>
          </Grid>
        </Card>
        
        <Paper sx={{ width: '100%', overflow: 'hidden' }} className={styles.card1}>
         <TableContainer sx={{ maxHeight: 480 }}>
          <Table stickyHeader aria-label="sticky table">
            <TableHead>
              <TableRow>
                {columns.map((column) => (
                  <TableCell
                    key={column.id}
                    align={column.align}
                    style={{ minWidth: column.minWidth }}
                  >
                    {column.label}
                  </TableCell>
                ))}
              </TableRow>
            </TableHead>
            <TableBody>
              {rows
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((row) => {
                  return (
                    <TableRow hover role="checkbox" tabIndex={-1} key={row.code}>
                      {columns.map((column) => {
                        const value = row[column.id];
                        return (
                          <TableCell key={column.id} align={column.align}>
                            {column.format && typeof value === 'number'
                              ? column.format(value)
                              : value}
                          </TableCell>
                        );
                      })}
                    </TableRow>
                  );
                })}
            </TableBody>
          </Table>
        </TableContainer>
        
        <TablePagination
          rowsPerPageOptions={[10, 25, 100]}
          component="div"
          count={rows.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </Paper>
      </Container>
    </>
  )
}