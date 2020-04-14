import React, { FC } from 'react';

const Footer: FC<{}> = () => (
  <section className="l-footer">
    <div className="p-footer -view">
      <p className="p-footer__title -view">COVID-19 Compensation</p>
      <div className="p-footer__fonts">
        <a href="https://twitter.com/Tapi_tapirus">
          <i className="fab fa-twitter-square p-footer__twitter" />
        </a>
        <p className="p-skill__text -view" />
      </div>
      <p className="p-footer__copy -view">
        <small>
          ©︎ 2019{' '}
          <a
            className="p-footer__smallLink -view"
            href="https://covid-19.yamabaku.work"
          >
            COVID-19.yamabaku.work
          </a>
        </small>
      </p>
    </div>
  </section>
);

export default Footer;
