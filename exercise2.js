function findWaldo(arr, found) {
  var waldoIndex = [];
  arr.forEach(function(arr){
    if (arr === "Waldo") {
      waldoIndex.push(arr.indexOf(arr))
    }
  });
  found(waldoIndex);
  console.log(waldoIndex);
}

function actionWhenFound(waldoIndex) {
  console.log("Found Waldo at index " + waldoIndex + "!");
}

findWaldo(["Alice", "Bob", "Waldo", "Winston"], actionWhenFound);