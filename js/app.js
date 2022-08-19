/**
 * add event listener to phone plus button
 * 
 */


document.getElementById('btn-phone-plus').addEventListener('click', function () {
    const phoneNumberTotal = updatePhoneNumber('phone-number', true);
    updateTotalPrice(phoneNumberTotal, 1219, 'phone-total');
    subTotal('phone-total', 'case-total', 'subtotal');
    
})

document.getElementById('btn-phone-minus').addEventListener('click', function () {
    const phoneNumberTotal = updatePhoneNumber('phone-number', false);
    updateTotalPrice(phoneNumberTotal, 1219, 'phone-total');
    subTotal('phone-total', 'case-total', 'subtotal');
})