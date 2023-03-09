'use strict';
// array bicilette 
const shopBike =
    [
        {
            name: 'Bmx',
            weight: '8'
        },
        {
            name: 'Tandem',
            weight: '9,5'
        },
        {
            name: 'Bici ibrida',
            weight: '9'
        },
        {
            name: 'Bici per bambini',
            weight: '7'
        },
        {
            name: 'Triciclo',
            weight: '8'
        },
        {
            name: 'Mountain bike',
            weight: '9'
        }
    ];
// estrapolo con un ciclo gli elementi dall'array 
shopBike.forEach((element) => {
    let { name, weight } = element;
    console.log(name, weight)
});

