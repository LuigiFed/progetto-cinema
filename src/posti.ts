import axios from "axios";

type Posti = {
    fila : string,
    numero : number[], 
}


window.onload = async () => {
    try {
        // Effettua la chiamata con axios per ottenere i dati
        const response = await axios.get("http://localhost:3000/prenotazioni");
        const postiCinema = response.data; // Ottieni i dati dalla risposta
        
        // Passa i dati alla funzione per mostrare i posti
        mostraPosti(postiCinema);
    } catch (error) {
        console.error("Errore durante il recupero dei dati:", error);
    }
}

function mostraPosti(postiCinema: Posti[]): void {
    const divCinema = document.querySelector('.cinema');
    if (divCinema) {
        postiCinema.forEach(element => {
            const str = `
                <div class="fila">
                    <span class="etichetta-fila">${element.fila}</span>
                    <div class="posti">
                        ${element.numero.map(numero => `<span class="posto">${numero}</span>`).join('')}
                    </div>
                </div>
            `;
            divCinema.innerHTML += str;
        });
    }
}



