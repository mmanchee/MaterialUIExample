import React, { useState } from 'react';
import { Button, ButtonGroup, Checkbox, FormControlLabel, TextField } from '@material-ui/core';
import { Icons, Save, Delete } from '@material-ui/icons';

const TextFields = () => {
  return (
    <div>
      <TextField 
        variant='filled'
        label='Your Name'
      />
      <br />
      <TextField 
        variant='outlined'
        color='primary'
        type='date'
      />
      <br />
      <TextField 
        type='time'
        label='The Time'
      />
      <br />
      <TextField 
        type='email'
        label='email'
        placeholder='test@test.com'
      />
      <br />
    </div>
  )
}

export default TextFields
