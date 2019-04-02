var TextGradient = require('text-gradient');

const head = document.getElementById('gradText');
console.log(head.nodeType);
var MyGradient = TextGradient(head, {
  from : '#B0E537',
  to : '#009DE9',
  direction : 'right'
});
