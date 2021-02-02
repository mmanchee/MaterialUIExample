import React from 'react';
import './App.css';
import { ThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import { orange, green } from '@material-ui/core/colors';

import Checkboxes from './components/Checkboxes';
import Buttons from './components/Buttons';
import TextFields from './components/TextFields';
import Typographies from "./components/Typographies";

const theme = createMuiTheme({
  typography: {
    h2: {
      fontSize: 32,
      marginBottom: 15,
    }
  },
  palette: {
    primary: {
      main: orange[400]
    },
    secondary: {
      main: green[400]
    }
  }
})

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <Typographies />
        <Checkboxes />
        <Buttons />
        <TextFields />
      </div>
    </ThemeProvider>
  );
}

export default App;
