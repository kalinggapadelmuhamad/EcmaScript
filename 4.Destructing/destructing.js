//proses penggambilan data dari array dan object

//contoh array
const arr = ['a', 'b', 'c'];
const [x,y,z] = arr;
console.log(x);

//contoh object
const orangTua = {
    papa : 'namaPapaku',
    mama : 'namaMamaku'
}

const papaku = orangTua.papa;

//tanpa perubahan
const {papa, mama} = orangTua;
//dengan perubahan
const {papa : ayahku, mama : bundaku} = orangTua;
console.log(ayahku);

//pola nested
const anggota = [
    {nama : 'budi', umur : 32},
    {nama : 'padel', umur : 12}
];

//tanpa perubahan 
const [{nama : nama1},{nama: nama2}] = anggota;

//ternary
let kapital = false;

// let hurufA, hurufB, hurufC;
// if(kapital){
//     hurufA = 'A';
//     hurufB = 'B';
//     hurufC = 'C';
// }else{
//     hurufA = 'a';
//     hurufB = 'b';
//     hurufC = 'b';
// }

const [hurufA, hurufB, hurufC] = kapital ? ['A', 'B', 'C'] : ['a', 'b', 'c'];

