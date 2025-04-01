import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { CssBaseline, Box } from '@mui/material'
import { ThemeProvider, createTheme } from '@mui/material/styles'
import { ApiProvider } from './context/ApiContext.jsx'
import Header from './components/layout/Header'
import Sidebar from './components/layout/Sidebar'
import Footer from './components/layout/Footer'
import TicketForm from './components/tickets/TicketForm'
import AirportList from "./components/airports/AirportList"
import AirportDetails from "./components/airports/AirportDetails"
import AirportForm from "./components/airports/AirportForm"


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
                <Route path="/tickets/new" element={<TicketForm />} />
                <Route path="/tickets/:id" element={<TicketForm />} />
                <Route path="/airports" element={<AirportList />} />
                <Route path="/airports/new" element={<AirportDetails />} />
                <Route path="/airports/:id" element={<AirportDetails />} />
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
