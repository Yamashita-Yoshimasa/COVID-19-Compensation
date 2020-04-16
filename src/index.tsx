import React from 'react';
import ReactDOM from 'react-dom';
import { Helmet } from 'react-helmet';
import { BrowserRouter } from 'react-router-dom';
import * as serviceWorker from 'serviceWorker';
import 'semantic-ui-css/semantic.min.css';
import App from 'App';
import Header from 'components/layouts/Header';
import Footer from 'components/layouts/Footer';

ReactDOM.render(
  <BrowserRouter>
    <Helmet>
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content="@Tapi_tapirus" />
      <meta property="og:url" content="https://covid-19.yamabaku.work/" />
      <meta property="og:title" content="COVID-19 Subsidies" />
      <meta
        property="og:description"
        content=" 新型コロナウイルスに対する国の制度を確認！"
      />
      <meta
        property="og:image"
        content="https://storage.googleapis.com/covid-19-compensation.appspot.com/card.png"
      />
    </Helmet>
    <Header />
    <App />
    <Footer />
  </BrowserRouter>,
  document.getElementById('root'),
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
