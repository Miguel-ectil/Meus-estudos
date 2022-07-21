import React from "react";
import Card from '@mui/material/Card';
import Box from '@mui/material/Box';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import IconButton from '@mui/material/IconButton';
import FormControl from '@mui/material/FormControl';
import InputAdornment from '@mui/material/InputAdornment';
import Input from '@mui/material/Input';
import InputLabel from '@mui/material/InputLabel';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import AccountCircle from '@mui/icons-material/AccountCircle';
import './login.css';

export default function Login() {
  return (
    <div className="card">
      <h2 className="logo" gutterBottom>Logo dvr</h2>
      <FormControl sx={{ m: 1, width: '46ch' }} variant="standard">
        <InputLabel htmlFor="standard-adornment-password">Password</InputLabel>
        <Input
          id="standard-adornment-password"
          endAdornment={
            <InputAdornment position="end">
              <IconButton>
              </IconButton>
            </InputAdornment>
          }
        />
      </FormControl>
    </div>
  );
}
