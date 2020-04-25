import React from 'react';
import { HashRouter } from 'react-router-dom';

import { Routes } from './routes';

export function App() {
  return (
    <>
      <div>deploy test</div>
      <HashRouter basename='/'>
        <Routes />
      </HashRouter>
    </>
  );
}
