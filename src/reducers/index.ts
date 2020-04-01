import {Range} from "../enums";

const initialState = {
   period: Range.day,
   data: []
};

const reducer = (state = initialState, action) => {
   switch (action.type) {
      case 'DWWD_WDWD':
         break;
      default:
         break;
   }
   return state;
};

export default reducer;
