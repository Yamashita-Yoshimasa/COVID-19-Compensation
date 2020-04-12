import React, { FC } from 'react';
import { SubsidyList } from 'components/SubsidyList/SubsidyData';

interface SubsidyProps {
  image: string;
  job: string;
  subsidylist: SubsidyList[];
}

const Subsidy: FC<SubsidyProps> = ({ image, job, subsidylist }) => (
  <div className="l-subsidy">
    <div className="p-subsidy">
      <div className="p-subsidy__jobBox">
        <div
          className="p-subsidy__jobImage"
          style={{ backgroundImage: `url(${image})` }}
        />
        <p className="p-subsidy__jobName">{job}</p>
      </div>
      <div className="p-subsidy__box">
        <p className="p-subsidy__title">{`${job}向け助成金一覧`}</p>
        <ul className="p-subsidy__list">
          {subsidylist.map(item => (
            <li className="p-subsidy__item" key={item.id}>
              {item.name}
            </li>
          ))}
        </ul>
      </div>
    </div>
  </div>
);

export default Subsidy;
