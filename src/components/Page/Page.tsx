import React from 'react';
import './Page.css'
import ControlPanel from "../ControlPanel";
import ResultTable from "../ResultTable";
import Graphs from "../Graphs";

const Page = () => {
   return (
      <div className="page">
         <h1>Stats</h1>
         <ControlPanel />
         <ResultTable />
         <Graphs/>
      </div>
   )
};

export default Page;
