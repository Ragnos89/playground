const a = null;
const b = [4, 0, 36, 16, 25, 100, 1, 16, 100, 1, 64, 64];

function comp(array1, array2) {
  let tempArray = [];
  if (array1 === null || array2 === null) {
    return false;
  }
  if (array1.length != array2.length) {
    return false;
  } else {
    array1.forEach((element) => {
      console.log(element);
      console.log(tempArray);
      console.log(array2);
      for (let i = 0; i < array2.length; i++) {
        if (Math.pow(element, 2) === array2[i]) {
          console.log(Math.pow(element, 2), "=", array2[i]);
          tempArray.push(element);
          array2.splice(i, 1);
          console.log(tempArray);
          console.log(array2);
          break;
        }
      }
    });
  }
  tempArray.forEach((el) => {
    for (let j = 0; j < array1.length; j++) {
      if (el === array1[j]) {
        array1.splice(j, 1);
        //console.log(array1);
      }
    }
  });

  if ((array1.length === 0) & (array2.length === 0)) {
    return true;
  } else {
    return false;
  }
}
// for (let i = 0; i < array1.length; i++) {
//   let potega = Math.pow(array1[i], 2);
//   for (let j = 0; j < array2.length; j++) {
//     if (potega === array2[j]) {
//     }
//   }
// }
//}
console.log(comp(a, b));
