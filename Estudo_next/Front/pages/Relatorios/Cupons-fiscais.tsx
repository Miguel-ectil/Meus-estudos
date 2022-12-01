import { Grid, Card, Typography, Divider, TextField, TableContainer, Table, TableHead, TableCell, Button} from '@mui/material'
import TableRow from '@mui/material/TableRow';
import TableBody from '@mui/material/TableBody';
import { Container } from '@mui/system'
import React from 'react'
import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker';
import styles from '../../styles/RelatoriosStyles/CuponsFiscais.module.css'
import dayjs, { Dayjs } from 'dayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DataGrid, GridColDef, GridValueGetterParams } from '@mui/x-data-grid';

const columns: GridColDef[] = [
    { field: 'id', headerName: 'ID', width: 70 },
    { field: 'firstName', headerName: 'First name', width: 130 },
    { field: 'lastName', headerName: 'Last name', width: 130 },
    {
      field: 'age',
      headerName: 'Age',
      type: 'number',
      width: 90,
    },
    {
      field: 'fullName',
      headerName: 'Full name',
      description: 'This column has a value getter and is not sortable.',
      sortable: false,
      width: 160,
      valueGetter: (params: GridValueGetterParams) =>
        `${params.row.firstName || ''} ${params.row.lastName || ''}`,
    },
  ];
  
  const rows = [
    { id: 1, No_NF: 'Snow', CPFeCNPJ: 'Jon', NomeCliente: 'Nome cliente', Criacao: 'Criação', Status: 'Status' },
    { id: 2, lastName: 'Lannister', firstName: 'Cersei', age: 42 },
    { id: 3, lastName: 'Lannister', firstName: 'Jaime', age: 45 },
    { id: 4, lastName: 'Stark', firstName: 'Arya', age: 16 },
    { id: 5, lastName: 'Targaryen', firstName: 'Daenerys', age: null },
    { id: 6, lastName: 'Melisandre', firstName: null, age: 150 },
    { id: 7, lastName: 'Clifford', firstName: 'Ferrara', age: 44 },
    { id: 8, lastName: 'Frances', firstName: 'Rossini', age: 36 },
    { id: 9, lastName: 'Roxie', firstName: 'Harvey', age: 65 },
  ];

export default function CuponsFiscais() {

    const [value, setValue] = React.useState<Dayjs | null>(
        dayjs('2022-11-22T17:42:54'),
      );
    
      const handleChange = (newValue: Dayjs | null) => {
        setValue(newValue);
      };

    return (
        <Container>
            <Grid sx={{
            my: 0, mx: 38
            }}
            className={styles.title}> Cupons fiscais gerados  
            </Grid>

            <Card sx={{
            my: 2
            }} 
            className={styles.body}>
                <Grid sx={{mr: 64}}>
                    <div className={styles.titleBody1}>
                        <Typography className={styles.text}> Baixar Cupons XML por Periodo </Typography>
                    </div>
                    <Divider/> 

                    <Grid className={styles.column}>
                        <div>
                            <Typography className={styles.text}>Data Inicial</Typography>
                        </div>
                        <div>
                            <LocalizationProvider dateAdapter={AdapterDayjs}>
                                <DesktopDatePicker
                                    inputFormat="DD/MM/YYYY"
                                    value={value}
                                    onChange={handleChange}
                                    renderInput={(params) => <TextField size="small" {...params} />}
                                />
                            </LocalizationProvider>
                        </div>

                        <div>
                            <Typography className={styles.text}>Data Final</Typography>
                        </div>
                        <div>
                            <LocalizationProvider dateAdapter={AdapterDayjs}>
                                <DesktopDatePicker
                                    inputFormat="DD/MM/YYYY"
                                    value={value}
                                    onChange={handleChange}
                                    renderInput={(params) => <TextField size="small" {...params} />}
                                />
                            </LocalizationProvider>
                        </div>
                        <Button variant="contained" size="medium" className={styles.button2} sx={{width: 210, height:30}}>
                        Dowload XMLs em ZIP
                        </Button>
                    </Grid>
                </Grid>
            </Card>
            <Card sx={{
            my: 2
            }} 
            className={styles.body}>
                <Grid>
                    <Typography className={styles.text}> Dados do Cupom fiscal </Typography>
                </Grid>
                <TableContainer sx={{ maxHeight: 500 }}>
                        <Table stickyHeader aria-label="sticky table">
                            <TableHead>
                                <TableRow>
                                    <TableCell>No NF</TableCell>
                                    <TableCell>CPF-CNPJ</TableCell>
                                    <TableCell>Nome cliente</TableCell>
                                    <TableCell>Criação</TableCell>
                                    <TableCell>Status</TableCell>
                                </TableRow>
                            </TableHead>                  
                                        
                            <TableBody>
                                <TableRow>
                           
                                </TableRow>
                            </TableBody>
                        </Table>
                </TableContainer>
                <DataGrid
                rows={rows}
                columns={columns}
                pageSize={5}
                rowsPerPageOptions={[5]}
                checkboxSelection
                sx={{mt: 2}}
                />
            </Card>
        </Container>
    )
}