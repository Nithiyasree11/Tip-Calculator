document.addEventListener('DOMContentLoaded', function() {
    const calculateBtn = document.getElementById('calculate-btn');
    const billAmountInput = document.getElementById('bill-amount');
    const serviceQualitySelect = document.getElementById('service-quality');
    const numPeopleInput = document.getElementById('num-people');
    const resultsDiv = document.getElementById('results');
    const totalTipSpan = document.getElementById('total-tip');
    const tipPerPersonSpan = document.getElementById('tip-per-person');
    const totalBillSpan = document.getElementById('total-bill');

    calculateBtn.addEventListener('click', function() {
        const billAmount = parseFloat(billAmountInput.value);
        const tipPercentage = parseFloat(serviceQualitySelect.value);
        const numPeople = parseInt(numPeopleInput.value);

        if (isNaN(billAmount) || billAmount <= 0) {
            alert('Please enter a valid bill amount.');
            return;
        }

        if (!tipPercentage) {
            alert('Please select a service quality.');
            return;
        }

        if (isNaN(numPeople) || numPeople <= 0) {
            alert('Please enter a valid number of people.');
            return;
        }

        const totalTip = billAmount * tipPercentage;
        const tipPerPerson = totalTip / numPeople;
        const totalBill = billAmount + totalTip;

        totalTipSpan.textContent = totalTip.toFixed(2);
        tipPerPersonSpan.textContent = tipPerPerson.toFixed(2);
        totalBillSpan.textContent = totalBill.toFixed(2);

        resultsDiv.classList.remove('hidden');
    });
});
