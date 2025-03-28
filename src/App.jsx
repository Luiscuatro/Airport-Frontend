import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { CssBaseline, Box } from '@mui/material'
import { ThemeProvider, createTheme } from '@mui/material/styles'
import { ApiProvider } from './context/ApiContext.jsx'
import Header from './components/layout/Header'
import Sidebar from './components/layout/Sidebar'
import Footer from './components/layout/Footer'

import Home from './pages/Home'
import Tickets from './pages/Tickets'

const theme = createTheme({
  palette: {
    primary: {
      main: '#1976d2',
    },
    secondary: {
      main: '#dc004e',
    },
  },
})

function App() {
  return (
    <ApiProvider>
      <ThemeProvider theme={theme}>
        <Router>
          <CssBaseline />
          <Box sx={{ display: 'flex' }}>
            <Header />
            <Sidebar />
            <Box
              component="main"
              sx={{
                flexGrow: 1,
                p: 3,
                width: { sm: `calc(100% - 240px)` },
                ml: { sm: '240px' },
                mt: '64px',
              }}
            >
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/tickets" element={<Tickets />} />
              </Routes>
              <Footer />
            </Box>
          </Box>
        </Router>
      </ThemeProvider>
    </ApiProvider>
  )
}

export default App
