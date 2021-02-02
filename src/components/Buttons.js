import React from 'react'
import { Button, ButtonGroup, Checkbox } from '@material-ui/core';
import { Icons, Save, Delete } from '@material-ui/icons';

const Buttons = () => {
  return (
    <div>
      <ButtonGroup> {/*Links buttons together*/}
        {/* startIcon adds Icons at the start */}
        {/* endIcon adds Icons at the end */}
        <Button 
          startIcon={<Save />}  
          size='small'
          variant='contained' 
          color='primary' 
          background='blue' >
          Hello World
        </Button>
        <Button 
          startIcon={<Save />}
          endIcon={<Delete />}  
          size='large'
          variant='contained' 
          color='secondary' 
          background='blue' >
          Hello World
        </Button>
      </ButtonGroup>
      <Button 
        size='large'
        disabled
        variant='contained' 
        color='secondary' 
        background='blue' >
        Hello World
      </Button>
      <Button 
        size='large'
        style={{
          fontSize: '32px'
        }}
        variant='contained' 
        color='secondary' 
        background='blue' >
        Hello World
      </Button>
    </div>
  )
}

export default Buttons
