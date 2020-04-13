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
      <div className="p-subsidy__wrapper">
        <div className="p-subsidy__jobBox">
          <div
            className="p-subsidy__jobImage -view"
            style={{ backgroundImage: `url(${image})` }}
          />
          <p className="p-subsidy__jobName -view">{job}</p>
        </div>
        <p className="p-subsidy__title -view">{`${job}向け助成金一覧`}</p>
      </div>
      <ul className="p-subsidy__list">
        {subsidylist.map(item => (
          <li className="p-subsidy__item -view" key={item.id}>
            {item.name}
          </li>
        ))}
      </ul>
    </div>
  </div>
);

export default Subsidy;
