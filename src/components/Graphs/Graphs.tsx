import React from 'react';
import Graph from "../Graph";
import './Graphs.css'

const Graphs = () => {
   return (
      <div className="graphs">
         <Graph name={'idea'} title={'IntelliJ IDEA'}/>
         <Graph name={'webstorm'} title={'WebStorm'}/>
         <Graph name={'goland'} title={'PHPStorm'}/>
      </div>
   )
};

export default Graphs;
