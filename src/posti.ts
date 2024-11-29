type Posti = {
    fila: string,
    numero: number[],
};
fetch('http://localhost:3000/posti')
    .then(response => response.json())
    .then(data => {
        console.log(data);  // Aggiungi un log per vedere la struttura dei dati
        mostraPosti(data);
    })
    .catch(error => console.error('Errore nella richiesta fetch:', error));
    function mostraPosti(postiCinema: Posti[]): void {
        const divCinema = document.querySelector('.cinema');
        if (divCinema) {
            const content = postiCinema.map(element => {
                if (Array.isArray(element.numero)) {
                    const postiHTML = element.numero.map(numero => `<span class="posto">${numero}</span>`).join('');
                    return `
                        <div class="fila">
                            <span class="etichetta-fila">${element.fila}</span>
                            <div class="posti">${postiHTML}</div>
                        </div>
                    `;
                } 
            }).join('');
    
            divCinema.innerHTML = content;
        }
    }
    
