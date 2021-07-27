function boilWater() {
    console.log('Gotowanie wody');
    return new Promise(executor = (resolve, reject) =>{
        setTimeout(resolve,5000);
    });
    
}
function makeATea() {
    console.log('Zaparzanie herbaty');
    return new Promise(executor = (resolve, reject) => {
        setTimeout(resolve,6000);
    }) 
}
function waitForGoodtemperature() {
    console.log('Oczekiwanie na odpowiednią temperaturę');
    return new Promise(executor = (resolve, reject) => {
        setTimeout(resolve,7500);
    })   
}

(async() =>{

    await boilWater();
    console.log('Woda zagotowana');
    await makeATea();
    console.log('Herbata zaparzona!');
    await waitForGoodtemperature();
    console.log('Temperatura odpowiednia');
})();

