const Dateparams = new URLSearchParams(window.location.search);
const DateInput = Dateparams.get('date-input');
const dateSort = document.getElementById('dateRange');
const dataValue = DateInput.value;

let dates = [];

if (dataValue){
    dates.push(dataValue);
}else {
    return;
}

let formmattedDates = dates.map(date =>{
    let [year, month, day] = date.split('-');
    return `${year}-${day}-${month}`;
});

formattedDates.sort((a, b) => {
    return new Date(a.split('-').reverse().join('-')) - new Date(b.split('-').reverse().join('-'));
});

let firstDate = formattedDates[0];
let lastDate = formattedDates[formattedDates.length - 1];

let formatDate = (date) => {
    let [year, day, month] = date.split('-');
    return `${month}/${day}/${year}`;  // Return in mm/dd/yyyy format
};
const result = `${formatDate(firstDate)} - ${formatDate(lastDate)}`;
const DateOutput = document.getElementById('dateRange');
DateOutput.value = result;



 // budget display
        const params = new URLSearchParams(window.location.search);
        const budgets = params.get('budget');

        const budgetOutput = document.getElementById('budgetSummary');

        budgetOutput.value = budgets;



// Function to delete a row from the expense table
function deleteRow(button) {
    var row = button.parentNode.parentNode;
    row.parentNode.removeChild(row);
}

// Function to add a new row to the expense table
function addRow() {
    var table = document.getElementById("expenseTable");
    var newRow = table.insertRow();
    var cell1 = newRow.insertCell(0);
    var cell2 = newRow.insertCell(1);
    var cell3 = newRow.insertCell(2);
    var cell4 = newRow.insertCell(3);

    cell1.innerHTML = '<input type="text" placeholder="Enter amount" id="payment">';
    cell2.innerHTML = '<input type="text" placeholder="Enter category" id="category">';
    cell3.innerHTML = '<input type="date" id="date-input" name="date-input" >';
    cell4.innerHTML = '<button type="button" class="delete-btn" onclick="deleteRow(this)">Delete</button>';
}

function addAmount(){
    const amounts = document.getElementById('payment').value;
    let total = 0;

    amounts.forEach(function(input) {
        total += parseFloat(input.value) || 0;
    });

    
}
