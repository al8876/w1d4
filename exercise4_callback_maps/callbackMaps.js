var words = ["ground", "control", "to", "major", "tom"];

function map(input, callback) {
  console.log(input.map(callback));
}

map(words, function(word) {
  return word.length;
});


map(words, function(word) {
  return word.toUpperCase();
});

map(words, function(word) {
  return word.split('').reverse().join('');
});