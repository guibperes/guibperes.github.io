import React from 'react';
import { Switch, Route } from 'react-router-dom';

import { Home, Post, NotFound } from './pages';

export function Routes() {
  return (
    <Switch>
      <Route path='/' exact component={Home} />
      <Route path='/:postId/:postName' component={Post} />
      <Route path='/:postId/:postName' component={NotFound} />
    </Switch>
  );
}
