

// ===================================Purchase ticket starts==========================================

const processPurchase = (event) => {
    event.preventDefault();

    const ticketType = document.getElementById('ticket-type').value;
    const quantity = parseInt(document.getElementById('quantity').value);
    const creditCard = document.getElementById('credit-card').value;

    if (!ticketType || quantity < 1 || creditCard.length !== 6 || isNaN(quantity)) {
        alert('Please fill in all required fields with valid information.');
        return false;
    }

    if (!creditCard.trim()) {
        alert('Credit card details are required.');
        return false;
    }

    const pricePerTicket = (ticketType === 'onedayticket') ? 95.00 : 199.00;
    const subtotal = quantity * pricePerTicket;
    const tax = 0.13 * subtotal;
    const finalPrice = subtotal + tax;

    document.getElementById('order-summary').innerHTML = `
        <p>Number of tickets:<strong> ${quantity}</strong></p>
        <p>Price per ticket: <strong>$${pricePerTicket.toFixed(2)}</strong></p>
        <p>Subtotal: <strong>$${subtotal.toFixed(2)}</strong></p>
        <p>Tax (13%): <strong>$${tax.toFixed(2)}</strong></p>
        <p>Final Price: <strong>$${finalPrice.toFixed(2)}</strong></p>
    `;

    document.getElementById('order-summary-section').style.display = 'flex';

    return false;
};


document.getElementById('purchase-form').addEventListener('submit', processPurchase);

// ==================================Purchase Ticket ends==============================