import React from 'react';
import './App.css';

import Checkboxes from './components/Checkboxes';
import Buttons from './components/Buttons';
import TextFields from './components/TextFields';

function App() {
  return (
    <div className="App">
      <Checkboxes />
      <Buttons />
      <TextFields />
    </div>
  );
}

export default App;
