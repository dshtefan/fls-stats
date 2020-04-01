import React from 'react';
import './Page.css'
import ControlPanel from "../ControlPanel";
import ResultTable from "../ResultTable";

const Page = () => {
   return (
      <div className="page">
         <h1>Stats</h1>
         <ControlPanel />
         <ResultTable />
      </div>
   )
};

export default Page;
