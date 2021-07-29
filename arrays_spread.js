const list1 = ['mleko','kawa'];
const list2 = [...list1,'jajka'];
list2.forEach(function(item, index, array) {
    console.log(item, index);
  });