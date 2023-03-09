'use strict';

const serieA =
[
{ 
    team: 'Milan',
    Pt : 0,
    GC : 0
},
{
    name: 'Juventus',
    Pt : 0,
    GC : 0
},
{
    name: 'Napoli',
    Pt : 0,
    GC : 0
 },
 {
    name: 'Inter',
    Pt : 0,
    GC : 0
 },
 {
    name: 'Roma',
    Pt : 0,
    GC : 0
},
{
    name: 'Lazio',
    Pt : 0,
    GC : 0
},
{
    name: 'Torino',
    Pt : 0,
    GC : 0
}
]
// estrapolo con un ciclo i punti fatti e gol subiti dall'array
serieA.forEach((element) => {
    let { Pt, GC } = element;
    console.log(Pt, GC)
});
// ciclo i punti fatti per inserirle in un array 
const points = serieA.map((element) => {
    const Pt = element.Pt;
    return Pt;
});
console.log(points)

const golConceded = serieA.map((element) => {
    const GC = element.GC;
    return GC;
});
console.log(golConceded)