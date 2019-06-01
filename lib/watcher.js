function Dep() {
  this.subs = [];
}

Dep.prototype.addSub = function(sub) {
  this.subs.push(sub);
}

Dep.prototype.notify = function () {
  this.subs.forEach(sub => {
    sub.update();
  });
}


function Watcher(vm, dom, model, nodeType) {
  Dep.target = this;
  this.model = model;
  this.dom = dom;
  this.vm = vm;
  this.nodeType = nodeType;
  this.update();
  Dep.target = null;
}

Watcher.prototype = {
  update: function () {
    this.get();
    if (this.nodeType == 'text') {
      this.dom.nodeValue = this.value;
    }
    if (this.nodeType == 'input') {
      this.dom.value = this.value;
    }
  },
  // 获取 data 中的属性值
  get: function () {
    this.value = this.vm.data[this.model]; // 触发相应属性的 get
  }
}