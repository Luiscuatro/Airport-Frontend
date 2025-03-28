import React from 'react'
import TicketList from '../components/tickets/TicketList'
import { Typography, Box } from '@mui/material'

const Tickets = () => {
  return (
    <Box>
      <Typography variant="h4" gutterBottom>
        Tickets
      </Typography>
      <TicketList />
    </Box>
  )
}

export default Tickets
