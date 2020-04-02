import React, {useEffect, useState} from 'react';
import {
   BarChart, Bar, ResponsiveContainer, XAxis, YAxis, CartesianGrid, Tooltip, Legend,
} from 'recharts';
import './Graph.css'
import * as actions from "../../actions";
import { connect } from 'react-redux';

const Graph = ({name, title, state}) => {
   const [data, setData] = useState(new Array<Object>());

   useEffect(() => {
      setData(new Array<Object>());
      state.data.forEach((el: Object) => {
         const n = Number(el[name]);
         const date = `${el['timestamp'].substring(0, 10)} ${el['timestamp'].substring(11, 16)}`;
         if(!n) return;
         setData((d) => [...d, {name: date, uv: n}])
      })
   }, [name, state.data]);
   return (
      <>
         {data.length !== 0 ?
            <div className="graph">
               <h3>{title}</h3>
               <div className="graph__container">
                  <ResponsiveContainer width='100%' height='100%'>
                     <BarChart data={data}>
                        <CartesianGrid strokeDasharray="3 3"/>
                        <XAxis dataKey="name" />
                        <YAxis width={40} name={'License'}/>
                        <Tooltip/>
                        <Legend />
                        <Bar dataKey="uv" fill="#82ca9dcc" />
                     </BarChart>
                  </ResponsiveContainer>
               </div>
            </div> : null
         }
      </>
   )
};

const mapStateToProps = (state) => ({state});

const mapDispatchToProps = {...actions};

export default connect(mapStateToProps, mapDispatchToProps)(Graph);
