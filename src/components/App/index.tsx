import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Home from '../Home';

export const App = () => {
  return (
    <BrowserRouter>
      <Route path='/' component={Home}/>
    </BrowserRouter>
  );
};