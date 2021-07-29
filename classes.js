class person {
    name = 'Karol';
    printName = () => {
       console.log(this.name);
    }
}
let p1 = new person();
p1.printName();