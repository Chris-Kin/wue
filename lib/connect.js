function Vue(option) {
  this.data = option.data;
  observe(this.data);
  var app = document.querySelector(option.el);
  var fragment = dom2fragment(app, this);
  app.appendChild(fragment);
}
