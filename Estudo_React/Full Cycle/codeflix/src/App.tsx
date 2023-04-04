 import React from 'react';
import logo from './logo.svg';
import { Counter } from './features/counter/Counter';
import './App.css';
import { Button, Box } from '@mui/material';
import { ThemeProvider } from '@mui/system';
import { Header } from './components/Header';
import Layout from './components/Layout';

function App() {
  return (
    <ThemeProvider theme={}>
      <Box
      component="main"
      sx={{
        height: "100vh",
        backgroundColor: "#000",
      }}
      >
        <Header />
        <Layout>
         <h1>Ola Miguel</h1>
        </Layout>
      </Box>
    </ThemeProvider>
  );
}

export default App;
