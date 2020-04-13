import React, { FC } from 'react';
import { Redirect, Route, Switch } from 'react-router';
import Introduction from 'components/Home/Introduction';
import Subsidy from 'components/SubsidyList/Subsidy';
import ScrollToTop from 'containers/ScrollToTop';

const App: FC<{}> = () => (
  <>
    <Switch>
      <Route exact path="/" component={Introduction} />
      <Route exact path="/subsidy/:code" component={Subsidy} />
      <Redirect to="/" />;
    </Switch>
    <ScrollToTop />
  </>
);
export default App;
