
document.getElementById('btn-phone-plus').addEventListener('click', function () {
    const phoneNumberTotal = updatePhoneNumber('phone-number', true);
    updateTotalPrice(phoneNumberTotal, 1219, 'phone-total');
    subTotal('phone-total', 'case-total', 'subtotal');

    const subTotalAmount = subTotal('phone-total', 'case-total', 'subtotal');
    taxAmount('tax-total', 0.15, subTotalAmount);

    const taxTotalAmount = taxAmount('tax-total', 0.15, subTotalAmount);
    console.log(taxTotalAmount);
    total(subTotalAmount, taxTotalAmount, 'total');
})

document.getElementById('btn-phone-minus').addEventListener('click', function () {
    const phoneNumberTotal = updatePhoneNumber('phone-number', false);
    updateTotalPrice(phoneNumberTotal, 1219, 'phone-total');
    subTotal('phone-total', 'case-total', 'subtotal');

    const subTotalAmount = subTotal('phone-total', 'case-total', 'subtotal');
    taxAmount('tax-total', 0.15, subTotalAmount)

    const taxTotalAmount = taxAmount('tax-total', 0.15, subTotalAmount);
    console.log(taxTotalAmount);
    total(subTotalAmount, taxTotalAmount, 'total');
})

document.getElementById('btn-remove').addEventListener('click', function () {
    const phoneSection = document.getElementById('phone-section');

    // first way(remove element permanently)
    // const phoneParentNode = phoneSection.parentNode;
    // phoneParentNode.removeChild(phoneSection);

    // second way(display none only )
    phoneSection.style.display = 'none';
})