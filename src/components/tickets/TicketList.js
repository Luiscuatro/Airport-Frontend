import React from 'react'
import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  CircularProgress,
  IconButton,
  Typography,
  Box
} from '@mui/material'
import DeleteIcon from '@mui/icons-material/Delete'
import { useTickets } from '../../hooks/useTickets'

const TicketList = () => {
  const { tickets, loading, deleteTicket } = useTickets()

  const handleDelete = async (id) => {
    const confirm = window.confirm('Are you sure you want to delete this ticket?')
    if (confirm) {
      await deleteTicket(id)
    }
  }

  return (
    <Paper sx={{ p: 2 }}>
      <Typography variant="h5" gutterBottom>
        Tickets List
      </Typography>

      {loading ? (
        <Box display="flex" justifyContent="center" alignItems="center" sx={{ mt: 4 }}>
          <CircularProgress />
        </Box>
      ) : (
        <TableContainer>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>ID</TableCell>
                <TableCell>Passenger</TableCell>
                <TableCell>Flight</TableCell>
                <TableCell>Price</TableCell>
                <TableCell align="right">Actions</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {tickets.length === 0 ? (
                <TableRow>
                  <TableCell colSpan={5} align="center">
                    No tickets found
                  </TableCell>
                </TableRow>
              ) : (
                tickets.map((ticket) => (
                  <TableRow key={ticket.id}>
                    <TableCell>{ticket.id}</TableCell>
                    <TableCell>{ticket.passenger?.name || '—'}</TableCell>
                    <TableCell>{ticket.flightNumber || ticket.plane?.model || '—'}</TableCell>
                    <TableCell>${ticket.price}</TableCell>
                    <TableCell align="right">
                      <IconButton onClick={() => handleDelete(ticket.id)} size="small">
                        <DeleteIcon />
                      </IconButton>
                    </TableCell>
                  </TableRow>
                ))
              )}
            </TableBody>
          </Table>
        </TableContainer>
      )}
    </Paper>
  )
}

export default TicketList
