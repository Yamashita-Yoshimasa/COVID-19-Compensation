import EmployeeImage from 'images/Employee.png';
import FreelanceImage from 'images/Freelance.png';
import EmployerImage from 'images/Employer.png';

export interface Job {
  id: number;
  name: string;
  image: string;
  description: string;
}

export interface JobList {
  job: Job[];
}

export const JobData: JobList = {
  job: [
    {
      id: 1,
      name: 'Employer',
      image: EmployerImage,
      description: '事業主の方はこちら',
    },
    {
      id: 2,
      name: 'Freelance',
      image: FreelanceImage,
      description: '個人事業主の方はこちら',
    },
    {
      id: 3,
      name: 'Employee',
      image: EmployeeImage,
      description: '会社員の方はこちら',
    },
  ],
};
