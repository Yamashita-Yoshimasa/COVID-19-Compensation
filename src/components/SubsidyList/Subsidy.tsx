import React, { FC } from 'react';
// import { SubsidyList } from 'components/SubsidyList/SubsidyData';

interface SubsidyProps {
  image: string;
  job: string;
  // subsidylist: SubsidyData[];
}

const Subsidy: FC<SubsidyProps> = ({ image, job }) => (
  <>
    <div className="l-subsidy">
      <div className="p-subsidy">
        <div className="p-subsidy__jobBox">
          <div
            className="p-subsidy__jobImage"
            style={{ backgroundImage: `url(${image})` }}
          />
          <p className="p-subsidy__jobName">{job}</p>
        </div>
      </div>
    </div>
  </>
);

export default Subsidy;
