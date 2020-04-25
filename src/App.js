import React from 'react';
import { HashRouter } from 'react-router-dom';

import { Routes } from './routes';

export function App() {
  return (
    <HashRouter basename='/'>
      <Routes />
    </HashRouter>
  );
}
