

// RECUPERO IL PARENT
const wrapperContainer = document.querySelector('div.grid-container');

// CREO IL QUADRATO 100 VOLTE

for (let i = 1; i <= 100; i++){

    const newSquare = squareCreation(i);

    // AGGIUNGO IL DIV AL PARENT
    wrapperContainer.appendChild(newSquare);

}

// FUNZIONE PER CREARE IL QUADRATO

function squareCreation (content){
    // CREO IL DIV
    const newSquare = document.createElement('div');

    // ATTRIBUISCO LE PROPRIETA CHE VOLUTE
    newSquare.classList.add('square', 'd-flex');
    
    // AGGIUNGO IL NUMERO DELLA CASELLA
    newSquare.innerHTML = `<span class="m-auto"> ${content} </span>`;

    // TRA CUI UN COMPORTAMENTO AL CLICK
    newSquare.addEventListener("click", function(){

        // aggiungo la classe per colorarlo di azzurro
        newSquare.classList.toggle('clicked');
    });

    return newSquare;
} 