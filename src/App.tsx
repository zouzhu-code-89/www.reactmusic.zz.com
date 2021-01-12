import React from 'react';
import './App.css';
import LoginPageComponent from './views/Login'
import MusicRouter from './router/router';

const App: React.FC = () => {
  return(
    <>
      <MusicRouter />
    </>
  )
}

export default App;