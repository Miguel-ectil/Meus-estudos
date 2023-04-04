import * as React from 'react';
import {
  Grid, Card, Box, CardActions, InputBase, Divider, Select, SelectChangeEvent , Typography, 
  Input, MenuItem, Button, TextField, 
  Modal, Checkbox, FormControlLabel, Container
} from '@mui/material';


export default function inputs() {
  
  const [age, setAge] = React.useState('');

  const handleChange = (event: SelectChangeEvent) => {
    setAge(event.target.value);
  };

  return (
    <Grid sx={{marginLeft: 32}}>
      <Card 
        sx={{
          padding: '1rem 0.6rem',
          minHeight: '4rem',
          minWidth: '42rem',
          borderRadius: '16px',
          borderLeft: '5px solid #6c757d',
          borderRight: '5px solid #6c757d',
          boxShadow: '7px 7px 13px 0px rgba(50, 50, 50, 0.22)'
        }}
      >
        <Box
          component="form"
          sx={{
            '& > :not(style)': { m: 2, minWidth: '25ch' },
          }}
          noValidate
          autoComplete="off"
        >
          <TextField id="outlined-basic" label="Outlined" variant="outlined" />
          <TextField id="filled-basic" label="Filled" variant="filled" />
          <TextField id="standard-basic" label="Standard" variant="standard" />
          <TextField
            id="outlined-number"
            variant="standard"
            label="Number"
            type="number"
            InputLabelProps={{
              shrink: true,
            }}
          />
          < Select
            labelId="demo-simple-select-standard-label"
            id="demo-simple-select-standard"
            value={age}
            onChange={handleChange}
            label="Age"
          />
        </Box>
      </Card>
    </Grid>
  )
}