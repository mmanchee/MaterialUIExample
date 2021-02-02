import React from 'react';
import './App.css';
import { Container } from '@material-ui/core';
import { ThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import { orange, green } from '@material-ui/core/colors';

import Checkboxes from './components/Checkboxes';
import Buttons from './components/Buttons';
import TextFields from './components/TextFields';
import Typographies from "./components/Typographies";
import Grids from './components/Grids';

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
      {/* sm = small, md = medium, lg = large, xd = mobile */}
      <Container maxWidth='xd'>
        <div className="App">
          <Typographies />
          <Checkboxes />
          <Buttons />
          <TextFields />
          <Grids />
        </div>
      </Container>
    </ThemeProvider>
  );
}

export default App;
