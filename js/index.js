//Condition for the Using Coupon Code & Get Discount.
document.getElementById('coupon-button').addEventListener('click', function () {
    const new15Coupon = document.getElementById('new15-coupon').innerText;
    const couple20Coupon = document.getElementById('couple20-coupon').innerText;

    const inputValue = document.getElementById('coupon-field').value;
    console.log(inputValue);

    // Condition For Discount.
    let grandTotal = totalPrice;
    if (inputValue != new15Coupon && inputValue != couple20Coupon)
        return alert('Your provided coupon code is not valid. Please provide a valid coupon code.')

    if (inputValue == new15Coupon) {
        totalPrice = totalPrice * (15 / 100);
        grandTotal -= totalPrice;
        document.getElementById('grand-total').innerText = grandTotal.toFixed(2);
    }

    if (inputValue == couple20Coupon) {
        totalPrice = totalPrice * (20 / 100);
        grandTotal -= totalPrice;
        document.getElementById('grand-total').innerText = grandTotal.toFixed(2);
    }


    // Hide the Coupon Field & Coupon Button and show Discount Amount..
    document.getElementById('coupon-div').innerHTML = `
        <h3 class="text-gray-950 text-base font-medium inter-font">Discount</h3>
        <p class="text-gray-950 text-base font-medium inter-font">-BDT : ${totalPrice.toFixed(2)}</p>
    `

    document.getElementById('passenger-name').removeAttribute('disabled');
    document.getElementById('phone-number').removeAttribute('disabled');
    document.getElementById('email-id').removeAttribute('disabled');
})

// Get Phone Number From the Passenger & Enable the Next Button.
document.getElementById('phone-number').addEventListener('input', function (event) {
    const phoneNumber = event.target.value;
    if (phoneNumber.length >= 11)
        document.getElementById('next-button').removeAttribute('disabled');
})

// Reload The Window after Clicking the Continue Button.
document.getElementById('continue-button').addEventListener('click', function () {
    window.location.reload();
})