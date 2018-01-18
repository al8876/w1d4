var students = [
  { id: 1, name: "bruce",    age: 40 },
  { id: 2, name: "zoidberg", age: 22 },
  { id: 3, name: "alex",     age: 22 },
  { id: 4, name: "alex",     age: 30 }
];

students.sort(function(a,b) {
  var nameA = a.name.toUpperCase();
  var nameB = b.name.toUpperCase();
  var aAge = a.age;
  var bAge = b.age;
  if (nameA < nameB) {
    return -1;
  }
  if (nameA > nameB) {
    return 1;
  }
  if (nameA === nameB) {
    if (aAge < bAge) {
      return 1;
    }
    if (aAge > bAge) {
      return -1;
    }
    if (aAge === bAge) {
      return 0;
    }
  }
});

console.log(students);