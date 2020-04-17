import React, { FC } from 'react';
import { Message } from 'semantic-ui-react';

const Privacy: FC<{}> = () => (
  <div className="l-privacy">
    <div className="p-privacy">
      <Message>
        <div className="p-privacy__textBox">
          <Message.Header>Privacy Policy</Message.Header>
          本Privacy{' '}
          Policyは、https://covid-19.yamabaku.work（以下、「当サイト」とします。)の各種サービス（当サイトによる情報提供等）において、当サイトの訪問者の個人情報もしくはそれに準ずる情報を取り扱う際に、当サイトが遵守する方針を示したものです。
          <Message.Header> 基本方針</Message.Header>
          当サイトは、個人情報の重要性を認識し、個人情報を保護することが社会的責務であると考え、個人情報に関する法令を遵守します。
          <Message.Header>免責事項</Message.Header>
          当サイトで掲載している画像の著作権・肖像権等は各権利所有者に帰属致します。権利を侵害する目的ではございません。掲載内容や掲載画像等に問題がございましたら、各権利所有者様本人が直接DMでご連絡下さい。確認後、対応させて頂きます。
          <br />
          当サイトからリンクやバナーなどによって他のサイトに移動された場合、移動先サイトで提供される情報、サービス等について一切の責任を負いません。
          <br />
          当サイトのコンテンツ・情報につきまして、可能な限り正確な情報を掲載するよう努めておりますが、誤情報が入り込んだり、情報が古くなっていることもございます。
          <br />
          当サイトに掲載された内容によって生じた損害等の一切の責任を負いかねますのでご了承ください。
        </div>
      </Message>
    </div>
  </div>
);

export default Privacy;
