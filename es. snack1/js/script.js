'use strict';
// array invitati 
const invitati = [
    'Brad Pitt',
    'Johnny Depp',
    'Lady Gaga',
    'Cristiano Ronaldo',
    'Georgina Rodriguez',
    'Chiara Ferragni',
    'Fedez',
    'George Clooney',
    'Amal Clooney',
    'Maneskin'
];
// aggiungo delle chiavi all'oggetto dell'array 
const listaInvitati = invitati.map((element, index) => {
    return {
        table: 'Tavolo Vip', invitato: element, place: index + 1
    }
})
console.log(listaInvitati)


