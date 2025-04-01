import React, { useEffect, useState } from 'react'
import axios from 'axios'
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Button
} from '@mui/material'
import { Link } from 'react-router-dom'

const AirportList = () => {
  const [airports, setAirports] = useState([])

  useEffect(() => {
    axios
      .get('http://localhost:8080/airports')
      .then((response) => setAirports(response.data))
      .catch((error) => console.error('Error cargando aeropuertos:', error))
  }, [])

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
