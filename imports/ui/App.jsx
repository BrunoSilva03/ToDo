import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import RoutesApp from './routes';


export const App = () => {
  return(

    <div>
    <h1>Tela de Login!</h1>
    <BrowserRouter >
      <RoutesApp />
    </BrowserRouter>


  </div>
    )
  };
