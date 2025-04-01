import React from 'react'
import { TextField, Button, Box } from '@mui/material'

const AirportForm = ({ formData, handleChange, handleSubmit }) => {
  return (
    <Box component="form" onSubmit={handleSubmit}>
      <TextField
        label="Nombre"
        name="name"
        value={formData.name}
        onChange={handleChange}
        fullWidth
        margin="normal"
      />
      <TextField
        label="Ubicación"
        name="location"
        value={formData.location}
        onChange={handleChange}
        fullWidth
        margin="normal"
      />
      <TextField
        label="Ciudad"
        name="city"
        value={formData.city}
        onChange={handleChange}
        fullWidth
        margin="normal"
      />
      <TextField
        label="País"
        name="country"
        value={formData.country}
        onChange={handleChange}
        fullWidth
        margin="normal"
      />
      <TextField
        label="Código"
        name="code"
        value={formData.code}
        onChange={handleChange}
        fullWidth
        margin="normal"
      />
      <Button type="submit" variant="contained" color="primary">
        Guardar
      </Button>
    </Box>
  )
}

export default AirportForm
