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
    

    function mostraPosti(postiCinema: Posti[]): void {
        const divCinema = document.querySelector('.cinema');
        if (divCinema) {
            const content = postiCinema.map(element => {
                if (Array.isArray(element.numero)) {
                    const postiHTML = element.numero.map(numero => {
                        return `<span class="posto" data-fila="${element.fila}" data-numero="${numero}">${numero}</span>`;
                    }).join('');
                    return `
                        <div class="fila">
                            <span class="etichetta-fila">${element.fila}</span>
                            <div class="posti">${postiHTML}</div>
                        </div>
                    `;
                } 
            }).join('');
    
            divCinema.innerHTML = content;
            aggiungiEventListenerPosti();
        }
    }
    
    
    function aggiungiEventListenerPosti() {
        const posti = document.querySelectorAll('.posto');
        posti.forEach(posto => {
            posto.addEventListener('click', () => {
                const fila = posto.getAttribute('data-fila');
                const numero = posto.getAttribute('data-numero');
                
                // Cambia il colore del posto
                posto.classList.toggle('selezionato');
                
                // Aggiungi o rimuovi il posto dal carrello
                aggiornaCarrello(fila, numero, posto.classList.contains('selezionato'));
            });
        });
    }
    
    function aggiornaCarrello(fila: string | null, numero: string | null, aggiungere: boolean) {
        const carrelloLista = document.getElementById('carrelloLista') as HTMLUListElement;
        const carrelloTotale = document.querySelector('.carrello span');
        const prezzoPosto = 5; // Ad esempio, il prezzo di ogni posto è 5€
    
        // Verifica il posto da aggiungere o rimuovere
        console.log(`Aggiungere: ${aggiungere}, Fila: ${fila}, Numero: ${numero}`);
    
        // Se il posto è selezionato, aggiungilo al carrello
        if (aggiungere) {
            const carrelloItem = document.createElement('li');
            carrelloItem.textContent = `Fila ${fila}, Posto ${numero}`;
            carrelloLista.appendChild(carrelloItem);
            console.log(`Posto aggiunto: Fila ${fila}, Posto ${numero}`);
        } else {
            // Se il posto non è selezionato, rimuovilo dal carrello
            const items = carrelloLista.querySelectorAll('li');
            items.forEach(item => {
                if (item.textContent === `Fila ${fila}, Posto ${numero}`) {
                    carrelloLista.removeChild(item);
                    console.log(`Posto rimosso: Fila ${fila}, Posto ${numero}`);
                }
            });
        }
    
        // Aggiorna il totale
        const numPostiSelezionati = carrelloLista.querySelectorAll('li').length;
        console.log(`Posti selezionati: ${numPostiSelezionati}`);
        if (numPostiSelezionati > 0) {
            carrelloTotale!.textContent = `Totale: €${numPostiSelezionati * prezzoPosto}`;
        } else {
            carrelloTotale!.textContent = `Totale: €`;
        }
    }
    

    
    // CSS per la selezione del posto
    const style = document.createElement('style');
    style.innerHTML = `
        .posto.selezionato {
            background-color: blue;  /* Colore di selezione */
        }
    `;
    document.head.appendChild(style);