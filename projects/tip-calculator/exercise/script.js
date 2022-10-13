// 🌟 APP: Tip Calculator

const billInput = document.getElementById('billTotalInput');
const tipInputDiv = document.getElementById('tipInput');
const numberOfPeopleDiv = document.getElementById('numberOfPeople');
const perPersonTotalDiv = document.getElementById('perPersonTotal');

let people = Number(numberOfPeopleDiv.innerText);

const calculateBill = () => {
  const bill = Number(billInput.value);
  const tipPercentage = Number(tipInputDiv.value) / 100;
  const tip = bill * tipPercentage;
  const totalBill = bill + tip;
  const perPersonAmount = totalBill / people;
  perPersonTotalDiv.innerText = `$${perPersonAmount.toFixed(2)}`;
}

const increasePeople = () => {
  people += 1;
  numberOfPeopleDiv.innerText = people
  calculateBill()
}

const decreasePeople = () => {
  if (people <= 1) return
  people -= 1;
  calculateBill()
  numberOfPeopleDiv.innerText = people
}