import React, { ReactElement } from 'react'
import { Box } from '@mui/material'
import {  Container } from '@mui/system'

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <Box>
      <Container maxWidth="lg" sx={{ mt: 4, mb: 2, bg: "white" }}>
        {children}
      </Container>
    </Box>
  )
}
