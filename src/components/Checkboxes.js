import React, { useState } from 'react';
import { Button, ButtonGroup, Checkbox } from '@material-ui/core';
import { Icons, Save, Delete } from '@material-ui/icons';


const Checkboxes = () => {
  const [ checked, setChecked ] = useState(true)
  return (
    <div>
      <Checkbox 
        checked={checked}
        onChange={(e) => setChecked(e.target.checked)}
        color='secondary'
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
