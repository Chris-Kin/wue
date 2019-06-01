function compile(dom, vm) {
  var reg = /\{\{(.*)\}\}/;
  // 元素节点
  if (dom.nodeType === 1) {
    var attr = dom.attributes;
    for (var i = 0; i < attr.length; i++) {
      if (attr[i].nodeName === 'v-model') {
        var model = attr[i].nodeValue;
        dom.value = vm.data[model];
        dom.removeAttribute('v-model');
      }
    }
  }
  // 文本节点
  if (dom.nodeType === 3) {
    if (reg.test(dom.nodeValue)) {
      var data = RegExp.$1;
      data = data.trim();
      dom.nodeValue = vm.data[data];
    }
  }
}

function dom2fragment(dom, vm) {
  var fragment = document.createDocumentFragment();
  var child;
  while(child = dom.firstChild) {
    compile(child, vm);
    fragment.appendChild(child);
  }
  return fragment;
}