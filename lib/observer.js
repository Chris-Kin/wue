var data = { name: 'kindeng' };
observe(data);
data.name = 'dmq';

function observe(data) {
  if (!data || typeof data !== 'object') {
    return;
  }
  // 取出所有属性遍历
  Object.keys(data).forEach(function (key) {
    defineReactive(data, key, data[key]);
  });
};

function defineReactive(data, key, val) {
  // 对象属性也要监听
  observe(val);
  Object.defineProperty(data, key, {
    enumerable: true,
    configurable: false,
    get: function () {
      return val;
    },
    set: function (newVal) {
      console.log('这里应通知订阅者 ', val, ' --> ', newVal);
      val = newVal;
    }
  });
}