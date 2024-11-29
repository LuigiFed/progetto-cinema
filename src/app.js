// Array delle immagini con il tipo specificato
var immagini = [
    { titolo: "La storia infinita", immagine: "assets/Artax-e-Atreju.jpg" },
    { titolo: "Igor", immagine: "assets/igor.avif" },
    { titolo: "Doc", immagine: "assets/Doc.png" },
    { titolo: "Marinelli Borghi", immagine: "assets/Marinelli-Borghi.jpeg" },
    { titolo: "Santa Marinelli", immagine: "assets/Santa-Marinelli.jpg" }
];
function createImageGrid() {
    var imageGrid = document.getElementById('imageGrid');
    if (imageGrid) {
        immagini.forEach(function (immagine) {
            var imageHTML = "\n                <div class=\"film\" >\n                    <div class=\"card \" style=\"width: 30rem;\">\n                        <img style=\"width: 100%;height: 300px;\" src=\"".concat(immagine.immagine, "\" alt=\"").concat(immagine.titolo, "\">\n                     <div class=\"card-body\" style=\"color: darkgoldenrod\">\n                        <h5 class=\"card-title text-center\" style=\"flex-grow: 1; text-align: center;\">").concat(immagine.titolo, "</h5>\n                        <button type=\"button\" class=\"btn btn-warning w-1 m-1\" style=\"width: 25%;\">Acquista</button>\n                    </div>\n                    </div>\n                </div>\n            ");
            imageGrid.innerHTML += imageHTML;
        });
    }
}
// Chiamata della funzione per costruire la griglia di immagini
createImageGrid();
var films = [
    {
        titolo: "Frankenstein Junior",
        anno: 1974,
        genere: "Comico, Fantascienza",
        regia: "Mel Brooks",
        cast: "Gene Wilder,Peter Boyle,Marty Feldman,Cloris Leachman,Teri Garr,Kenneth Mars,Madeline Kahn",
        durata: 105,
        immagineLocandina: "assets/frankenstein junior.jpg",
    },
    {
        titolo: "Gatto nero e bianco",
        anno: 1998,
        genere: "Commedia, Drammatico",
        regia: "Emir Kusturica",
        cast: "Bajram Severdzan, Srdjan Todorovic, Branka Katic",
        durata: 127,
        immagineLocandina: "assets/gatto nero gatto bianco.jpg",
    },
    {
        titolo: "Il castello errante di Howl",
        anno: 2004,
        genere: "Animazione, Fantasy, Avventura",
        regia: "Hayao Miyazaki",
        cast: "Chieko Baisho, Takuya Kimura, Akihiro Miwa (doppiatori giapponesi)",
        durata: 119,
        immagineLocandina: "assets/il castello errante.jpg",
    },
    {
        titolo: "Il Marchese del Grillo",
        anno: 1981,
        genere: "Commedia, Storico",
        regia: "Mario Monicelli",
        cast: "Alberto Sordi, Paolo Stoppa, Caroline Berg",
        durata: 135,
        immagineLocandina: "assets/il marchese del grillo.jpeg",
    },
    {
        titolo: "L'odio",
        anno: 1995,
        genere: "Drammatico, Sociale",
        regia: "Mathieu Kassovitz",
        cast: "Vincent Cassel, Hubert Koundé, Saïd Taghmaoui",
        durata: 98,
        immagineLocandina: "assets/l'odio.jpg",
    },
    {
        titolo: "La Storia Infinita",
        anno: 1984,
        genere: "Fantasy, Avventura",
        regia: "Wolfgang Petersen",
        cast: "Barret Oliver, Noah Hathaway, Tami Stronach",
        durata: 102,
        immagineLocandina: "assets/la storia infinita.jpg",
    },
    {
        titolo: "Non essere cattivo",
        anno: 2015,
        genere: "Drammatico, Crime",
        regia: "Claudio Caligari",
        cast: "Luca Marinelli, Alessandro Borghi, Silvia D'Amico",
        durata: 100,
        immagineLocandina: "assets/non essere cattivo.jpg",
    },
    {
        titolo: "Pretty Woman",
        anno: 1990,
        genere: "Commedia romantica",
        regia: "Garry Marshall",
        cast: "Richard Gere, Julia Roberts, Ralph Bellamy",
        durata: 119,
        immagineLocandina: "assets/pretty woman.jpg",
    },
    {
        titolo: "The Goonies",
        anno: 1985,
        genere: "Avventura, Commedia",
        regia: "Richard Donner",
        cast: "Sean Astin, Josh Brolin, Corey Feldman",
        durata: 114,
        immagineLocandina: "assets/the goonies.jpg",
    },
    {
        titolo: "Ritorno al futuro",
        anno: 1985,
        genere: "Fantascienza, Avventura",
        regia: "Robert Zemeckis",
        cast: "Michael J. Fox, Christopher Lloyd, Lea Thompson",
        durata: 116,
        immagineLocandina: "assets/ritorno al futuro.jpg",
    },
];
var orari = {
    orario1: "18:00",
    orario2: "20:00",
    orario3: "22:00",
    orario4: "00:00",
    orario5: "02:00"
};
function displayFilms() {
    var filmsContainer = document.getElementById('films');
    if (filmsContainer) {
        films.forEach(function (film) {
            var filmCard = document.createElement('div');
            filmCard.innerHTML = "\n                                <div class=\"locandineFilm card-body m-4\" style=\"display: flex; align-items: center;border: 1px solid white;\">\n                                <div class=\"img-locandina m-5 p-2\"  style=\"width:10%; height:7%;\" >\n                                    <img src=\"".concat(film.immagineLocandina, "\" alt=\"").concat(film.titolo, "\" style=\"width: 100%;\">\n                                </div>\n                    <div style=\"width: 40%;padding-left: 10px;display: flex;flex-direction: column;justify-content: start;\">\n                        <div class=\"text m-2\" style=\"text-align: left;margin-left:20px\">\n                            <p style=\"text-align: left;\"><strong>").concat(film.titolo, "</strong></p>\n                            <p style=\"text-align: left;\"><strong>Anno:</strong> ").concat(film.anno, "</p>\n                            <p style=\"text-align: left;\"><strong>Genere:</strong> ").concat(film.genere, "</p>\n                            <p style=\"text-align: left;\"><strong>Regia:</strong> ").concat(film.regia, "</p>\n                            <p style=\"text-align: left;\"><small>Durata: ").concat(film.durata, " min</small></p>\n                            <p style=\"text-align: left;\"><small><strong>Cast:</strong> ").concat(film.cast, "</small></p>\n                        </div>\n                      <div class=\"m-2\" >\n                            <button class=\"btn btn-warning orari m-2\"> ").concat(orari.orario1, "</button>\n                            <button class=\"btn btn-warning orari m-2\">").concat(orari.orario2, "</button>\n                            <button class=\"btn btn-warning orari m-2\">").concat(orari.orario3, "</button>\n                            <button class=\"btn btn-warning orari m-2\">").concat(orari.orario4, "</button>\n                            <button class=\"btn btn-warning orari m-2\">").concat(orari.orario5, "</button>\n                        </div>\n                    </div>\n                </div>\n\n              ");
            filmsContainer.appendChild(filmCard);
        });
    }
}
displayFilms();

