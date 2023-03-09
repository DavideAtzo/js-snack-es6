'use strict';
// array bicilette 
const shopBike =
    [
        {
            name: 'Bmx',
            weight: 8
        },
        {
            name: 'Tandem',
            weight: 9.5
        },
        {
            name: 'Bici ibrida',
            weight: 9
        },
        {
            name: 'Bici per bambini',
            weight: 7
        },
        {
            name: 'Triciclo',
            weight: 8
        },
        {
            name: 'Mountain bike',
            weight: 9
        }
    ];
// estrapolo con un ciclo gli elementi dall'array 
shopBike.forEach((element) => {
    let { name, weight } = element;
    // console.log(name, weight)
});
// ciclo di bici e inserite in un array 
const lightBike = shopBike.map((element) => {
    const weight = element.weight;
    return weight;
});

console.log(lightBike)

const lighterBike = Math.min(...lightBike)
console.log(lighterBike)