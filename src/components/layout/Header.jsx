import React from 'react'
import { AppBar, Toolbar, Typography } from '@mui/material'

const Header = () => {
  return (
    <AppBar position="fixed" sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}>
      <Toolbar>
        <Typography variant="h6" noWrap component="div">
          Airport System
        </Typography>
      </Toolbar>
    </AppBar>
  )
}

export default Header
