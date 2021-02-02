import React, { useState } from 'react';
import './App.css';
import { Button, ButtonGroup, Checkbox } from '@material-ui/core';
import { Icons, Save, Delete } from '@material-ui/icons';

function CheckBoxExample() {
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

function App() {
  return (
    <div className="App">
      <CheckBoxExample />
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
    
  );
}

export default App;
