import React from 'react'
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Button,
  CircularProgress
} from '@mui/material'
import { Link } from 'react-router-dom'
import { usePassengers } from '../../hooks/usePassengers'

const PassengerList = () => {
  const { passengers, loading, error } = usePassengers()

  if (loading) return <CircularProgress />
  if (error) return <p>Error cargando pasajeros: {error.message}</p>

  return (
    <div>
      <Button
        variant="contained"
        component={Link}
        to="/passengers/new"
        style={{ marginBottom: '1rem' }}
      >
        Crear Pasajero
      </Button>

      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Nombre</TableCell>
              <TableCell>Apellido</TableCell>
              <TableCell>Email</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {passengers.map((passenger) => (
              <TableRow key={passenger.id}>
                <TableCell>{passenger.firstName}</TableCell>
                <TableCell>{passenger.lastName}</TableCell>
                <TableCell>{passenger.email}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  )
}

export default PassengerList
