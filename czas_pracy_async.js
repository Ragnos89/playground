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

(async() => {
    try{
        await pracuj(czas = 10);
        console.log('Praca wykonana');
        await wypłata();
        console.log("Hajs na koncie");
    }
    catch(err) {
    console.log('Bład w czasie pracy', err);
    }
})
