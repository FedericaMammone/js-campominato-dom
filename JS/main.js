const gridElement = document.getElementById("grid")
console.log(gridElement);

const bottone = document.getElementById('bottone');
console.log(bottone);



arrayNumRandBombe = createNumRandBombe(16);
let numeroCelle = 100;


// aggiungere evento al bottone
bottone.addEventListener('click',
function () {
// quindi al click deve comparire la griglia
    document.getElementById('grid').classList.add("active")
    
    
    console.log(arrayNumRandBombe);

    }
)


// const arrayNumRandBombe = Math.floor(Math.random() * 100);
//     console.log(numeroBombe);



//  const arrayNumRandBombe = Math.floor(Math.random([i]) * 16);
//  console.log(numeroBombe);


// creiamo i numeri ciclandoli
for (let i = 1; i <= numeroCelle; i++) {


    const newSquare = createGridSquare();

// aggiunge ulteriore evento al click dello square
    newSquare.addEventListener("click",

    // quando l'utente clicca sul quadrato diventa blue e in console compare il numero selezionato
        function () {
            newSquare.classList.add("blue-click");
            console.log(i);
        }
    )
    // aggiungiamo all'html i quadrati e i numeri nei quadrati
    gridElement.append(newSquare);
    newSquare.append(i);
}










// FUNZIONI

// creazione span con classe square
function createGridSquare() {
    const newElement = document.createElement("span");
    newElement.classList.add("square");
    return newElement;
}

// funzione che crea un array di numeri casuali in un range   
function createNumRandBombe(numeroCelle) {
    const arrayNumRandBombe = [];
    while(arrayNumRandBombe.length < 16) {
        const nuovoNum = numRandomMinMax(1,numeroCelle)
        if(!arrayNumRandBombe.includes(nuovoNum)){
            arrayNumRandBombe.push(nuovoNum)
        }
    }
    console.log(arrayNumRandBombe);
}

function numRandomMinMax(numeroCelle) {
    return Math.floor(Math.random() * (numeroCelle - min +1) + min);
    
}

console.log(numRandomMinMax);