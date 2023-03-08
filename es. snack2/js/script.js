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
    id: '110',
    name: 'Paola Cortellessa',
    grades : '96'
},
{
    id: '250',
    name: 'Andrea Mantegna ',
    grades : '48'
 },
 {
    id: '145',
    name: 'Gaia Borromini',
    grades : '74'
 },
 {
    id: '196',
    name: 'Luigi Grimaldello',
    grades : '68'
},
{
    id: '102',
    name: 'Piero della Francesca',
    grades : '50'
},
{
    id: '120',
    name: 'Francesca da Polenta',
    grades : '84'
}
]
// lista con nome studenti in maiuscolo 
const scream = students.map((element) => {
    return element.name.toUpperCase()
});

// lista studenti con +70 di voto 
const goodStudent = students.filter((element) => {
    if(element.grades > 70){
        return true;
    }
})
const classHead = students.filter((element) => {
    if(element.grades > 70 && element.id > 120){
        return true;
    }
})

console.log(students);
console.log(scream);
console.log(goodStudent);
console.log(classHead);