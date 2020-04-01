import React, {ChangeEvent, useEffect, useState} from 'react';
import './ControlPanel.css'

import prevIco from './svg/prev.svg';
import nextIco from './svg/next.svg';

enum Range {
   Day,
   Week,
   Month,
   Quarter
}


const ControlPanel:React.FunctionComponent<{}> = () => {
   const [range, setRange] = useState<Range>(Range.Day);
   const leftDate = '2020-01-15';
   const rightDate = '2020-05-15';

   useEffect(() => {
      console.log(range);
   }, [range]);

   const dateToStr = (date: string): string => {
      const months = [
         'Jan', 'Feb', 'Mar',
         'Apr', 'May', 'Jun',
         'Jul', 'Aug', 'Sep',
         'Oct', 'Nov', 'Dec'
      ];

      const year = date.substring(0, 4);
      const month = months[Number(date.substring(5, 7)) - 1];
      const day = date.substring(8, 10);
      return `${month} ${day}, ${year}`;
   };

   const onChange = (event: ChangeEvent<HTMLSelectElement>) => setRange(Number(event.target.value));

   const prev = () => {console.log('prev')};
   const next = () => {console.log('next')};

   return (
      <div className="control-panel">
         <span className="control-panel__period-str">
            {`From ${dateToStr(leftDate)} through ${dateToStr(rightDate)}`}
         </span>
         <div className="control-panel__menu">
            <img src={prevIco} alt="" onClick={prev}/>
            <select name="period" value={range} onChange={onChange}>
               <option disabled>Select period</option>
               <option value={Range.Day}>One day</option>
               <option value={Range.Week}>One week</option>
               <option value={Range.Month}>One month</option>
               <option value={Range.Quarter}>One quarter</option>
            </select>
            <img src={nextIco} alt="" onClick={next}/>
         </div>
      </div>
   )
};

export default ControlPanel;
