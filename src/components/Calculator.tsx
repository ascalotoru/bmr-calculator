import React, { useEffect, useState } from 'react';
import "../assets/css/Calculator.css";
import { CalculatorProps } from '../interfaces/CommonTypes';
import { harrisBenedict, mifflinStJeor, revisedHarrisBenedict } from '../utils/functions';
import Activity from './Activity';

export const Calculator = (props: CalculatorProps) => {
  const {formula} = props;
  const [formData, setFormData] = useState({
    height: 0,
    sex: "m",
    age: 0,
    weight: 0
  });
  const [bmr, setBmr] = useState(0);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const {name, value} = e.target;
    const newValue = !isNaN(parseInt(value)) ? parseInt(value) : value;
    setFormData({
      ...formData,
      [name]: newValue
    })
  }

  useEffect(() => {
    const {height, sex, age, weight} = formData;
    if (height > 0 && age > 0 && weight > 0) {
      switch (formula) {
        case "hb":
          setBmr(harrisBenedict(formData));
          break;
        case "rhb":
          setBmr(revisedHarrisBenedict(formData));
          break;
        case "mstj":
          setBmr(mifflinStJeor(formData));
          break;
      }
    }
  }, [formData, formula])
  
 
  return (
    <>
      <form className="user-data-form">
        <ul className="flex-outer">
          <li>
            <label htmlFor="height">Altura (cm):</label>
            <input type="number" name="height" id="height" value={formData.height} onChange={handleChange}/>
          </li>
          <li>
            <label htmlFor="sex">Sexo</label>
            <div className="sex-container">
              <label htmlFor="male">Hombre</label>
              <input type="radio" id="male" name="sex" value="m" checked={formData.sex === "m"} onChange={handleChange}/>
              <label htmlFor="female">Mujer</label>
              <input type="radio" id="female" name="sex" value="f" checked={formData.sex === "f"} onChange={handleChange}/>
            </div>
          </li>
          <li>
            <label htmlFor="age">Edad</label>
            <input type="number" name="age" id="age" value={formData.age} onChange={handleChange}/>
          </li>
          <li>
            <label htmlFor="weight">Peso (kg)</label>
            <input type="number" name="weight" id="weight" value={formData.weight} onChange={handleChange}/>
          </li>
        </ul>
      </form>
      <div className="res-container">
        <div>Tasa de metabolismo basal: {bmr} kcal</div>
      </div>
      <Activity bmr={bmr}/>
    </>
  )
}
