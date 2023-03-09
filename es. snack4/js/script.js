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
    let { Pt, faults } = element;
    console.log(Pt, faults)
});
// ciclo i punti fatti per inserirle in un array 
const bestTeam = serieA.map(element => {
    element.Pt = getRandomInt(100);
    element.faults = getRandomInt(90);
    return (element.Pt, element.faults)
})
console.log(bestTeam)
