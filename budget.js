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
    cell3.innerHTML = '<input type="date" id="Date">';
    cell4.innerHTML = '<button type="button" class="delete-btn" onclick="deleteRow(this)">Delete</button>';
}

function addAmount(){
    const amounts = document.getElementById('payment').value;
    let total = 0;

    amounts.forEach(function(input) {
        total += parseFloat(input.value) || 0;
    });

    
}