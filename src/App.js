import './App.css';
import { Button, ButtonGroup } from '@material-ui/core';
import { Icons, Save } from '@material-ui/icons';

function App() {
  return (
    <div className="App">
      <ButtonGroup>
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
          endIcon={<Save />}
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
