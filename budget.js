// Function to delete a row from the expense table
function deleteRow(button) {
    var row = button.parentNode.parentNode;
    row.parentNode.removeChild(row);
    updateTotalAmount();
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
    cell4.innerHTML = '<button type="button" class="delete-btn">Delete</button>';

    cell4.querySelector('.delete-btn').addEventListner('click', function() {
        deleteRow(this);
    });
}

function updateTotalAmount(){
    const payments = document.querySelector('.payment');
    let total = 0;

    payments.forEach(function(input) {
        total += parseFloat(input.value) || 0;
    });

    document.getElementById('totalAmount').innerHTML = total.toFixed(2);
}

document.getElementById('expenseTable').addEventListener('input', function(event){
    if (event.target && event.target.classList.contains('payment')) {
        updateTotalAmount();
    }
});

const params = new URLSearchParams(window.location.search);
        const budgets = params.get('budget');

        const budgetOutput = document.getElementById('budgetSummary');

        budgetOutput.value = budgets;
