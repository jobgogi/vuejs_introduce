console.assert(typeof Vue !== 'undefined');
var items = [
  {
    name: '연필',
    price: 300,
    quantity: 0
  },
  {
    name: '공책',
    price: 400,
    quantity: 0
  },
  {
    name: '지우개',
    price: 500,
    quantity: 0
  }
];

var vm = new Vue({
  el: '#app',
  data: {
    items: items
  }
});

window.vm = vm;