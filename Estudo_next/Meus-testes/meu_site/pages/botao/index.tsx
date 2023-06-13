
import {
  Grid, Card, Box, CardActions, InputBase, Divider, Select, FormControl, Typography, 
  Input, MenuItem, Button, TextField, 
  Modal, Checkbox, FormControlLabel, Stack
} from '@mui/material';
import IconButton from '@mui/material/IconButton';
import PhotoCamera from '@mui/icons-material/PhotoCamera';
import DeleteIcon from '@mui/icons-material/Delete';
import SendIcon from '@mui/icons-material/Send';
import AlarmIcon from '@mui/icons-material/Alarm';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';

export default function Botoes() {
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
        <Grid>
          <Grid component="form"
            sx={{
              '& > :not(style)': { m: 2, minWidth: '25ch' },
            }}
            noValidate
            autoComplete="off"
          >
            <Button variant="text">Text</Button>
            <Button variant="contained">Contained</Button>
            <Button variant="outlined">Outlined</Button>
            <Button variant="contained" color="success">
              Success
            </Button>          
            <Button variant="outlined" color="error">
              Error
            </Button>
            <Button variant="contained" color="error">
              Error
            </Button>
          </Grid>
          <Divider sx={{mt: '4rem'}} />
          <Typography >
            <strong>Com Icons</strong>
          </Typography>
          <Divider  />
          <Grid 
            sx={{
              '& > :not(style)': { m: 1, minWidth: '13ch' },
            }}
          >
            <Button variant="contained" component="label">
              Upload
              <input hidden accept="image/*" multiple type="file" />
            </Button>
            <IconButton 
              color="primary" aria-label="upload picture" 
              component="label"
            >
              <input hidden accept="image/*" type="file" />
              <PhotoCamera />
            </IconButton>
            <Button variant="contained" startIcon={<DeleteIcon />}>
              Delete
            </Button>
           
            <Button variant="contained" endIcon={<SendIcon />}>
              Send
            </Button>
            <IconButton aria-label="delete">
              <DeleteIcon />
            </IconButton>
            <IconButton aria-label="delete" disabled color="primary">
              <DeleteIcon />
            </IconButton>
            <IconButton color="secondary" aria-label="add an alarm">
              <AlarmIcon />
            </IconButton>
            <IconButton color="primary" aria-label="add to shopping cart">
              <AddShoppingCartIcon />
            </IconButton>
           
          </Grid>
        </Grid>
      </Card>
    </Grid>
  )
}