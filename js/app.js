/**
 * add event listener to phone plus button
 * 
 */


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