function boilWater(clb) {
    console.log('Gotowanie wody');
    setTimeout(clb,10000);
}
function makeATea(clb) {
    console.log('Zaparzanie herbaty');
    setTimeout(clb,20000);
}
function waitForGoodtemperature(clb) {
    console.log('Oczekiwanie na odpowiednią temperaturę');
    setTimeout(clb,7500);
}
boilWater(clb => {
console.log('Woda zagotowana');
makeATea(clb => {
    console.log('Herbata zaparzona!');
    waitForGoodtemperature(clb => {
        console.log('Temperatura odpowiednia');
    });
});
}) 
