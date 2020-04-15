import React, { FC } from 'react';
import { RouteComponentProps, withRouter } from 'react-router';
import { Redirect } from 'react-router-dom';

import { SubsidyData } from 'components/SubsidyList/SubsidyData';
import SubsidyLayout from 'components/SubsidyList/SubsidyLayout';

type SubsidyProps = {} & RouteComponentProps<{ code: string }>;

const Subsidy: FC<SubsidyProps> = ({ match, history }) => {
  const codes = Object.keys(SubsidyData);
  const targetCode = match.params.code;

  return codes.includes(targetCode) ? (
    <>
      <SubsidyLayout
        image={SubsidyData[targetCode].image}
        job={SubsidyData[targetCode].job}
        subsidylist={SubsidyData[targetCode].subsidylist}
        subsidyhistory={history}
      />
    </>
  ) : (
    <Redirect to="/" />
  );
};

export default withRouter(Subsidy);
