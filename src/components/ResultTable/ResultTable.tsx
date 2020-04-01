import React from 'react';
import './ResultTable.css';

const ResultTable = () => {
  return (
     <div className="result-table">
        <table>
           <thead>
              <tr>
                 <th>Product</th>
                 <th>Min Usage</th>
                 <th>Max Usage</th>
                 <th>Average Usage</th>
              </tr>
           </thead>
           <tbody>
              <tr>
                 <td>IntelliJ IDEA</td>
                 <td>asa</td>
                 <td>asa</td>
                 <td>asa</td>
              </tr>
              <tr>
                 <td>WebStorm</td>
                 <td>3r3er</td>
                 <td>3r3er</td>
                 <td>3r3er</td>
              </tr>
              <tr>
                 <td>PHPStorm</td>
                 <td>3r3er</td>
                 <td>3r3er</td>
                 <td>3r3er</td>
              </tr>
           </tbody>
        </table>
     </div>
  )
};

export default ResultTable;
