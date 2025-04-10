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
import { useAirport } from '../../hooks/useAirport'

const AirportList = () => {
  const { airports, loading, error } = useAirport()

  if (loading) return <CircularProgress />
  if (error) return <p>Error cargando aeropuertos: {error.message}</p>

  return (
    <div>
      <Button
        variant="contained"
        component={Link}
        to="/airports/new"
        style={{ marginBottom: '1rem' }}
      >
        Crear Aeropuerto
      </Button>

      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Nombre</TableCell>
              <TableCell>Ciudad</TableCell>
              <TableCell>País</TableCell>
              <TableCell>Código</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {airports.map((airport) => (
              <TableRow key={airport.id}>
                <TableCell>{airport.name}</TableCell>
                <TableCell>{airport.city}</TableCell>
                <TableCell>{airport.country}</TableCell>
                <TableCell>{airport.code}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  )
}

export default AirportList
