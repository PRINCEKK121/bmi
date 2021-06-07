// Dom Selectors
const form = document.querySelector('form');
const message = document.querySelector('.display-message');

console.log(document.querySelector('#weight'));
// Functions
const bmiAdvancedCalc = (weight, height) => {
  let outputMessage = 'Your bmi is ';
  console.log(weight, height);

  if (weight < 0 || height < 0)
    return 'Please enter positive numbers!';

  // rounding the bmi to one decimal place
  const bmi = Math.round((weight / Math.pow(height, 2)) * 10) / 10;

  if (isNaN(bmi)) return 'Please enter a number!';

  if (bmi > 35) outputMessage += `${bmi}, so you are extremely obese.`;
  else if (bmi > 29.9) outputMessage += `${bmi}, so you are obese.`;
  else if (bmi > 24.9) outputMessage += `${bmi}, so you are overweight.`;
  else if (bmi > 18.5) outputMessage += `${bmi}, so you have a normal weight.`;
  else outputMessage += `${bmi}, so you are underweight.`;

  return outputMessage;
};

// Event Handlers
form.addEventListener('submit', (e) => {
  e.preventDefault();

  const weightInput = Number(document.querySelector('#weight').value);
  const heightInput = Number(document.querySelector('#height').value);

  message.textContent = bmiAdvancedCalc(weightInput, heightInput);
});
