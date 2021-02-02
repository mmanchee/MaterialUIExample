import React from 'react'
import { AppBar, Toolbar, IconButton, Typography, Button } from '@material-ui/core';
import { Menu } from '@material-ui/icons';

const AppBarComp = () => {
  return (
    <div>
      <AppBar color='secondary'>
        <Toolbar>
          <IconButton>
            <Menu />
          </IconButton>
          <Typography variant='h6'>
            MUI Theming
          </Typography>
          <Button color='primary'>
            Login
          </Button>
        </Toolbar>
      </AppBar>
    </div>
  )
}

export default AppBarComp
