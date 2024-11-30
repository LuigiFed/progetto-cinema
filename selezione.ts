// Funzione per mostrare i film nel contenitore
function mostraFilm(filmFiltrati: any[]) {
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
    filmFiltrati.forEach((film: { immagineLocandina: any; titolo: any; anno: any; genere: any; regia: any; durata: any; cast: any; }) => {
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
async function fetchFilmByGenere(genere: string): Promise<void> {
    try {
        console.log(`Tentativo di fetch per genere: ${genere}`);
        const response = await fetch("http://localhost:3000/film");
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const film = await response.json();

        console.log("Film ricevuti dal server:", film); // Log dei dati dal server

        // Filtra i film per genere
        const filmFiltrati = film.filter((f: { genere: string }) => {
            // Verifica se il genere selezionato è presente tra i generi del film
            const generi = f.genere.toLowerCase().split(',').map(g => g.trim()); // Separare i generi
            return generi.includes(genere.toLowerCase()); // Controlla se il genere selezionato è tra quelli del film
        });

        console.log(`Film filtrati per genere "${genere}":`, filmFiltrati); // Log dei film filtrati

        // Mostra i film filtrati
        mostraFilm(filmFiltrati);
    } catch (error) {
        console.error("Errore nel filtrare i film:", error);
    }
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
    } else {
        console.error("Elemento 'genere-menu' non trovato nel DOM.");
    }
});
