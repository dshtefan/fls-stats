import React, {useEffect, useState} from 'react';
import './ResultTable.css';
import * as actions from "../../actions";
import { connect } from 'react-redux';

class RowDTO {
   name: string;
   min: null|number = null;
   max: null|number = null;
   sum = 0;
   count = 0;

   constructor(name) {
      this.name = name;
   }

   average() {
      const res = Math.floor(this.sum / (this.count === 0 ? 1 : this.count));
      return res ? res : null;
   };

   addData(number: string): RowDTO {
      if (number === '') return this;
      const num = Number(number);
      if (isNaN(num))
         return this;
      this.sum += num;
      this.count++;
      if (this.min !== null)
         this.min = this.min > num ? num : this.min;
      else
         this.min = num;
      if (this.max !== null)
         this.max = this.max < num ? num : this.max;
      else
         this.max = num;

      return this;
   };
}

const ResultTable = ({state}) => {
   const [webstorm, setWebstorm] = useState(new RowDTO('webstorm'));
   const [idea, setIdea] = useState(new RowDTO('idea'));
   const [phpstorm, setPhpstorm] = useState(new RowDTO('goland'));
   useEffect(() => {
      setWebstorm(new RowDTO('webstorm'));
      setIdea(new RowDTO('idea'));
      setPhpstorm(new RowDTO('goland'));
      state.data.forEach((el) => {
         setWebstorm((ws) => ws.addData(el.webstorm));
         setIdea((id) => id.addData(el.idea));
         setPhpstorm((go) => go.addData(el.goland));
      })
   }, [state.data]);
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
                  <td>{idea.min}</td>
                  <td>{idea.max}</td>
                  <td>{idea.average()}</td>
               </tr>
               <tr>
                  <td>WebStorm</td>
                  <td>{webstorm.min}</td>
                  <td>{webstorm.max}</td>
                  <td>{webstorm.average()}</td>
               </tr>
               <tr>
                  <td>PHPStorm</td>
                  <td>{phpstorm.min}</td>
                  <td>{phpstorm.max}</td>
                  <td>{phpstorm.average()}</td>
               </tr>
            </tbody>
         </table>
      </div>
   )
};

const mapStateToProps = (state) => ({state});

const mapDispatchToProps = {...actions};

export default connect(mapStateToProps, mapDispatchToProps)(ResultTable);
