const tablero = document.querySelectorAll('li');
const buttomRestar = document.querySelector('.restart');

let idNumber = 0;
let tablePosition = [];

const agregarId = () => {

    for (el of tablero) {
        el.className += idNumber;
        idNumber;
        idNumber++;
    }    
};

agregarId();

let gameTurn = 0;

const makeMove = (elem) => {

    if(elem.target.innerText === '') {

        const jugada = elem.target.parentNode.className;

        if(gameTurn === 0) {
            elem.target.innerText = 'X';
            gameTurn = 1;
            tablePosition[jugada] = 'X';
            detectWiner(tablePosition);
            return;
        };

        if(gameTurn === 1) {
            elem.target.innerText = 'O';
            gameTurn = 0;
            tablePosition[jugada] = 'O';
            detectWiner(tablePosition);
            return;
        }
    }
}

const createListener = (table) => {

    table.forEach(div => {
        div.addEventListener('click', makeMove);
    });

}

createListener(tablero);

const restartGame = () => {

    tablero.forEach(elem => {
    elem.childNodes[1].innerText = '';
    });
    tablePosition = [];
    gameTurn = 0;
    createListener(tablero);
}

buttomRestar.addEventListener('click', restartGame);

const detectWiner = (jugada) => {

    //Ganador X

    if (jugada[0] === 'X' && jugada[1] === 'X' && jugada[2] === 'X') {
        endGame()
        return alert('El jugador 1 ha ganado.');
    };

    if (jugada[0] === 'X' && jugada[4] === 'X' && jugada[8] === 'X') {
        endGame()
        return alert('El jugador 1 ha ganado.');
    };

    if (jugada[0] === 'X' && jugada[3] === 'X' && jugada[6] === 'X') {
        endGame()
        return alert('El jugador 1 ha ganado.');
    };

    if (jugada[1] === 'X' && jugada[4] === 'X' && jugada[7] === 'X') {
        endGame()
        return alert('El jugador 1 ha ganado.');
    };
    
    if (jugada[2] === 'X' && jugada[5] === 'X' && jugada[8] === 'X') {
        endGame()
        return alert('El jugador 1 ha ganado.');
    };
    
    if (jugada[2] === 'X' && jugada[4] === 'X' && jugada[6] === 'X') {
        endGame()
        return alert('El jugador 1 ha ganado.');
    };
    
    if (jugada[3] === 'X' && jugada[4] === 'X' && jugada[5] === 'X') {
        endGame()
        return alert('El jugador 1 ha ganado.');
    };
    
    if (jugada[6] === 'X' && jugada[7] === 'X' && jugada[8] === 'X') {
        endGame()
        return alert('El jugador 1 ha ganado.');
    };

    //ganador 0

    if (jugada[0] === 'O' && jugada[1] === 'O' && jugada[2] === 'O') {
        endGame()
        return alert('El jugador 2 ha ganado.');
    };

    if (jugada[0] === 'O' && jugada[4] === 'O' && jugada[8] === 'O') {
        endGame()
        return alert('El jugador 2 ha ganado.');
    };

    if (jugada[0] === 'O' && jugada[3] === 'O' && jugada[6] === 'O') {
        endGame()
        return alert('El jugador 2 ha ganado.');
    };

    if (jugada[1] === 'O' && jugada[4] === 'O' && jugada[7] === 'O') {
        endGame()
        return alert('El jugador 2 ha ganado.');
    };
    
    if (jugada[2] === 'O' && jugada[5] === 'O' && jugada[8] === 'O') {
        endGame()
        return alert('El jugador 2 ha ganado.');
    };
    
    if (jugada[2] === 'O' && jugada[4] === 'O' && jugada[6] === 'O') {
        endGame()
        return alert('El jugador 2 ha ganado.');
    };
    
    if (jugada[3] === 'O' && jugada[4] === 'O' && jugada[5] === 'O') {
        endGame()
        return alert('El jugador 2 ha ganado.');
    };
    

    if (jugada[6] === 'O' && jugada[7] === 'O' && jugada[8] === 'O') {
        endGame()
        return alert('El jugador 2 ha ganado.');
    };

    if(
        tablePosition[0] !== tablePosition.empty &&
        tablePosition[1] !== tablePosition.empty &&
        tablePosition[2] !== tablePosition.empty &&
        tablePosition[3] !== tablePosition.empty &&
        tablePosition[4] !== tablePosition.empty &&
        tablePosition[5] !== tablePosition.empty &&
        tablePosition[6] !== tablePosition.empty &&
        tablePosition[7] !== tablePosition.empty &&
        tablePosition[8] !== tablePosition.empty
        ) {
        return alert('Ha habido un empate.');
    }
};

const endGame = () => {

    tablero.forEach(elem => {
        elem.removeEventListener('click', makeMove);
    }) 

}; 