import React from 'react'
import { Typography, Box } from '@mui/material'
import TicketList from '../components/tickets/TicketList'

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