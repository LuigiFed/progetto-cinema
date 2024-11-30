"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
// Funzione per mostrare i film nel contenitore
function mostraFilm(filmFiltrati) {
    const filmContainer = document.getElementById("film-container");
    if (!filmContainer) {
        console.error("Film container non trovato");
        return; // Interrompe l'esecuzione se il contenitore non esiste
    }
    filmContainer.innerHTML = ""; // Pulisce il contenitore
    if (filmFiltrati.length === 0) {
        // Mostra un messaggio se non ci sono film
        filmContainer.innerHTML = "<p>Nessun film trovato per il genere selezionato.</p>";
        return;
    }
    // Creazione dinamica dei film
    filmFiltrati.forEach((film) => {
        const filmElement = document.createElement("div");
        filmElement.className = "film-card";
        filmElement.innerHTML = `
        <img src="${film.immagineLocandina}" alt="${film.titolo}" style="width: 100%; max-width: 200px;" />
        <h3>${film.titolo}</h3>
      `;
        filmContainer.appendChild(filmElement); // Aggiunge il film al contenitore
    });
}
// Fetch e filtro per genere
function fetchFilmByGenere(genere) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            console.log(`Tentativo di fetch per genere: ${genere}`);
            const response = yield fetch("http://localhost:3000/film");
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            const film = yield response.json();
            console.log("Film ricevuti dal server:", film); // Log dei dati dal server
            // Filtra i film per genere
            const filmFiltrati = film.filter((f) => {
                // Verifica se il genere selezionato è presente tra i generi del film
                const generi = f.genere.toLowerCase().split(',').map(g => g.trim()); // Separare i generi
                return generi.includes(genere.toLowerCase()); // Controlla se il genere selezionato è tra quelli del film
            });
            console.log(`Film filtrati per genere "${genere}":`, filmFiltrati); // Log dei film filtrati
            // Mostra i film filtrati
            mostraFilm(filmFiltrati);
        }
        catch (error) {
            console.error("Errore nel filtrare i film:", error);
        }
    });
}
// Aggiunge l'event listener ai generi
document.addEventListener("DOMContentLoaded", () => {
    const genereMenu = document.getElementById("genere-menu");
    if (genereMenu) {
        genereMenu.addEventListener("click", (event) => {
            if (event.target instanceof HTMLElement && event.target.matches(".dropdown-item")) {
                const genereSelezionato = event.target.getAttribute("data-genere");
                if (genereSelezionato) {
                    fetchFilmByGenere(genereSelezionato);
                }
            }
        });
    }
    else {
        console.error("Elemento 'genere-menu' non trovato nel DOM.");
    }
});
