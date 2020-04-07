import React, { FC } from 'react';
import { Message, Card, Image } from 'semantic-ui-react';
import Employee from './images/Employee.png';
import Freelance from './images/Freelance.png';
import Employer from './images/Employer.png';

const Introduction: FC<{}> = () => {
  const YourJob: string[] = ['Employees', 'Freelances', 'Employers'];
  const JobImages: string[] = [Employee, Freelance, Employer];
  const JobDescription: string[] = [
    '会社員の方はこちら',
    '個人事業主の方はこちら',
    '雇用主の方はこちら',
  ];

  interface Container {
    image: string[];
    name: string[];
    description: string[];
  }

  const JobContainer: Container = {
    image: JobImages,
    name: YourJob,
    description: JobDescription,
  };

  return (
    <div className="l-intro">
      <div className="p-intro">
        <Message>
          <Message.Header>
            新型コロナウイルスの補償を確認しよう！
          </Message.Header>
          <p className="p-intro__text">
            現在、国は新型コロナウイルスによる損害への補償をいくつか発表しています。
            <br />
            その補償対象に当てはまる会社や個人は国に申請をする事で補償を受ける事ができます。
            <br />
            ここでは,その補償の対象を確認できます。
            <br />
            以下の選択肢からあなたに当てはまるものを選択して下さい。
          </p>
        </Message>
        <div className="p-intro__cardBox">
          {JobContainer.image.map((image, i: number = -1) => (
            <Card key={i} className="p-intro__card">
              <Image src={image} wrapped ui={false} />
              <Card.Content>
                <Card.Header>{JobContainer.name[i++]}</Card.Header>
                <Card.Description>
                  {JobContainer.description[i - 1]}
                </Card.Description>
              </Card.Content>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Introduction;
