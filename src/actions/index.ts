import axios from 'axios';
import { Range } from "../enums";

const statsByDayRequest = (date) => ({
   type: 'REQUEST_STATS_BY_DAY',
   date
});

const statsByWeekRequest = (date) => ({
   type: 'REQUEST_STATS_BY_WEEK',
   date
});

const statsByMonthRequest = (date) => ({
   type: 'REQUEST_STATS_BY_MONTH',
   date
});

const statsByQuarterRequest = (date) => ({
   type: 'REQUEST_STATS_BY_QUARTER',
   date
});

const changePeriodAct = (period) => ({
   type: 'REQUEST_STATS_BY_QUARTER',
   period
});

const changePeriod = (period: Range) => (dispatch) => {
   return axios
      .get(`http://localhost:3012/${Range[period]}?start_date=2019-04-20`)
      .then((data) => console.log(data))
      .catch((data) => console.log(data))
};


export {
   statsByDayRequest,
   statsByWeekRequest,
   statsByMonthRequest,
   statsByQuarterRequest,
   changePeriod
};
