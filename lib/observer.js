// var data = { name: 'kindeng' };
// observe(data);
// data.name = 'dmq';

function observe(obj) {
  if (!obj || typeof obj !== 'object') {
    return;
  }
  // 取出所有属性遍历
  Object.keys(obj).forEach(function (key) {
    defineReactive(obj, key, obj[key]);
  });
};

function defineReactive(obj, key, val) {
  var dep = new Dep();
  // 对象属性也要监听
  observe(val);
  Object.defineProperty(obj, key, {
    enumerable: true,
    configurable: false,
    get: function () {
      if (Dep.target) {
        dep.addSub(Dep.target);
      }
      return val;
    },
    set: function (newVal) {
      if (newVal === val) {
        return;
      }
      val = newVal;
      console.log('这里应通知订阅者 ', val, ' --> ', newVal);
      dep.notify();
    }
  });
}