// const contohMap = ([
//     ['gorengan',1000],
//     ['sate',2000],
//     ['nasi',5000]
// ])

//looping map
// contohMap.keys();
// contohMap.values();
// contohMap.entries();
// for(let makanan of contohMap.keys()){
//     console.log(makanan);
// }

const contohMap = new Map();
contohMap.set('satu',3);
contohMap.set('dua',2);

//map used
contohMap.get('satu');
contohMap.size;
contohMap.delete('dua');
contohMap.has('dua');
contohMap.clear;


//set 
const contohSet = new Set();
contohSet.add('joni').add('siti');
contohSet.clear();
//sama seperti map

// const contohsSet = new Set(['ayam', 'babi', 'cicak']);
// for(let values of contohSet){
//     console.log(values);
// }

// contohSet.forEach((value, valueLagi, contohSet2) => {
//     console.log(value);
// })