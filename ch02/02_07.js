console.assert(typeof Vue !== 'undefined');
var items = [
  {
    name: '연필',
    price: 300,
    quantity: 2
  },
  {
    name: '공책',
    price: 400,
    quantity: 3
  },
  {
    name: '지우개',
    price: 500,
    quantity: 4
  }
];

var vm = new Vue({
  el: '#app',
  data: {
    items: items
  },
  computed: {
    totalPrice: function () {
      return this.items.reduce(function (sum, item) {
        return sum + (item.price * item.quantity);
      }, 0);
    },
    totalPriceWithTax: function () {
      return Math.floor(this.totalPrice * 1.10);
    }
  }
});

window.vm = vm;