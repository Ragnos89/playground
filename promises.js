const myPromise = new Promise(executor = (resolve, reject) => {
    setTimeout(handler => {
       // resolve(value = 'Wszystko ok');
       reject(new Error ('Pierdole nie robie!'));
    },2500 );  
});
myPromise
   .then(result => {
    console.log('Zadanie skończone', result);
}).catch(err =>{
    console.log('O kurwa!Zesrało się xD', err);
})
