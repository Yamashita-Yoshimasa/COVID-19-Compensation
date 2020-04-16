import EmployeeImage from 'images/Employee.png';
import FreelanceImage from 'images/Freelance.png';
import EmployerImage from 'images/Employer.png';

export interface SubsidyList {
  id: number;
  name: string;
  term?: string;
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
        name: '緊急小口資金',
        summary:
          '新型コロナウイルス感染症の影響により、収入減少があった世帯の資金需要に対応するため、都道府県社協を実施主体とする生活福祉資金貸付制度の特例貸付です。<br />新型コロナウイルスの影響を受け、休業等により収入の減少があり、緊急かつ一時的な生計維持のための貸付を必要とする世帯が対象です。<br />＜貸付上限額＞：特例の場合 20万円以内<br />　　　　　　　　その他の場合 10万円以内<br />＜貸付利子・保証人＞：無利子・不要',
        source: [
          'https://www.shakyo.or.jp/coronavirus/shikin20200324.pdf',
          '社会福祉協議会',
        ],
      },
      {
        id: 2,
        name: '総合支援資金',
        summary:
          '新型コロナウイルス感染症の影響により、収入減少があった世帯の資金需要に対応するため、都道府県社協を実施主体とする生活福祉資金貸付制度の特例貸付です。<br />新型コロナウイルスの影響を受け、収入の減少や失業などにより生活に困窮し、日常生活の維持が困難となっている世帯が対象です。<br />＜貸付上限額＞：(二人以上) 月20万円以内<br />　　　　　　　　(単身) 月15万円以内<br />＜貸付期間＞: 原則3ヶ月以内<br />＜貸付利子・保証人＞: 無利子・不要',
        source: [
          'https://www.shakyo.or.jp/coronavirus/shikin20200324.pdf',
          '社会福祉協議会',
        ],
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
          '感染症拡大により、特に大きな影響を受けている事業者に対して、事業の継続を支え、再起の糧となる、事業全般に広く使える、給付金です。<br />新型コロナウイルス感染症の影響により、売上が前年同月比で50％以上減少した個人事業主が対象です。<br />＜給付額＞：100万円',
        source: [
          'https://www.meti.go.jp/covid-19/jizokuka-qa.html',
          '経済産業省',
        ],
      },
      {
        id: 2,
        name: '小学校休業等対応支援金',
        term: '<2月27日〜3月31日分>',
        summary:
          '令和2年2月27日から3月31日までの間に、小学校等の臨時休業に伴い、子供の世話を行うために、契約した仕事ができなくなった個人で仕事をする保護者が対象です。<br />＜給付額＞：4,100円/１日(定額)',
        source: ['https://www.mhlw.go.jp/stf/newpage_10231.html', '厚生労働省'],
      },
      {
        id: 3,
        name: '小学校休業等対応支援金',
        term: '<4月1日〜6月30日分>',
        summary:
          '令和2年4月1日から6月30日までの間に、小学校等の臨時休業に伴い、子供の世話を行うために、契約した仕事ができなくなった個人で仕事をする保護者が対象です。<br />＜給付額＞：4,100円/１日(定額)',
        source: [
          'https://www.mhlw.go.jp/content/11909000/000620727.pdf',
          '厚生労働省',
        ],
      },
    ],
  },
  Employer: {
    image: EmployerImage,
    job: '事業主',
    subsidylist: [
      {
        id: 1,
        name: '雇用調整助成金',
        summary:
          '経済上の理由により、事業活動の縮小を余儀なくされた事業主が、雇用の維持を図るための休業手当に要した費用を助成する制度です。<br />新型コロナウイルス感染症の影響を受ける事業主(全業種)で生産指標が1ヶ月5%以上低下した方が対象です。<br />＜給付額＞：休業手当の4/5(中小)<br />　　　　　　休業手当の2/3(大企業)<br />※解雇等を行わない場合9/10(中小)、3/4(大企業)',
        source: [
          'https://www.mhlw.go.jp/stf/seisakunitsuite/bunya/koyou_roudou/koyou/kyufukin/pageL07.html',
          '厚生労働省',
        ],
      },
      {
        id: 2,
        name: '小学校休業等対応助成金',
        term: '<2月27日〜3月31日分>',
        summary:
          '令和2年2月27日から3月31日までの間に、小学校等の臨時休業に伴い、子供の世話を行うことが必要となった労働者に対し、有給(賃金全額支給)の休暇(労働基準法上の年次有給休暇を除く)を取得させた事業主が対象です。<br />＜給付額＞：有給休暇を取得した対象労働者に支払った賃金相当額×10/10(上限8,330円)',
        source: ['https://www.mhlw.go.jp/content/000605827.pdf', '厚生労働省'],
      },
      {
        id: 3,
        name: '小学校休業等対応助成金',
        term: '<4月1日〜6月30日分>',
        summary:
          '令和2年4月1日から6月30日までの間に、小学校等の臨時休業に伴い、子供の世話を行うことが必要となった労働者に対し、有給(賃金全額支給)の休暇(労働基準法上の年次有給休暇を除く)を取得させた事業主が対象です。<br />＜給付額＞：有給休暇を取得した対象労働者に支払った賃金相当額×10/10(上限8,330円)',
        source: [
          'https://www.mhlw.go.jp/stf/seisakunitsuite/bunya/koyou_roudou/koyou/kyufukin/pageL07_00002.html',
          '厚生労働省',
        ],
      },
      {
        id: 4,
        name: '働き方改革推進支援助成金',
        summary:
          '「働き方改革推進支援助成金」に設けられた新型コロナウイルス感染症対策を目的とした取組を行う事業主を支援する特例コースです。<br />新型コロナウイルス感染症対策としてテレワークを新規（※）で導入する中小企業事業主<br />※試行的に導入している事業主も対象となります。<br />＜補助率＞：1/2(1企業当たりの上限額: 100万円)',
        source: [
          'https://www.mhlw.go.jp/stf/seisakunitsuite/bunya/koyou_roudou/roudoukijun/jikan/syokubaisikitelework.html',
          '厚生労働省',
        ],
      },
      {
        id: 5,
        name: '持続化給付金',
        summary:
          '感染症拡大により、特に大きな影響を受けている事業者に対して、事業の継続を支え、再起の糧となる、事業全般に広く使える、給付金です。<br />新型コロナウイルス感染症の影響により、売上が前年同月比で50％以上減少している企業(資本金が10億円以上の大企業を除く)が対象です。<br />＜給付額＞：200万円',
        source: [
          'https://www.meti.go.jp/covid-19/jizokuka-qa.html',
          '経済産業省',
        ],
      },
    ],
  },
};
