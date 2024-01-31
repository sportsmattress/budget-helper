let takeHomePay = document.querySelector('#takeHomePay');
const form = document.querySelector('#form');
let livingExpense = document.querySelector('#livingExpense');
let carPayment = document.querySelector('#carPayment');
let carInsurance = document.querySelector('#carInsurance');
let gasOil = document.querySelector('#gasOil');
let electric = document.querySelector('#electric');
let cableInternet = document.querySelector('#cableInternet');
let grocery = document.querySelector('#grocery');
let studentLoan = document.querySelector('#studentLoan');
let other = document.querySelector('#other');
const formContainer = document.querySelector('.formContainer');

function daysInThisMonth() {
    let now = new Date();
    let date = new Date().getDate();
    return new Date(now.getFullYear(), now.getMonth()+1, 0).getDate() - date;
  };
function todaysDate() {
    let date = new Date().toLocaleDateString();
    return date;
}

form.addEventListener('submit', (e) => {
    e.preventDefault();
    const existingInfoContainer = document.querySelector('.infoContainer');
    if (existingInfoContainer) {
        existingInfoContainer.remove();
    }

    formContainer.classList.remove('formContainer');
    formContainer.classList.add('formContainer-clicked');

    const infoContainer = document.createElement('div');
    infoContainer.classList.add("infoContainer");
    formContainer.appendChild(infoContainer);

    let spentThatDayInput = document.createElement('input');
    spentThatDayInput.type = "number";
    spentThatDayInput.placeholder = "How much did you spend today?";
    let spentThatDayBtn = document.createElement('button');
    spentThatDayBtn.type = "submit";
    spentThatDayBtn.textContent = "Submit"
    infoContainer.appendChild(spentThatDayInput);
    infoContainer.appendChild(spentThatDayBtn);

    spentThatDayBtn.addEventListener('click', (e) => {
        e.preventDefault();

        const transactionContainer = document.createElement('div');
        transactionContainer.classList.add("transactionContainer");
        formContainer.appendChild(transactionContainer);

        let transactionHeader = document.createElement('h2');
        transactionHeader.classList.add("transactionHeader");
        transactionHeader.textContent = "Transactions";
        transactionContainer.appendChild(transactionHeader);

        let spentThisMonth = document.createElement('h4');
        spentThisMonth.classList.add('spentThisMonth');
        spentThisMonth.textContent = `You spent $` + parseInt(spentThatDayInput.value) + ` on ${todaysDate()}.`;
        transactionContainer.appendChild(spentThisMonth);

        takeHomeText.textContent = "Your Take Home Pay: " + " $" + takeHomePayValue;
        
        let updatedExpenses = (parseInt(totalExpenses) + parseInt(spentThatDayInput.value));
        totalExpensesText.textContent = "Total Expenses: " + " $" + updatedExpenses;
        infoContainer.appendChild(totalExpensesText);
        
        let updatedLeftOverFunds = (parseInt(takeHomePayValue) - parseInt(updatedExpenses));
        fundsLeftoverText.textContent = "Your Left Over Funds: " + " $" + updatedLeftOverFunds;
        infoContainer.appendChild(fundsLeftoverText);
        
        let updatedSpendPerDay = (updatedLeftOverFunds / daysInThisMonth());
        spendPerDayText.textContent = `There are ${daysInThisMonth()} days left in this month. You can spend $${Math.round(updatedSpendPerDay)} per day the rest of this month.`
        infoContainer.appendChild(spendPerDayText);

        spentThatDayInput.value = "";
    })

    let takeHomePayValue = takeHomePay.value;
    let takeHomeText = document.createElement('h4');
    takeHomeText.textContent = "Your Take Home Pay: " + " $" + takeHomePayValue;
    infoContainer.appendChild(takeHomeText);

    let totalExpenses = parseInt(livingExpense.value) + parseInt(carPayment.value) + parseInt(carInsurance.value)
    + parseInt(gasOil.value) + parseInt(electric.value) + parseInt(cableInternet.value) + parseInt(grocery.value) +
    parseInt(studentLoan.value) + parseInt(other.value);

    let totalExpensesText = document.createElement('h4');
    totalExpensesText.textContent = "Total Expenses: " + " $" + totalExpenses;
    infoContainer.appendChild(totalExpensesText);
    
    let fundsLeftover = parseInt(takeHomePayValue) - parseInt(totalExpenses);
    let fundsLeftoverText = document.createElement('h4');
    fundsLeftoverText.textContent = "Your Left Over Funds: " + " $" + fundsLeftover;
    infoContainer.appendChild(fundsLeftoverText);

    let spendPerDay = fundsLeftover / daysInThisMonth();
    let spendPerDayText = document.createElement('h4');
    spendPerDayText.textContent = `There are ${daysInThisMonth()} days left in this month. You can spend $${Math.round(spendPerDay)} per day the rest of this month.`;
    infoContainer.appendChild(spendPerDayText);
    
    takeHomePay.value = "";
    livingExpense.value = "";
    carPayment.value = "";
    carInsurance.value = "";
    gasOil.value = "";
    electric.value = "";
    cableInternet.value = "";
    grocery.value = "";
    studentLoan.value = "";
    other.value = "";

})
