import React, { FC } from 'react';
import { Redirect, Route, Switch } from 'react-router';
import Introduction from 'components/Home/Introduction';
import Subsidy from 'components/SubsidyList/Subsidy';

const App: FC<{}> = () => (
  <Switch>
    <Route exact path="/" component={Introduction} />
    <Route exact path="/Employees" component={Subsidy} />
    <Redirect to="/" />;
  </Switch>
);
export default App;
