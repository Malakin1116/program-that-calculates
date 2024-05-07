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
        document.getElementById(outputId).innerText = `Please enter a valid price between $${startPrice} and $${endPrice}.`;
        return;
    }

    const sum = calculateSum(startPrice, maxPrice, 5, fraction);
    document.getElementById(outputId).innerText = `Calculated sum from $${startPrice} to $${maxPrice} is: $${sum}`;
}

window.onload = function() {
    // If needed, implement localStorage retrieval here for both outputs
}
