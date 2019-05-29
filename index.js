var app = document.querySelector('#app');
function createFragment(rootDOM) {
  var fragment = document.createDocumentFragment();
  var child;
  while (child = rootDOM.firstChild) {
    // 注意：当child被append到createDocumentFragment时，会自动从原有节点中删除！！
    fragment.append(child);
  }
  return fragment;
}

var newDOM = createFragment(app);

app.appendChild(newDOM);
