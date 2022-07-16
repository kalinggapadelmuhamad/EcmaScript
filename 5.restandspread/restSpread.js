//menggabungkan aray pada array lain
const hewanBaru = ['ayam', 'babi', 'cicak'];
const kebunBinatang = ['domba', ...hewanBaru, 'elang'];

//menggunakan function

function kaliTiga(a,b,c){
    return a*b*c;
}

const arr = [1,2,3];
kaliTiga(...hewanBaru);