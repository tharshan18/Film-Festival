function buyTickets() {
    window.location.href = "buy-tickets-form.html";
}

const map = L.map('map').setView([43.6548, -79.3802], 13);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

L.marker([43.6548, -79.3802]).addTo(map)
    .bindPopup("<b>Toronto Eaton Centre</b><br>Located here!").openPopup();

