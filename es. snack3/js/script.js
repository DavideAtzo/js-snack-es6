'use strict';
// array bicilette 
const shopBike =
[
{ 
    name: 'Bmx',
    weight : '8'
},
{
    name: 'Tandem',
    weight : '9,5'
},
{
    name: 'Bici ibrida',
    weight : '9'
 },
 {
    name: 'Bici per bambini',
    weight : '7'
 },
 {
    name: 'Triciclo',
    weight : '8'
},
{
    name: 'Mountain bike',
    weight : '9'
}
];
// estrapolo elementi dall'array 
let [{weight}] = shopBike;
let [{name}] = shopBike;
// ciclo sull'array per trovare la bici più leggera
shopBike.forEach((element) => {
    if(element.weight < weight){
        weight = element.weight;
    }
});

console.log(weight)
console.log(name)
console.log(`Drin drin !! compra questa ${name}, con un peso di ${weight}kg`);