//Creare una griglia di gioco quadrata, in cui ogni cella contiene un numero 
//tra quelli compresi in un range compreso tra 1 e 100
//Quando l'utente clicca su ogni cella, la cella cliccata si colora di azzurro.

const grid = document.querySelector('.grid');
const columns = 10;
const rows = 10;
const totalSquares = columns * rows;
const allNumberExtract = [];

//creazione quadrati dentro la griglia
for(let i=0; i < totalSquares; i++){
    const square = document.createElement('div');
    square.classList.add('square');
    grid.appendChild(square);
    const numberExtract = numeroUnico(1, 100, allNumberExtract);
    square.innerHTML = numberExtract;
    allNumberExtract.push(numberExtract);

//function click cambio colore
    square.addEventListener('click', function(){
        square.classList.toggle('bg-blue')

    })
}

// numero random in un determinato range
function numeroRandomRange(min, max){
    const range = (max - min) + 1;
    const numeroRandom = Math.floor(Math.random()*range + min);
    return numeroRandom; 
}

//numer unico
function numeroUnico (min, max, used){
    let numeroUnico = numeroRandomRange(min, max);
    while(used.includes(numeroUnico)){
        numeroUnico = numeroRandomRange(min, max);
    }
    return numeroUnico;
}



