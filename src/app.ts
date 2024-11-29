type Immagini = {
    titolo : string,
     immagine: string, 
}


async function fetchImmagini() {
  try {
      const response = await fetch('http://localhost:3000/immagini'); // Endpoint per immagini
      if (!response.ok) throw new Error('Errore nel recupero delle immagini');
      const immagini: Immagini[] = await response.json();

      const imageGrid = document.getElementById('imageGrid');
      if (imageGrid) {
          immagini.forEach((immagine) => {
              const imageHTML = `
                  <div class="frame mb-3" style="width: 30rem;">
                      <div class="inner-content">
                          <img class="immagine" style="width: 100%;object-fit: cover" src=${immagine.immagine} alt="">
                      </div>
                      <div class="hover-card">
                          <button class="btn btn-outline-warning" style="width: 50%;margin-top: 65%">Scheda</button>
                          <button class="btn btn-outline-warning" style="width: 50%;margin-bottom: 10%">Acquista</button>
                      </div>
                  </div>
              `;
              imageGrid.innerHTML += imageHTML;
          });
      }
  } catch (error) {
      console.error('Errore nel caricamento delle immagini:', error);
  }
}

// Chiamata alla funzione
fetchImmagini();


interface Film {
  titolo: string;
  anno: number;
  genere: string;
  regia: string;
  cast: string;
  durata: number;
  immagineLocandina: string;
}

async function fetchFilms() {
  try {
      const response = await fetch('http://localhost:3000/film'); // Endpoint per films
      if (!response.ok) throw new Error('Errore nel recupero dei film');
      const films: Film[] = await response.json();

      const filmsContainer = document.getElementById('films');
      if (filmsContainer) {
          films.forEach(film => {
              const filmCard = document.createElement('div');
              filmCard.innerHTML = `
                  <div class="locandineFilm card-body m-4" style="display: flex; align-items: center;border: 1px solid white;">
                      <div class="img-locandina m-5 p-2" style="width:10%; height:7%;">
                          <img src="${film.immagineLocandina}" alt="${film.titolo}" style="width: 100%;">
                      </div>
                      <div style="width: 70%; padding-left: 10px; padding:20px; display: flex; flex-direction: column; justify-content: start;">
                          <div class="text ml-5 p-5" style="margin-left:20px">
                              <p style="text-align: left;"><strong>${film.titolo}</strong></p>
                              <p style="text-align: left;"><strong>Anno:</strong> ${film.anno}</p>
                              <p style="text-align: left;"><strong>Genere:</strong> ${film.genere}</p>
                              <p style="text-align: left;"><strong>Regia:</strong> ${film.regia}</p>
                              <p style="text-align: left;"><small>Durata: ${film.durata} min</small></p>
                              <p style="text-align: left;"><small><strong>Cast:</strong> ${film.cast}</small></p>
                          </div>
                          <div class="p-5">
                              <button class="btn btn-outline-warning m-2">18:00</button>
                              <button class="btn btn-outline-warning m-2">20:00</button>
                              <button class="btn btn-outline-warning m-2">22:00</button>
                              <button class="btn btn-outline-warning m-2">00:00</button>
                              <button class="btn btn-outline-warning m-2">02:00</button>
                          </div>
                      </div>
                  </div>
              `;
              filmsContainer.appendChild(filmCard);
          });
      }
  } catch (error) {
      console.error('Errore nel caricamento dei film:', error);
  }
}

// Chiamata alla funzione
fetchFilms();


console.log("ciao")