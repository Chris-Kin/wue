var app = document.querySelector('#app');

function createFragment(rootDOM) {
  var fragment = document.createDocumentFragment();
  var child;
  while (child = rootDOM.firstChild) {
    fragment.appendChild(child);
  }
  return fragment;
}

var newDOM = createFragment(app);

app.appendChild(newDOM);
