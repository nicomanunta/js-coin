// Trova l'elemento del bottone, del paragrafo del risultato e della moneta
const flipButton = document.getElementById('flipButton');
const result = document.getElementById('result');
const coin = document.getElementById('coin');

// Aggiungi un evento click al bottone
flipButton.addEventListener('click', () => {
    // Rimuovi il risultato precedente
    result.textContent = '...';

    // Aggiungi la classe 'flip' per far partire l'animazione
    coin.classList.add('flip');

    // Dopo 2 secondi (tempo dell'animazione), mostra il risultato
    setTimeout(() => {
        // Funzione che genera un numero casuale tra 0 e 1
        const random = Math.random();
        
        // Se il numero casuale è minore di 0.5, è "Testa", altrimenti è "Croce"
        if (random < 0.5) {
            result.textContent = 'Testa';
            coin.style.backgroundImage = "url('img/front.png')";
        } else {
            result.textContent = 'Croce';
            coin.style.backgroundImage = "url('img/reverse.png')";
        }

        // Rimuovi la classe 'flip' per poter rilanciare la moneta
        coin.classList.remove('flip');
    }, 2000); // L'animazione dura 2 secondi
});
