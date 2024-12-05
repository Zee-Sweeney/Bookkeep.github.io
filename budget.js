document.querySelector('form').addEventListener('submit', function (e) {
    e.preventDefault(); // Prevent default form submission

    // Collect all inputs
    const budget = document.getElementById('budget').value;
    const rows = Array.from(document.querySelectorAll('#expenseTable tr')).slice(1);

    // Prepare data for submission
    const expenses = rows.map(row => {
        const amount = row.querySelector('input[placeholder="Enter amount"]').value;
        const category = row.querySelector('input[placeholder="Enter category"]').value;
        const date = row.querySelector('input[type="date"]').value;
        return { amount, category, date };
    });

    // Store in localStorage or pass as URL parameter
    const data = {budget: budget, expenses: expenses};
    localStorage.setItem('budgetData', JSON.stringify(data)); // Save in local storage

    // Redirect to summary page
    window.location.href = 'summary.html';
});
document.addEventListener('DOMContentLoaded', function () {
    const storedData = localStorage.getItem('budgetData');

    if (!storedData){
        alert('No budget data found! Please go bach and enter your budget.');
        window.location.href = 'budget.html';
        return;
    }

    let data;
    try {
        data = JSON.parse(storedData); // Parse the data
    } catch (error) {
        alert('Failed to retrieve data. Please re-enter your budget.');
        localStorage.removeItem('budgetData'); // Clear corrupted data
        window.location.href = 'budget.html';
        return;
    }

    const { budget, expenses } = data;

    // Populate budget
    document.getElementById('budgetSummary').value = budget;

    // Process expenses
    //const expenseAmounts = expenses.map(e => parseFloat(e.amount) || 0);
    const totalExpenses = expense.reduce((sum, expense) => sum + expense, 0);
    document.getElementById('totalSummary').value = totalExpenses.toFixed(2);

    // Calculate total expenses by category
    const categoryTotals = {};
    expenses.forEach(expense => {
        categoryTotals[expense.category] = (categoryTotals[expense.category] || 0) + expense.amount;
    });

    const categorySummary = document.getElementById('categorySummary');
    categorySummary.innerHTML = ''; // Clear existing content
    for (const [category, total] of Object.entries(categoryTotals)) {
        const div = document.createElement('div');
        div.textContent = `${category}: $${total.toFixed(2)}`;
        categorySummary.appendChild(div);
    }

    // Calculate date range
    const dates = expenses.map(expense => new Date(expense.date)).filter(date => !isNaN(date));
    if (dates.length > 0) {
        const minDate = new Date(Math.min(...dates)).toLocaleDateString();
        const maxDate = new Date(Math.max(...dates)).toLocaleDateString();
        document.getElementById('dateRange').value = `${minDate} - ${maxDate}`;
    } else {
        document.getElementById('dateRange').value = 'No valid dates provided';
    }

    // Determine if over budget
    document.getElementById('overBudgetSummary').value = totalExpenses > budget ? 'Yes' : 'No';
});
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

    cell1.innerHTML = '<input type="text" class="payment" placeholder="Enter amount" id="payment">';
    cell2.innerHTML = '<input type="text" placeholder="Enter category" id="category">';
    cell3.innerHTML = '<input type="date" id="date-input" name="date-input" >';
    cell4.innerHTML = '<button type="button" class="delete-btn">Delete</button>';

    cell4.querySelector('.delete-btn').addEventListener('click', function() {
        deleteRow(this);
    });
}
function updateTotalAmount(){
    const payments = document.querySelectorAll('.payment');
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
