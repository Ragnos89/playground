const list1 = ["mleko", "kawa"];
const list2 = [...list1, "jajka"];
const filter = (product, list) => {
  return list.filter((el) => el === product);
};
//console.log(list2);
console.log(filter("kawa", list2));
