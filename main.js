let containerMinato = document.getElementById('campoMinato');
// console.log(containerMinato);

let myButton = document.getElementById('myButton');
// console.log(myButton);



// //aggiungiamo evento al bottone
myButton.addEventListener('click', function () {
    containerMinato.innerHTML = '';

    //creiamo 100 celle con il ciclo for
    for (i = 1; i <= 100; i++) {
        // console.log(i);


        //creiamo un elemento div che rappresentara ogni cella
        let campoSingolo = document.createElement('div');
        // console.log(campoSingolo);
        //ogni cella ha un numero del 1 al 100
        campoSingolo.innerHTML += i;


        //assegniamo la clasesquare al nostro div
        campoSingolo.classList.add('square');
        // console.log(campoSingolo);

        //appendiamo ogni campo singolo nel caontainerMinato.
        containerMinato.append(campoSingolo);

        //Quando l’utente clicca su ogni cella, la cella cliccata si colora di azzurro
        campoSingolo.addEventListener('click', function () {
            campoSingolo.classList.toggle('squareClick');
            //ed emetto un messaggio in console con il numero  della cella cliccata.
            console.log('Cella clicata', this.innerHTML);
        });
    }
});

const myButton1 = document.getElementById('myButton1');
// console.log(myButton);

myButton1.addEventListener('click', function () {
    containerMinato.innerHTML = '';

    for (i = 1; i <= 81; i++) {
        console.log('81 cuadritos', i);

        let campoSingolo1 = gameStructure('div', 'squareOrange');
        containerMinato.append(campoSingolo1);

        campoSingolo1.addEventListener('click', function () {
            campoSingolo1.classList.toggle('squareClickGreen');
            //ed emetto un messaggio in console con il numero  della cella cliccata.
            console.log('Cella clicata', this.innerHTML);
        });
    }
});












