import { Card, Grid, Button, Typography, TextField } from '@mui/material'
import { Container } from '@mui/system'
import React from 'react'
import styles from '../../styles/RelatoriosStyles/Estampagem.module.css'
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker';
import dayjs, { Dayjs } from 'dayjs';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';

export default function Estampagem() {

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
            className={styles.title}>
                Relatório de Estampagem
            </Grid>

            <Card sx={{
            my: 2
            }} 
            className={styles.body}>
                <Grid sx={{mr:70}}>
                    <Grid className={styles.column}>
                        <div>
                            <Typography className={styles.text}>Data Inicial</Typography>
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
                                    renderInput={(params) => <TextField size="small" sx={{ width: 200 }} {...params} />}
                                />
                            </LocalizationProvider>
                        </div>

                        <div>
                            <LocalizationProvider dateAdapter={AdapterDayjs}>
                                <DesktopDatePicker
                                    inputFormat="DD/MM/YYYY"
                                    value={value}
                                    onChange={handleChange}
                                    renderInput={(params) => <TextField size="small" sx={{ width: 200 }} {...params} />}
                                />
                            </LocalizationProvider>
                        </div>
                    </Grid>
                    <Grid sx={{pt: 2}}>
                        <Typography className={styles.text}>Formato de Impressão </Typography>
                            <RadioGroup
                                aria-labelledby="demo-radio-buttons-group-label"
                                defaultValue="female"
                                name="radio-buttons-group"
                            >
                                <FormControlLabel value="female" control={<Radio size="small"/>} label="Retrato" />
                                <FormControlLabel value="male" control={<Radio size="small" />}label="Paisagem" sx={{ mt: -1}}/>
                            </RadioGroup>

                        <Typography sx={{pt: 2}} className={styles.text}>Escolha o Tipo de Relatorio </Typography>
                        <RadioGroup
                                aria-labelledby="demo-radio-buttons-group-label"
                                defaultValue="female"
                                name="radio-buttons-group"
                            >
                                <FormControlLabel value="female" control={<Radio size="small"/>} label="Todas as Estampagens"/>
                                <FormControlLabel value="male" control={<Radio size="small" />}label="Por Solicitante/Despachantes" sx={{ mt: -1}}/>
                                <FormControlLabel value="male" control={<Radio size="small" />}label="Por Solicitante individual" sx={{ mt: -1}} />
                                <FormControlLabel value="male" control={<Radio size="small" />}label="Por Tipo de Placa" sx={{ mt: -1}}/>
                                <FormControlLabel value="male" control={<Radio size="small" />}label="Por Tipo de Placa com Dados Solicitante" sx={{ mt: -1}}/>
                            </RadioGroup>
                    </Grid>
                    <Grid className={styles.column} sx={{mt: 2}}>
                        <Button variant="contained" color='success' sx={{width: 110, height:50}}>
                        <img src="/img/file-earmark-excel-fill.svg"/>
                            <Typography sx={{ml: 1, fontSize: 14}}>Excel</Typography>
                        </Button>

                        <Button variant="contained" color="error" sx={{width: 110, height:50}}>
                            <img src="/img/file-earmark-pdf-fill.svg"/>
                            <Typography sx={{ml: 1, fontSize: 14}}>PDF</Typography>
                        </Button>
                    </Grid>
                 </Grid>
            </Card>
        </Container>
    )
}