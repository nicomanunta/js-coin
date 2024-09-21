// elementi del bottone, del risultato e della moneta
let flipButton = document.getElementById('flipButton');
let result = document.getElementById('result');
let coin = document.getElementById('coin');

// aggiungo un evento click al bottone
flipButton.addEventListener('click', () => {
    // rimuovo il risultato precedente
    result.textContent = '...';

    // aggiungo la classe 'flip' per far partire l'animazione
    coin.classList.add('flip');

    // dopo 2 secondi (tempo dell'animazione) mostro il risultato
    setTimeout(() => {
        // genero un numero casuale tra 0 e 1
        let random = Math.random();
        
        // se il numero casuale è minore di 0.5, è "Testa", altrimenti è "Croce"
        if (random < 0.5) {
            result.textContent = 'Testa!';
            coin.style.backgroundImage = "url('img/front.png')";
        } else {
            result.textContent = 'Croce!';
            coin.style.backgroundImage = "url('img/reverse.png')";
        }

        // rimuovo la classe 'flip' per poter rilanciare la moneta
        coin.classList.remove('flip');
    }, 3000); // animazione di 2 sec
});
