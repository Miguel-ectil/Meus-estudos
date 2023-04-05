 import React from 'react';
import logo from './logo.svg';
import { Counter } from './features/counter/Counter';
import './App.css';
import { Box, Typography } from '@mui/material';
import { ThemeProvider } from '@mui/system';
import { Header } from './components/Header';
import Layout from './components/Layout';
import { appTheme } from './config/theme';
import { Routes, Route } from 'react-router-dom';
import { CategoryList } from './features/categories/ListCategory';
import { CategoryCreate } from './features/categories/CreateCategory';
import { CategoryEdit } from './features/categories/EditCategory';


function App() {
  return (
    <ThemeProvider theme={appTheme}>
      <Box
        component="main"
        sx={{
          height: "100vh",
          backgroundColor: (theme) => theme.palette.grey[900]
        }}
      >
        <Header />
        <Layout>
          {/* <Typography variant="h2"component="h2">Ola Miguel</Typography> */}
          <Routes>
            <Route path="/" element={<CategoryList />} />
            <Route path="/categories" element={<CategoryList />} />
            <Route path="/categories/create" element={<CategoryCreate />} />
            <Route path="/categories/edit/:id" element={<CategoryEdit />} />

            <Route 
              path="*" 
              element={
                <Box sx={{color: "white" }}>
                  <Typography variant="h1">404</Typography>
                  <Typography variant="h2">Page not Found</Typography>
                </Box>
              } 
            />

          </Routes>
        </Layout>
        
      </Box>
    </ThemeProvider>
  );
}

export default App;
