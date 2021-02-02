import React from 'react'
import { Button, ButtonGroup, Checkbox, makeStyles } from '@material-ui/core';
import { Icons, Save, Delete } from '@material-ui/icons';

const useStyles = makeStyles({
  root: {
    background: 'linear-gradient(45deg, #333, #999)',
    border: 0,
    margin: 15,
    borderRadius: 15,
    color: 'green',
    padding: '0 30px'
  }
})

function ButtonStyled() {
  const classes = useStyles();
  return <Button className={classes.root} >Test Styled Button</Button>
}

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
      <br />
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
      <br />
      <ButtonStyled />
    </div>
  )
}

export default Buttons
