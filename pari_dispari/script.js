
// Pari e Dispari L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
// Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
// Sommiamo i due numeri Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
// Dichiariamo chi ha vinto.

const button = document.getElementById('buttone');
button.addEventListener("click", function start(){

    // prendiamo gli input

let choose = document.getElementById('choose').value;
// while(choose != 'pari' && choose != 'dispari'){
//     choose = prompt('Scegliere pari o dispari');
// }
console.log(choose);



let n = parseInt(document.getElementById('num').value);
// let n = 0;
// while(n <= 0 || n >= 6){
//     n = parseInt(prompt('Inserisci numero da 1 a 5'));
// }
console.log(n);



    // funzione per il numero random

function nRandom(){
    const m = Math.floor(Math.random() * 6);
    return m;
}
const random = nRandom();
console.log(random);


    // somma del numero inserito in input con il numero random

let result = n + random;
console.log(result);



function winner(choose, result){
    
    if(result % 2 == 0 && choose == 'Pari'){
        return 'Hai vinto';
    }else if(result % 2 != 0 && choose == 'Dispari'){
        return 'Hai vinto';
    }else{
        return 'Hai perso';
    }
}

const win = winner(choose, result);

document.getElementById('n1').innerHTML = 'Il tuo numero: ' + n;
document.getElementById('n2').innerHTML = 'Numero avversario: ' + random;
document.getElementById('som').innerHTML = 'somma: ' + result;
document.getElementById('solution').innerHTML = win;
});















// const button = document.getElementById('buttone');

// button.addEventListener("click", function start(){
    
//     // input
//     const choose = document.getElementById('choose').value;
//     console.log(choose);

//     const n = document.getElementById('num').value;
//     console.log(n);

//     // numero random
//     const nRandom = Math.floor(Math.random() * 6);

//     const somma = nRandom + n;
//     console.log(somma);

//     let result = 0;
//     if(somma % 2){
//         // return 'il numero è pari!';
//         // alert('il numero è pari');
//         result = 'numero pari';
//     }else{
//         result = 'numero dispari';
//         // return 'il numero è dispari';
//         // alert('il numero è dispari');
//     }
//     }
//     document.getElementById('solution').innerHTML = somma ;
// }
// });

// const via = start;

