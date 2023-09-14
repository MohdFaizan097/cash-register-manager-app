const billAmount = document.querySelector('#js-bill-amount');
const cashGiven = document.querySelector('#js-cash-given');
const checkButton = document.querySelector('#js-button');
const errorMsg = document.querySelector('#error-msg');
const noOfNotes = document.querySelectorAll('.no-of-notes')


let notesAvailable = [2000, 500, 200, 100, 50, 20, 10, 5, 1];

checkButton.addEventListener('click', () => {
  errorMsg.innerText = '';

  if(isNaN(billAmount.value) || isNaN(cashGiven.value) || billAmount.value <= 0) {
    showMsg('Invalid number');
  }

  let changeAmount = cashGiven.value - billAmount.value;

  if(changeAmount < 0) {
    showMsg('Wash plates!');
  };

  for(let i = 0; i < noOfNotes.length; i++){
    noOfNotes[i].innerText = '';
  };

  for(let i = 0; i < notesAvailable.length; i++){
    const numberOfNotes = Math.floor(changeAmount / notesAvailable[i]);
    changeAmount %= notesAvailable[i];

    noOfNotes[i].innerText = numberOfNotes;
  }
  
});

function showMsg(msg){
  errorMsg.innerText = msg;
}
