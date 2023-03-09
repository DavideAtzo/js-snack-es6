'use strict';
// funzioni 
function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }

// array di squadre serie A 
const serieA =
[
{ 
    team: 'Milan',
    Pt : 0,
    faults : 0
},
{
    name: 'Juventus',
    Pt : 0,
    faults : 0
},
{
    name: 'Napoli',
    Pt : 0,
    faults : 0
 },
 {
    name: 'Inter',
    Pt : 0,
    faults : 0
 },
 {
    name: 'Roma',
    Pt : 0,
    faults : 0
},
{
    name: 'Lazio',
    Pt : 0,
    faults : 0
},
{
    name: 'Torino',
    Pt : 0,
    faults : 0
}
]
// estrapolo con un ciclo i punti fatti e gol subiti dall'array
serieA.forEach((element) => {
    let {name, Pt, faults } = element;
    console.log(name, Pt, faults)
});
// ciclo i punti fatti per inserirle in un array 
const bestTeam = serieA.map(element => {
    element.Pt = getRandomInt(100);
    element.faults = getRandomInt(90);
    return (element)
})
console.log(bestTeam)

// array squadre e falli subiti 
const winnerTeam = bestTeam.map((element) => {
    const {nome, element.faults} = element;
    return {nome, element.faults};
});