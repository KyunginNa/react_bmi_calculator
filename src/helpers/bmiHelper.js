const calculateBmi = (weight, height) => {
  const bmiValue = (weight / ((height / 100) * (height / 100))).toFixed(2);
  const bmiMessage = setBMIMessage(bmiValue);
  return [bmiValue, bmiMessage];
};

const setBMIMessage = (bmiValue) => {
  if (bmiValue <= 18.5) {
    return "Underweight";
  } else if (bmiValue <= 25) {
    return "Normal";
  } else if (bmiValue <= 30) {
    return "Overweight";
  } else {
    return "Obese";
  }
};

export default calculateBmi;
