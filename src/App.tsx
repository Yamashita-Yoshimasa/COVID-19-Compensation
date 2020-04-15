import React, { FC } from 'react';
import { Redirect, Route, Switch } from 'react-router';
import Introduction from 'components/Home/Introduction';
import Subsidy from 'components/SubsidyList/Subsidy';
import ScrollToTop from 'containers/ScrollToTop';
import Privacy from 'components/layouts/FooterContents/Privacy';

const App: FC<{}> = () => (
  <>
    <Switch>
      <Route exact path="/" component={Introduction} />
      <Route exact path="/subsidy/:code" component={Subsidy} />
      <Route exact path="/privacy" component={Privacy} />
      <Redirect to="/" />;
    </Switch>
    <ScrollToTop />
  </>
);
export default App;
