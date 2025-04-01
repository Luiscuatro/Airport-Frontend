import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { Paper, TextField, Button, Grid, Typography, Box, CircularProgress } from '@mui/material'
import { useTickets } from '../../hooks/useTickets'

const TicketForm = () => {
  const { id } = useParams()
  const navigate = useNavigate()
  const isEditMode = Boolean(id)

  const {
    getTicketById,
    createTicket,
    updateTicket,
    loading
  } = useTickets()

  const [formData, setFormData] = useState({
    passengerId: '',
    planeId: '',
    airportId: '',
    seatNumber: '',
    date: ''
  })

  const [errors, setErrors] = useState({})

  useEffect(() => {
    if (isEditMode) {
      getTicketById(id).then((ticket) => {
        if (ticket) {
          setFormData({
            passengerId: ticket.passengerId || '',
            planeId: ticket.planeId || '',
            airportId: ticket.airportId || '',
            seatNumber: ticket.seatNumber || '',
            date: ticket.date || ''
          })
        }
      })
    }
  }, [id, isEditMode, getTicketById])

  const validateForm = () => {
    const newErrors = {}
    if (!formData.passengerId) newErrors.passengerId = 'Requerido'
    if (!formData.planeId) newErrors.planeId = 'Requerido'
    if (!formData.airportId) newErrors.airportId = 'Requerido'
    if (!formData.seatNumber) newErrors.seatNumber = 'Requerido'
    if (!formData.date) newErrors.date = 'Requerido'
    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!validateForm()) return

    const success = isEditMode
      ? await updateTicket(id, formData)
      : await createTicket(formData)

    if (success) navigate('/tickets')
  }

  return (
    <Paper sx={{ p: 3 }}>
      <Typography variant="h5" gutterBottom>
        {isEditMode ? 'Editar Ticket' : 'Crear Nuevo Ticket'}
      </Typography>

      <form onSubmit={handleSubmit}>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              label="Passenger ID"
              name="passengerId"
              value={formData.passengerId}
              onChange={handleChange}
              error={!!errors.passengerId}
              helperText={errors.passengerId}
            />
          </Grid>

          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              label="Plane ID"
              name="planeId"
              value={formData.planeId}
              onChange={handleChange}
              error={!!errors.planeId}
              helperText={errors.planeId}
            />
          </Grid>

          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              label="Airport ID"
              name="airportId"
              value={formData.airportId}
              onChange={handleChange}
              error={!!errors.airportId}
              helperText={errors.airportId}
            />
          </Grid>

          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              label="Seat Number"
              name="seatNumber"
              value={formData.seatNumber}
              onChange={handleChange}
              error={!!errors.seatNumber}
              helperText={errors.seatNumber}
            />
          </Grid>

          <Grid item xs={12}>
            <TextField
              fullWidth
              label="Date"
              type="date"
              name="date"
              value={formData.date}
              onChange={handleChange}
              InputLabelProps={{ shrink: true }}
              error={!!errors.date}
              helperText={errors.date}
            />
          </Grid>

          <Grid item xs={12}>
            <Box sx={{ display: 'flex', justifyContent: 'flex-end', gap: 2 }}>
              <Button
                variant="outlined"
                onClick={() => navigate('/tickets')}
              >
                Cancelar
              </Button>
              <Button
                type="submit"
                variant="contained"
                color="primary"
                disabled={loading}
              >
                {loading
                  ? <CircularProgress size={24} />
                  : isEditMode ? 'Actualizar' : 'Crear'}
              </Button>
            </Box>
          </Grid>
        </Grid>
      </form>
    </Paper>
  )
}

export default TicketForm
