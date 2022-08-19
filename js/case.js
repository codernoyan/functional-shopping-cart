
document.getElementById('btn-case-plus').addEventListener('click', function () {
    const phoneNumberTotal = updatePhoneNumber('case-number', true);
    updateTotalPrice(phoneNumberTotal, 59, 'case-total');
    subTotal('phone-total', 'case-total', 'subtotal');

    const subTotalAmount = subTotal('phone-total', 'case-total', 'subtotal');
    taxAmount('tax-total', 0.15, subTotalAmount);

    const taxTotalAmount = taxAmount('tax-total', 0.15, subTotalAmount);
    console.log(taxTotalAmount);
    total(subTotalAmount, taxTotalAmount, 'total');
})

document.getElementById('btn-case-minus').addEventListener('click', function () {
    const phoneNumberTotal = updatePhoneNumber('case-number', false);
    updateTotalPrice(phoneNumberTotal, 59, 'case-total');
    subTotal('phone-total', 'case-total', 'subtotal');

    const subTotalAmount = subTotal('phone-total', 'case-total', 'subtotal');
    taxAmount('tax-total', 0.15, subTotalAmount)

    const taxTotalAmount = taxAmount('tax-total', 0.15, subTotalAmount);
    console.log(taxTotalAmount);
    total(subTotalAmount, taxTotalAmount, 'total');
})

document.getElementById('btn-delete').addEventListener('click', function () {
    const phoneSection = document.getElementById('case-section');

    // first way(remove element permanently)
    // const phoneParentNode = phoneSection.parentNode;
    // phoneParentNode.removeChild(phoneSection);

    // second way(display none only )
    phoneSection.style.display = 'none';
})