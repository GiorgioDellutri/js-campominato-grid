

// RECUPERO IL PARENT
const wrapperContainer = document.querySelector('div.grid-container');

// CREO IL QUADRATO 100 VOLTE

for (let i = 0; i < 100; i++){
    // CREO IL DIV
const newSquare = document.createElement('div');

// ATTRIBUISCO LE PROPRIETA CHE VOLUTE
newSquare.classList.add('square');

// AGGIUNGO IL DIV AL PARENT
wrapperContainer.appendChild(newSquare);

}
