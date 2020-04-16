import React, { FC } from 'react';
import { Link } from 'react-router-dom';
import { Message, Card, Image } from 'semantic-ui-react';
import { JobData } from 'components/Home/JobList';

const Introduction: FC<{}> = () => (
  <div className="l-intro">
    <div className="p-intro">
      <Message>
        <Message.Header>
          新型コロナウイルスに対する国の制度を確認！
        </Message.Header>
        <p className="p-intro__text">
          現在、国は新型コロナウイルスによる損害への補償をいくつか発表しています。
          <br />
          その補償対象に当てはまる会社や個人は国に申請をする事で補償を受ける事ができます。
          <br />
          ここでは,そのあなたが受け取ることができるかもしれない助成金や給付金を確認できます。
          <br />
          以下の選択肢からあなたに当てはまるものを選択して下さい。
        </p>
      </Message>
      <div className="p-intro__cardBox">
        {JobData.job.map(item => (
          <Link
            to={`/subsidy/${item.name}`}
            className="p-intro__link"
            key={item.id}
          >
            <Card className="p-intro__card">
              <Image src={item.image} wrapped ui={false} />
              <Card.Content>
                <Card.Header>{item.name}</Card.Header>
                <Card.Description>{item.description}</Card.Description>
              </Card.Content>
            </Card>
          </Link>
        ))}
      </div>
    </div>
  </div>
);

export default Introduction;
