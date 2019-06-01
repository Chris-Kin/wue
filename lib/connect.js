function Vue(option) {
  this.data = option.data;
  var app = document.querySelector(option.el);
  var fragment = dom2fragment(app, this);
  app.appendChild(fragment);
}