import {Range} from "../enums";

const initialState = {
   startDate: new Date('2019-03-18'),
   period: Range.day,
   data: []
};

const reducer = (state = initialState, action) => {
   switch (action.type) {
      case 'ADD_DATA':
         return {
            ...state,
            data: action.data,
            period: action.period,
            startDate: action.date
      };
      case 'CHANGE_PERIOD':
         return {
            ...state,
            period: action.period
         };
      default:
         break;
   }
   return state;
};

export default reducer;
