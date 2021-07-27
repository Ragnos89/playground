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
boilWater()
.then(() => {
console.log('Woda zagotowana');
makeATea()
.then(() => {
    console.log('Herbata zaparzona!');
    waitForGoodtemperature()
    .then(() => {
        console.log('Temperatura odpowiednia');
    });
});
}) 
