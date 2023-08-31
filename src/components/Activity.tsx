import React, { useEffect, useState } from 'react';
import "../assets/css/Activity.css";
import { ActivityProps } from '../interfaces/CommonTypes';

const Activity = (props: ActivityProps) => {
  const {bmr} = props;
  const [totalCalories, setTotalCalories] = useState(0);
  const [activityLevel, setActivityLevel] = useState("sedentary");

  const onOptionChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setActivityLevel(e.target.value);
  }

  useEffect(() => {
    let multiplier = 1.2;
    if (bmr > 0) {
      switch (activityLevel) {
        case "lactive":
          multiplier = 1.375
          break;
        case "mactivity":
          multiplier = 1.55;
          break;
        case "vactivity":
          multiplier = 1.725;
          break;
        case "xactivity":
          multiplier = 1.9;
          break;
      }
      setTotalCalories(Math.round(bmr * multiplier));
    }
  }, [bmr, activityLevel])
  

  return (
    <div className="activity-container">
      <div>
        <p>Nivel de actividad</p>
      </div>
      <div className="activity-level">
        <ul>
          <li>
            <label htmlFor="sedentary">Sedentario</label>
            <input
              type="radio"
              name="activity"
              value="sedentary"
              id="sedentary"
              checked={activityLevel === "sedentary"}
              onChange={onOptionChange}
              />
          </li>
          <li>
            <label htmlFor="lactivity">Levente activo</label>
            <input
              type="radio"
              name="activity"
              value="lactive"
              id="lactive"
              checked={activityLevel === "lactive"}
              onChange={onOptionChange}
            />
          </li>
          <li>
            <label htmlFor="mactivity">Moderadamente activo</label>
            <input
              type="radio"
              name="activity"
              value="mactivity"
              id="mactivity"
              checked={activityLevel === "mactivity"}
              onChange={onOptionChange}
            />
          </li>
          <li>
            <label htmlFor="vactivity">Muy activo</label>
            <input
              type="radio"
              name="activity"
              value="vactivity"
              id="vactivity"
              checked={activityLevel === "vactivity"}
              onChange={onOptionChange}
            />
          </li>
          <li>
            <label htmlFor="xactivity">Extremadamente activo</label>
            <input
              type="radio"
              name="activity"
              value="xactivity"
              id="xactivity"
              checked={activityLevel === "xactivity"}
              onChange={onOptionChange}
            />
          </li>
        </ul>
      </div>
      <div className="activity-result">
        <p>Total calorías diarias: {totalCalories}</p>
      </div>
    </div>
  )
}

export default Activity