import { month } from '../common/constants/array';

const getMonthes = (): string[] => {
  let monthesFromNowToEndOfYear: string[] = [];
  let monthesFromStartOfYearTillNow: string[] = [];
  monthesFromNowToEndOfYear = month.slice(new Date().getMonth());
  monthesFromStartOfYearTillNow = month.slice(0, new Date().getMonth());
  return monthesFromNowToEndOfYear.concat(monthesFromStartOfYearTillNow);
};

export { getMonthes };
