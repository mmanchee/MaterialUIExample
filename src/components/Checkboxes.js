import React, { useState } from 'react';
import { Button, ButtonGroup, Checkbox, FormControlLabel } from '@material-ui/core';
import { Icons, Save, Delete } from '@material-ui/icons';


const Checkboxes = () => {
  const [ checked, setChecked ] = useState(true)
  return (
    <div>
      <FormControlLabel 
        control={<Checkbox 
          checked={checked}
          icon={<Delete />}
          checkedIcon={<Save />}
          onChange={(e) => setChecked(e.target.checked)}
          color='secondary'
        />}
        label='Testing Checkbox'
      />

        
      <Checkbox 
        checked={checked}
        onChange={(e) => setChecked(e.target.checked)}
        color='primary'
        disabled
      />
      <Checkbox 
        checked={checked}
        onChange={(e) => setChecked(e.target.checked)}
        color='primary'
        inputProps={{
          'aria-label': 'secondary checkbox'
        }}
      />
    </div>
  )
}

export default Checkboxes
