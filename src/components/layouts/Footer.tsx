import React, { FC } from 'react';
import { Link } from 'react-router-dom';

const Footer: FC<{}> = () => (
  <section className="l-footer">
    <div className="p-footer -view">
      <p className="p-footer__title -view">
        {' '}
        <Link to="/" className="p-footer__link -view">
          COVID-19 Compensation
        </Link>
      </p>
      <div className="p-footer__contents">
        <p className="p-footer__privacy">
          <Link className="p-footer__privacyLink -view" to="/privacy">
            Privacy Policy
          </Link>
        </p>
        <div className="p-footer__fonts">
          <a href="https://twitter.com/Tapi_tapirus">
            <i className="fab fa-twitter-square p-footer__twitter" />
          </a>
          <p className="p-skill__text -view" />
        </div>
      </div>
      <p className="p-footer__copy -view">
        <small>©︎ 2020 covid-19.yamabaku.work</small>
      </p>
    </div>
  </section>
);

export default Footer;
