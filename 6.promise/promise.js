let pesanNasiGoreng = new Promise(function(resolve, reject){

    //olah nasi goreng
    setTimeout(() => resolve('Nasi goreng berhasil dibuat'), 3000);
})

pesanNasiGoreng.then(result => console.log('hasil ' + result)).catch(error => console.log('ada error : ' + error)).finally(() => console.log('Nasi goreng selesai dibuat'))