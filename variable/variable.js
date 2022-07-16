//penggunaan let memungkinkan variable x memiliki global scope dan dapat di ubah
//sedangkan penggunaan const memungkinkan x memiliki global scope tapi tidak dapat di ubah
let x = 2;
const pi = 3.14;
function angkaAjaib(nilai){
    if(nilai){
        x = 10;
    }

    return x;
}