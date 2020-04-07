import React, { FC } from 'react';
import { Redirect, Route, Switch } from 'react-router';
import Introduction from './components/Introduction';

const App: FC<{}> = () => (
  <Switch>
    <Route path="/" component={Introduction} />
    <Redirect to="/" />;
  </Switch>
);
export default App;
