const currencyInput = document.querySelector('.currency-input');
const currencyOutput = document.querySelector('.currency-output');
const fromAmmount = document.querySelector('.from-ammount');
const toAmmount = document.querySelector('.to-ammount');
const rateSumm = document.querySelector('.rate');
const reverse = document.querySelector('.reverse');

currencyInput.addEventListener('change', calculate);
fromAmmount.addEventListener('input', calculate);
currencyOutput.addEventListener('change', calculate);
toAmmount.addEventListener('input', calculate);

reverse.addEventListener('click', () => {
  const temp = currencyInput.value;
  currencyInput.value = currencyOutput.value;
  currencyOutput.value = temp;
  calculate();
});

const dataURL = 'https://api.exchangerate-api.com/v4/latest/';

function calculate() {
  const fromCurrency = currencyInput.value;
  const toCurrency = currencyOutput.value;
  
  fetch(`${dataURL}${fromCurrency}`)
    .then(res => res.json())
    .then(res => {
    const rate = res.rates[toCurrency];
    document.querySelector(".date").textContent = res.date;
    rateSumm.innerText = `1 ${fromCurrency} = ${rate} ${toCurrency}`
    toAmmount.value = (fromAmmount.value * rate).toFixed(2);
  })
}

calculate();
