import React, {ChangeEvent, useEffect, useState} from 'react';
import {Range} from "../../enums";
import { connect } from 'react-redux';
import * as actions from '../../actions';
import './ControlPanel.css';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";

import prevIco from './svg/prev.svg';
import nextIco from './svg/next.svg';

const ControlPanel = ({updateData, state}) => {
   const [range, setRange] = useState<Range>(Range.day);
   const leftDate = new Date('2019-03-18');
   const rightDate = new Date('2020-03-18');

   useEffect(() => {
      updateData(range, state.startDate);
   }, [updateData, range, state.startDate]);

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
            {`From ${dateToStr('leftDate')} through ${dateToStr('rightDate')}`}
         </span>
         <div className={'control_panel_datepicker'}>
            <span> Start date: <br/></span>
            <DatePicker
               selected={state.startDate}
               onChange={date => updateData(range, date)}
               minDate={leftDate}
               maxDate={rightDate}
               showDisabledMonthNavigation
               showMonthDropdown
               showYearDropdown
            />
         </div>
         <div className="control-panel__menu">
            <img className={'control_panel_menu-item'} src={prevIco} alt="" onClick={prev}/>
            <select className={'control_panel_menu-item'} name="period" value={range} onChange={onChange}
               id={'control_panel_period'}
            >
               <option value={Range.day}>One day</option>
               <option value={Range.week}>One week</option>
               <option value={Range.month}>One month</option>
               <option value={Range.quarter}>One quarter</option>
            </select>
            <img className={'control_panel_menu-item'} src={nextIco} alt="" onClick={next}/>
         </div>
      </div>
   )
};

const mapStateToProps = (state) => ({state});

const mapDispatchToProps = {...actions};

export default connect(mapStateToProps, mapDispatchToProps)(ControlPanel);
