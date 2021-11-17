// Palidroma Chiedere all’utente di inserire una parola 
// Creare una funzione per capire se la parola inserita è palindroma

    // input
let word = prompt('Inserisci la parola').toLocaleLowerCase();

    // con questa funzione posso invertire una stringa
function reverse(s){
    return s.split("").reverse().join("");
}
    // dichiaro la function e la collego alla stringa in input
let s = reverse(word);
console.log(s);

    // verifico se la parola è palindroma
if(word == s){
    alert('Parola palindroma.');
}else{
    alert('Parola NON palindroma.');
}








// alternativa
// let parolaInversa = 0;
// function reverse(parolaInversa){
//     for(let i = word.length - 1; i >= 0; i--){
//         parolaInversa += word[i];
//     }
//     return parolaInversa
// }