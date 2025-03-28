import React from 'react'
import { Typography, Grid, Card, CardContent, CardActions, Button } from '@mui/material'
import { Link as RouterLink } from 'react-router-dom'
import ConfirmationNumberIcon from '@mui/icons-material/ConfirmationNumber'
import AirplanemodeActiveIcon from '@mui/icons-material/AirplanemodeActive'
import LocationOnIcon from '@mui/icons-material/LocationOn'
import PersonIcon from '@mui/icons-material/Person'

const Home = () => {
  return (
    <>
      <Typography variant="h4" gutterBottom>
        Bienvenido al Airport System ✈️
      </Typography>

      <Typography variant="body1" gutterBottom>
        Explora los módulos disponibles:
      </Typography>

      <Grid container spacing={3} mt={1}>
        <Grid item xs={12} sm={6} md={3}>
          <Card>
            <CardContent>
              <ConfirmationNumberIcon fontSize="large" color="primary" />
              <Typography variant="h6" component="div">
                Tickets
              </Typography>
              <Typography variant="body2">
                Gestión de tickets emitidos
              </Typography>
            </CardContent>
            <CardActions>
              <Button component={RouterLink} to="/tickets" size="small">
                Ver tickets
              </Button>
            </CardActions>
          </Card>
        </Grid>

        <Grid item xs={12} sm={6} md={3}>
          <Card>
            <CardContent>
              <AirplanemodeActiveIcon fontSize="large" color="primary" />
              <Typography variant="h6" component="div">
                Aviones
              </Typography>
              <Typography variant="body2">
                Información sobre la flota
              </Typography>
            </CardContent>
            <CardActions>
              <Button component={RouterLink} to="/planes" size="small">
                Ver aviones
              </Button>
            </CardActions>
          </Card>
        </Grid>

        <Grid item xs={12} sm={6} md={3}>
          <Card>
            <CardContent>
              <LocationOnIcon fontSize="large" color="primary" />
              <Typography variant="h6" component="div">
                Aeropuertos
              </Typography>
              <Typography variant="body2">
                Lista de aeropuertos registrados
              </Typography>
            </CardContent>
            <CardActions>
              <Button component={RouterLink} to="/airports" size="small">
                Ver aeropuertos
              </Button>
            </CardActions>
          </Card>
        </Grid>

        <Grid item xs={12} sm={6} md={3}>
          <Card>
            <CardContent>
              <PersonIcon fontSize="large" color="primary" />
              <Typography variant="h6" component="div">
                Pasajeros
              </Typography>
              <Typography variant="body2">
                Información de los pasajeros
              </Typography>
            </CardContent>
            <CardActions>
              <Button component={RouterLink} to="/passengers" size="small">
                Ver pasajeros
              </Button>
            </CardActions>
          </Card>
        </Grid>
      </Grid>
    </>
  )
}

export default Home
