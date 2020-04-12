import React, { FC } from 'react';
// import { SubsidyList } from 'components/SubsidyList/SubsidyList';

interface SubsidyProps {
  image: string;
  job: string;
  // subsidylist: SubsidyList[];
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
