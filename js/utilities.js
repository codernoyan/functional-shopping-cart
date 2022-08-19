function updatePhoneNumber(elementId, isIncrease) {
    const phoneNumberField = document.getElementById(elementId);
    const phoneNumberValueString = phoneNumberField.value;
    const previousPhoneNumberValue = parseInt(phoneNumberValueString);

    let newPhoneNumber;
    if (isIncrease) {
        newPhoneNumber = previousPhoneNumberValue + 1;
    } else {
        newPhoneNumber = previousPhoneNumberValue - 1;
    }
    phoneNumberField.value = newPhoneNumber;
    return newPhoneNumber;
}

function getTextElementValueById(elementId) {
    const elementText = document.getElementById(elementId);
    const elementValueString = elementText.innerText;
    const elementValue = parseInt(elementValueString);
    return elementValue;
}

function setTextElementValueById(elementId, newValue) {
    const elementText = document.getElementById(elementId);
    elementText.innerText = newValue;
}

function updateTotalPrice(productNumber, productRate, elementId) {
    const totalPrice = productNumber * productRate;
    setTextElementValueById(elementId, totalPrice);
}

// calculate subtotal
function subTotal(phoneId, caseId, subTotalId) {
    const phoneTotal = getTextElementValueById(phoneId);
    const caseTotal = getTextElementValueById(caseId);

    const subTotal = phoneTotal + caseTotal;
    setTextElementValueById(subTotalId, subTotal);
    return subTotal;
}

function taxAmount(taxId, taxRate, subtotal) {
    const taxAmountString = (subtotal * taxRate).toFixed(2);
    const taxTotal = parseFloat(taxAmountString);
    setTextElementValueById(taxId, taxTotal);
    return taxTotal;
}

function total(subTotal, taxAmount, totalId) {
    const totalAmount = subTotal + taxAmount;
    setTextElementValueById(totalId, totalAmount)
}