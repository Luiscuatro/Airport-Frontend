import React, { useState } from 'react'
import { Container, Typography } from '@mui/material'
import AirportForm from './AirportForm'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

const AirportDetails = () => {
  const [formData, setFormData] = useState({
    name: '',
    location: '',
    city: '',
    country: '',
    code: ''
  })

  const navigate = useNavigate()

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      await axios.post('http://localhost:8080/airports', formData)
      navigate('/airports')
    } catch (error) {
      console.error('Error creando aeropuerto:', error)
    }
  }

  return (
    <Container maxWidth="sm">
      <Typography variant="h4" gutterBottom>
        Crear nuevo aeropuerto
      </Typography>
      <AirportForm
        formData={formData}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
      />
    </Container>
  )
}

export default AirportDetails
