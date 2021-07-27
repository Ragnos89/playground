function pracuj(czas) {
    return new Promise(executor = (resolve, reject) =>{
    if (czas > 8) {
        reject(new Error ('Zbyt długi czas pracy'));
    } else {
        console.log('Wykonywanie pracy');
        setTimeout(handler => {
            resolve();
        },timeout = czas * 1000)     
    }
})
}
function wypłata() {
    return new Promise(executor = (resolve) =>  resolve());   
}

pracuj(czas = 9)
.then(() => {
    console.log('Praca wykonana. Czekam na hajs');
    return wypłata();
})
.then(() => {
    console.log('Hajs na koncie');
})
.catch(err =>{
    console.log('Bład w czasie pracy', err);
})    