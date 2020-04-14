import EmployeeImage from 'images/Employee.png';
import FreelanceImage from 'images/Freelance.png';
import EmployerImage from 'images/Employer.png';

export interface SubsidyList {
  id: number;
  name: string;
  summary: string;
  source: string[];
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
        name: '現在会社員向けの助成金はありません',
        summary: '',
        source: [],
      },
    ],
  },
  Freelance: {
    image: FreelanceImage,
    job: '個人事業主',
    subsidylist: [
      {
        id: 1,
        name: '持続化給付金',
        summary:
          '新型コロナウイルス感染症の影響により、売上が前年同月比で50％以上減少している個人事業主が対象です。<br />給付額: 100万円',
        source: [
          'https://www.meti.go.jp/covid-19/jizokuka-qa.html',
          '経済産業省',
        ],
      },
      {
        id: 2,
        name: '小学校休業等対応支援金',
        summary:
          '新型コロナウイルス感染症の影響により、売上が前年同月比で50％以上減少している個人事業主が対象です。',
        source: [],
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
        summary: '',
        source: [],
      },
      {
        id: 2,
        name: '小学校休業等対応助成金',
        summary: '',
        source: [],
      },
      {
        id: 3,
        name: '働き方改革推進支援助成金',
        summary: '',
        source: [],
      },
      {
        id: 4,
        name: '持続化給付金',
        summary:
          '新型コロナウイルス感染症の影響により、売上が前年同月比で50％以上減少している企業(資本金が10億円以上の大企業を除く)が対象です。<br />給付額: 200万円',
        source: [
          'https://www.meti.go.jp/covid-19/jizokuka-qa.html',
          '経済産業省',
        ],
      },
    ],
  },
};
