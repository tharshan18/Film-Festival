let movies = [
    {
        title: "Inception",
        trailer: "./media/inception.mp4",
        times: ["10:00 AM", "2:00 PM", "7:30 PM"],
        genre: "Sci-Fi",
        director: "Christopher Nolan",

    },
    {
        title: "Transformers The Last Knight",
        trailer: "./media/transformers.mp4",
        times: ["11:30 AM", "3:15 PM", "10:00 PM"],
        genre: "Sci-fi Action",
        director: "Michael Bay",

    },
    {
        title: "La La Land",
        trailer: "./media/lalaland.mp4",
        times: ["11:30 AM", "4:15 PM", "9:00 PM"],
        genre: "Musical",
        director: "Damien Chazelle",

    },

];

function populateMovies() {
    let moviesContainer = document.getElementById("movies-container");

    for (let i = 0; i < movies.length; i++) {
        let movie = movies[i];
        let movieDiv = document.createElement("div");

        movieDiv.className = "movie";

        movieDiv.innerHTML += `<iframe width="560" height="315" src="${movie.trailer}" frameborder="0" allowfullscreen></iframe>`;
        movieDiv.innerHTML += `<h2>${movie.title}</h2>`;
        movieDiv.innerHTML += `<p>Showtimes: ${movie.times.join(', ')}</p>`;
        movieDiv.innerHTML += `<p>Genre: ${movie.genre}</p>`;
        movieDiv.innerHTML += `<p>Director: ${movie.director}</p>`;

        // Added "Buy Ticket" button that redirects to a new page with blank source
        movieDiv.innerHTML += `<button onclick="buyTicket('${movie.title}')">Buy Ticket</button>`;

        moviesContainer.appendChild(movieDiv);
    }
}

function buyTicket(movieTitle) {
    window.location.href = 'buy-tickets-form.html';
}

populateMovies();