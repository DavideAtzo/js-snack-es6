'use strict';
// Questo è l’elenco degli studenti:
// Id  Name                Grades
// 213 Marco della Rovere      78
// 110 Paola Cortellessa       96
// 250 Andrea Mantegna         48
// 145 Gaia Borromini          74
// 196 Luigi Grimaldello       68
// 102 Piero della Francesca   50
// 120 Francesca da Polenta    84

const students =
[
{ 
    id: '213',
    name: 'Marco della Rovere',
    grades : '78'
},
{
    id: '213',
    name: 'Marco della Rovere',
    grades : '78'
},
{
    id: '213',
    name: 'Marco della Rovere',
    grades : '78'
 },
 {
    id: '213',
    name: 'Marco della Rovere',
    grades : '78'
 },
 {
    id: '213',
    name: 'Marco della Rovere',
    grades : '78'
},
{
    id: '213',
    name: 'Marco della Rovere',
    grades : '78'
}
]
// lista con nome studenti in maiuscolo 
const scream = students.map((element) => {
    return element.name.toUpperCase()
});

console.log(students);
console.log(scream);
