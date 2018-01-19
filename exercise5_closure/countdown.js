var countdownGenerator = function (x) {
  var number = x;
  return function() {
    if (number > 0) {
      console.log("T-minus " + number + "...");
    }
    if (number === 0) {
      console.log("Blast Off!");
    }
    if (number < 0) {
      console.log("Rockets already gone, bub!");
    }
    number -= 1;
  }
};

var countdown = countdownGenerator(3);
countdown(); // T-minus 3...
countdown(); // T-minus 2...
countdown(); // T-minus 1...
countdown(); // Blast Off!
countdown(); // Rockets already gone, bub!
countdown(); // Rockets already gone, bub!