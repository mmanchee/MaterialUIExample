import React from 'react'
import { Paper, Grid } from "@material-ui/core";

const Grids = () => {
  return (
    <div>

      <Grid container spacing={2} justify='center' >
        <Grid item xs={3} sm={6} lg={4}>
          <Paper style={{ height: 75, width: '100%', }} />
        </Grid>
        <Grid item xs={3} sm={3} lg={4}>
          <Paper style={{ height: 75, width: '100%', }} />
        </Grid>
        <Grid item xs={3} sm={3} lg={4}>
          <Paper style={{ height: 75, width: '100%', }} />
        </Grid>
      </Grid>
      <Grid container spacing={2} justify='center' >
        <Grid item xs>
          <Paper style={{ height: 75, width: '100%', }} />
        </Grid>
        <Grid item xs>
          <Paper style={{ height: 75, width: '100%', }} />
        </Grid>
        <Grid item xs>
          <Paper style={{ height: 75, width: '100%', }} />
        </Grid>
      </Grid>
    </div>
  )
}

export default Grids
