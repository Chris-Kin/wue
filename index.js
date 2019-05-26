var input = document.querySelector('#input');
var span = document.querySelector('#span');

var data  = {
  name: '',
}

Object.defineProperty(data, 'name', {
  set: function(newVal) {
    input.value = newVal;
    span.innerHTML = newVal;
  },
});

input.addEventListener('keyup', function(e) {
  var val = e.target.value;
  data.name = val;
  setTimeout(function() {
    console.log(data);
  }, 200);
});
