import React from 'react';
import {
   BarChart, Bar, ResponsiveContainer, XAxis, YAxis, CartesianGrid, Tooltip, Legend,
} from 'recharts';
import './Graph.css'

const Graph = () => {
   const title = 'Graph';
   const data = [
      {name: 'Page A', uv: 4000, amt: 2400},
      {name: 'Page B', uv: 3000, amt: 2210},
      {name: 'Page C', uv: 2000, amt: 2290},
      {name: 'Page D', uv: 2780, amt: 2000},
      {name: 'Page E', uv: 1890, amt: 2181},
      {name: 'Page F', uv: 2390, amt: 2500},
      {name: 'Page G', uv: 3490, amt: 2100},
   ];
   return (
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
      </div>
   )
};

export default Graph;
