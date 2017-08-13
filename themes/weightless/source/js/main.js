var colors = [
  'blue',
  'black',
  'navy',
  'olive',
  'red',
  'fuchsia',
  'purple',
  'maroon',
  ''
];

function chooseOne (array) {
  var randomIndex = Math.floor(Math.random() * array.length);
  return array[randomIndex];
}
