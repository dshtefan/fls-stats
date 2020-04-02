import axios from 'axios';
import { Range } from "../enums";

const addData = (data, period, date) => ({
   type: 'ADD_DATA',
   data,
   period,
   date
});

const updateData = (period: Range, date: Date) => (dispatch) => {
   const y : number = date.getFullYear();
   const m : number = date.getMonth() + 1;
   const d : number = date.getDate();
   const year: string = y.toString();
   const month: string = m < 10 ? '0' + m : '' + m;
   const day: string = d < 10 ? '0' + d : '' + d;
   return axios
      .get(`http://localhost:3012/${Range[period]}?start_date=${year}-${month}-${day}`)
      .then((data) => data.data.data)
      .then((data) => dispatch(addData(data, period, date)))
      .catch((data) => console.log(data))
};


export {
   updateData
};
