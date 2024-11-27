"use strict";
const postiCinema = [
    { fila: 'A', numero: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20] },
    { fila: 'B', numero: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20] },
    { fila: 'C', numero: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20] },
    { fila: 'D', numero: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20] },
    { fila: 'E', numero: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20] },
    { fila: 'F', numero: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20] },
    { fila: 'G', numero: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20] },
    { fila: 'H', numero: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20] },
    { fila: 'I', numero: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20] },
    { fila: 'J', numero: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20] },
];
function mostraPosti() {
    const divCinema = document.querySelector('.cinema');
    if (divCinema) {
        postiCinema.forEach(element => {
            // Genero il contenuto HTML per ogni fila
            const str = `
                  <div class="fila">
                    <span class="etichetta-fila">${element.fila}</span>
                    <div class="posti">
                        ${element.numero.map(numero => `<span class="posto">${numero}</span>`).join('')}
                    </div>
                     
            `;
            // Aggiungo il contenuto HTML al contenitore
            divCinema.innerHTML += str;
        });
    }
}
// Eseguo la funzione per mostrare i posti
mostraPosti();
