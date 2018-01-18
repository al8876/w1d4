// The second argument/parameter is expected to be a function
function findWaldo(arr, found) {
  var waldoIndex = [];
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] === "Waldo") {
      found(arr, i);
    }
  }
}

function actionWhenFound(arr, i) {
  console.log("Found Waldo at index " + i + "!");
}

findWaldo(["Alice", "Bob", "Waldo", "Winston"], actionWhenFound);


// The second argument/parameter is expected to be a function
function findWaldo(arr, found) {
  var waldoIndex = [];
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] === "Waldo") {
      waldoIndex.push(arr.indexOf(arr[i]));
      found(waldoIndex);
    }
  }
}

function actionWhenFound(waldoIndex) {
  console.log("Found Waldo at index " + waldoIndex + "!");
}

findWaldo(["Alice", "Bob", "Waldo", "Winston"], actionWhenFound);