import './App.css';
import { Button } from '@material-ui/core';

function App() {
  return (
    <div className="App">
      <Button 
        size='small'
        variant='contained' 
        color='secondary' 
        background='blue' >
        Hello World
      </Button>
      <Button 
        size='large'
        variant='contained' 
        color='secondary' 
        background='blue' >
        Hello World
      </Button>
      <Button 
        size='large'
        disabled
        variant='contained' 
        color='secondary' 
        background='blue' >
        Hello World
      </Button>
    </div>
    
  );
}

export default App;
