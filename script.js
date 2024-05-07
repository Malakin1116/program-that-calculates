function calculateSum(startPrice, upToPrice, increment, fraction) {
    let sum = 0;
    for (let price = startPrice; price <= upToPrice; price += increment) {
        sum += price * fraction;
    }
    return sum;
}

function calculateAndStore(startPrice, endPrice, fraction, outputId, inputId) {
    const maxPriceInput = document.getElementById(inputId);
    const maxPrice = parseInt(maxPriceInput.value);

    if (maxPrice < startPrice || maxPrice > endPrice || isNaN(maxPrice)) {
        document.getElementById(outputId).innerText = `Будь ласка, введіть дійсну ціну від $${startPrice} до $${endPrice}.`;
        return;
    }

    const sum = calculateSum(startPrice, maxPrice, 5, fraction);
    document.getElementById(outputId).innerText = `Розрахована сума від $${startPrice} до $${maxPrice} складає: $${sum.toFixed(2)}`;
}

function showTotalSum() {
    const output1 = parseFloat(document.getElementById('output1').innerText.match(/[\d\.]+$/)[0]) || 0;
    const output2 = parseFloat(document.getElementById('output2').innerText.match(/[\d\.]+$/)[0]) || 0;
    const total = output1 + output2;
    document.getElementById('totalOutput').innerText = `Загальна сума складає: $${total.toFixed(2)}`;
}

window.onload = function() {
    // Якщо потрібно, реалізуйте відновлення даних з localStorage для обох виводів
}
