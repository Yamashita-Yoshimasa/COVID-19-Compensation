import EmployeeImage from 'images/Employee.png';
import FreelanceImage from 'images/Freelance.png';
import EmployerImage from 'images/Employer.png';

export interface SubsidyList {
  id: number;
  name: string;
}

export interface Subsidies {
  [code: string]: {
    image: string;
    job: string;
    subsidylist: SubsidyList[];
  };
}

export const SubsidyData: Subsidies = {
  Employee: {
    image: EmployeeImage,
    job: '会社員',
    subsidylist: [
      {
        id: 1,
        name: '',
      },
    ],
  },
  Freelance: {
    image: FreelanceImage,
    job: '個人事業主',
    subsidylist: [
      {
        id: 1,
        name: '',
      },
    ],
  },
  Employer: {
    image: EmployerImage,
    job: '雇用主',
    subsidylist: [
      {
        id: 1,
        name: '雇用調整助成金',
      },
      {
        id: 2,
        name: '小学校休業等対応助成金',
      },
      {
        id: 3,
        name: '働き方改革推進支援助成金',
      },
    ],
  },
};
