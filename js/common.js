function isNumber(string) {

    for (let ch of string) {
        if (ch >= '0' && ch <= '9')
            continue;
        else
            return false;
    }
    return true;
}

function getInputValueByID(id) {
    const inputValue = document.getElementById(id).value;
    const inputNumber = parseFloat(inputValue);
    return inputNumber;
}

function getTextValueByID(id) {
    const textValue = document.getElementById(id).innerText;
    const textNumber = parseFloat(textValue);
    return textNumber;
}


let selectedSeat = [];
let totalPrice = 0;
function ticketButton(event) {

    // One Ticket Will Be Purchased One time.
    const ticketValue = event.innerText;
    if (selectedSeat.includes(ticketValue))
        return alert("Seat already booked.");

    // Condition About How Many Seats Can be Bokked in One Time.
    selectedSeat.push(event.innerText);
    if (selectedSeat.length > 4)
        return alert('Booked more than 4 seats not possible at once time.');


    // Change Button Colors and Background.
    event.classList.add('bg-[#1DD100]');
    event.classList.add('text-white');

    // Selected Seats Increase.
    document.getElementById('count-seat').innerText = selectedSeat.length;

    // Total Available Seats Decrease.
    let availableSeats = getTextValueByID('available-seats');
    console.log(availableSeats);
    availableSeats--;
    document.getElementById('available-seats').innerText = availableSeats;


    // Add Description About Seat Booked.
    const seatNumber = event.innerText;
    document.getElementById('initial-seat-booked').classList.add('hidden');
    document.getElementById('selected-seat').innerHTML += `
     <li class = "text-gray-950/60 text-base inter-font flex justify-between"> 
     <p> ${seatNumber} </p>
     <p> Business </p>
     <p> 1500 </p>
     </li>
    `

    // Update the Total Price.
    totalPrice += 1500;
    document.getElementById('total-price').innerText = totalPrice.toFixed(2);


    // Enable Coupon Button.
    if (selectedSeat.length == 4) {
        document.getElementById('coupon-field').removeAttribute('disabled');
        document.getElementById('coupon-button').removeAttribute('disabled');
    }

}
