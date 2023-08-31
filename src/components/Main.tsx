import React, { useState } from 'react';
import "../assets/css/Main.css";
import { Calculator } from './Calculator';

export const Main = () => {
  const [selectedFormula, setSelectedFormula] = useState("hb");

  const onOptionChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedFormula(e.target.value);
  }

  return (
    <div className="container">
      <div className="select-calc">
        <ul>
          <li>
            <input
              type="radio"
              className=""
              name="formula"
              value="hb"
              id="hb"
              checked={selectedFormula === "hb"}
              onChange={onOptionChange}
            />
            <label htmlFor="hb" className="">Harris-Benedict</label>
          </li>
          <li className="">
            <input
              type="radio"
              className=""
              name="formula"
              id="rhb"
              value="rhb"
              checked={selectedFormula === "rhb"}
              onChange={onOptionChange}
            />
            <label htmlFor="rhb">Revised Harris-Benedict</label>
          </li>
          <li className="">
            <input
              type="radio"
              className=""
              name="formula"
              id="mstj"
              value="mstj"
              checked={selectedFormula === "mstj"}
              onChange={onOptionChange}
            />
            <label htmlFor="mstj">Mifflin-St Jeor</label>
          </li>
          {/* <li className="">
            <input
              type="radio"
              className=""
              name="formula"
              id="kmc"
              value="kmc"
              checked={selectedFormula === "kmc"}
              onChange={onOptionChange}
            />
            <label htmlFor="kmc">Katch-McArdle</label>
          </li> */}
        </ul>
      </div>
      <div className="calculator-container">
        <Calculator formula={selectedFormula} />
      </div>
    </div>
  )
}
