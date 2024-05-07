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

document.getElementById('openModal').onclick = function() {
    var modal = document.getElementById('modal');
    var calculations = document.getElementById('calculations');
    calculations.innerHTML = ''; // Очищення попередніх розрахунків
    modal.style.display = "block";
    
    const maxPrice = parseInt(document.getElementById('maxPriceInput1').value);
    let htmlContent = '';

    for (let price = 250; price <= 1000; price += 5) {
        let result = price * 0.2;
        if (price <= maxPrice) {
            htmlContent += `<p class="green">${price} * 0.2 = $${result.toFixed(2)}</p>`;
        } else {
            htmlContent += `<p class="red">${price} * 0.2 = $${result.toFixed(2)}</p>`;
        }
    }
    
    calculations.innerHTML = htmlContent;
};

document.getElementsByClassName('close')[0].onclick = function() {
    var modal = document.getElementById('modal');
    modal.style.display = "none";
};

window.onclick = function(event) {
    var modal = document.getElementById('modal');
    if (event.target === modal) {
        modal.style.display = "none";
    }
};

document.getElementById('openModal').onclick = function() {
    showModal(250, 1000, 0.2, 'maxPriceInput1');
};

document.getElementById('openModal2').onclick = function() {
    showModal(25, 500, 0.25, 'maxPriceInput2');
};

function showModal(startPrice, endPrice, fraction, inputId) {
    var modal = document.getElementById('modal');
    var calculations = document.getElementById('calculations');
    calculations.innerHTML = ''; // Очищення попередніх розрахунків
    modal.style.display = "block";
    
    const maxPrice = parseInt(document.getElementById(inputId).value);
    let htmlContent = '';

    for (let price = startPrice; price <= endPrice; price += 5) {
        let result = price * fraction;
        if (price <= maxPrice) {
            htmlContent += `<p class="green">${price} * ${fraction} = $${result.toFixed(2)}</p>`;
        } else {
            htmlContent += `<p class="red">${price} * ${fraction} = $${result.toFixed(2)}</p>`;
        }
    }
    
    calculations.innerHTML = htmlContent;
};

document.getElementsByClassName('close')[0].onclick = function() {
    var modal = document.getElementById('modal');
    modal.style.display = "none";
};

window.onclick = function(event) {
    var modal = document.getElementById('modal');
    if (event.target === modal) {
        modal.style.display = "none";
    }
};

function calculateAnnualEarnings() {
    const totalCapitalElement = document.getElementById('totalCapital');
    const dailyEarningsElement = document.getElementById('dailyEarnings');
    const resultElement = document.getElementById('annualEarningsResult');

    if (!totalCapitalElement || !dailyEarningsElement) {
        console.error("Element(s) not found in the document.");
        return;
    }

    const totalCapital = parseFloat(totalCapitalElement.value);
    const dailyEarnings = parseFloat(dailyEarningsElement.value);

    if (isNaN(totalCapital) || isNaN(dailyEarnings)) {
        resultElement.innerText = 'Будь ласка, введіть коректні числові значення у обидва поля.';
        return;
    }

    const annualEarnings = (dailyEarnings * 365) / totalCapital * 100;
    resultElement.innerText = `Річний заробіток складає: ${annualEarnings.toFixed(2)}%`;
}
