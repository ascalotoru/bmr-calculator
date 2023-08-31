import { FormDataInterface } from "../interfaces/CommonTypes";

export const harrisBenedict = (formData: FormDataInterface) => {
  const {height, sex, age, weight} = formData;
  let bmr = 0;
  if (sex === "f") {
    bmr = (9.5634 * weight) + (1.8496 * height) - (4.6756 * age) + 655.0955;
  } else {
    bmr = (13.7516 * weight) + (5.0033 * height) - (6.755 * age) + 66.473;
  }
  return Math.round(bmr);
}

export const revisedHarrisBenedict = (formData: FormDataInterface) => {
  const {height, sex, age, weight} = formData;
  let bmr = 0;
  if (sex === "f") {
    bmr = (9.247 * weight) + (3.098 * height) - (4.330 * age) + 447.593
  } else {
    bmr = (13.397 * weight) + (4.799 * height) - (5.677 * age) + 88.362
  }
  return Math.round(bmr);
}

export const mifflinStJeor = (formData: FormDataInterface) => {
  const {height, sex, age, weight} = formData;
  let variableNumber = 5;
  if (sex === "f") {
    variableNumber = -161
  }
  const bmr = (10 * weight) + (6.25 * height) - (5 * age) + variableNumber
  return Math.round(bmr);
}

