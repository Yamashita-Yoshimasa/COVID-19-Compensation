import React, { FC } from 'react';

const Footer: FC<{}> = () => (
  <section className="l-footer">
    <div className="p-footer">
      <p className="p-footer__title">COVID-19 Compensation</p>
      <div className="p-footer__fonts">
        <a href="https://twitter.com/Tapi_tapirus">
          <i className="fab fa-twitter-square p-footer__twitter"></i>
        </a>
        <p className="p-skill__text"></p>
      </div>
      <p className="p-footer__copy">
        <small>©︎ 2019 COVID-19.yamabaku.work</small>
      </p>
    </div>
  </section>
);

export default Footer;
