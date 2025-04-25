import React from 'react'
import { BrowserRouter } from 'react-router-dom';
import AppRouting from './appRouting';

function App() {
  return (
    <BrowserRouter>
      <AppRouting />
    </BrowserRouter>
  )
}

export default App