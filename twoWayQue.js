class person {
  constructor(name, surname, age) {
    this.name = name;
    this.surname = surname;
    this.age = age;
  }
}
//let p1 = new person("Bartek", "Płoszyński", "26");
//console.log(p1.name, p1.surname, p1.age);

class queElement {
  constructor(person) {
    this.queNumber = null;
    this.data = person;
    this.previousElement = null;
    this.nextElement = null;
  }
}

class que {
  constructor() {
    this.firstElement = null;
  }
  addElement(prs) {
    let lE = new queElement(prs);
    if (this.firstElement === null) {
      this.firstElement = lE;
      this.firstElement.queNumber = 1;
    } else {
      let tempElement = this.firstElement;
      while (tempElement.nextElement) {
        tempElement = tempElement.nextElement;
      }
      tempElement.nextElement = lE;
      tempElement.nextElement.queNumber = tempElement.queNumber + 1;
      tempElement.nextElement.previousElement = tempElement;
    }
  }
  viewQue() {
    let tmpElement = this.firstElement;
    if (tmpElement.nextElement === null) {
      console.log(tmpElement.queNumber, tmpElement.data.name);
    } else {
      do {
        console.log(tmpElement.queNumber, tmpElement.data.name);
        //console.log(temp.next.name);
        if (tmpElement.nextElement === null) {
          return "Koniec kolejki";
        } else {
          tmpElement = tmpElement.nextElement;
        }
      } while (tmpElement.data.name);
    }
  }
}
let p1 = new person("Karol", "Łada", 32);
let p2 = new person("Michał", "Karczewski", 26);
let p3 = new person("Mateusz", "Słowikowski", 26);
let l1 = new que();
l1.addElement(p1);
l1.addElement(p2);
l1.addElement(p3);
//console.log(l1.firstElement.queNumber, l1.firstElement.data.name);
//console.log(l1.firstElement.nextElement.previousElement.data.name);

console.log(l1.viewQue());
