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
  filters: {
    numberWithDelimiter: function (value) {
      if (!value) {
        return '0';
      }

      return value.toString().replace(/(\d)(?=(\d{3})+$)/g, '$1,');
    }
  },
  computed: {
    totalPrice: function () {
      return this.items.reduce(function (sum, item) {
        return sum + (item.price * item.quantity);
      }, 0);
    },
    totalPriceWithTax: function () {
      return Math.floor(this.totalPrice * 1.10);
    },
    canBuy: function () {
      return this.totalPrice >= 1000; // 1000
    }
  }
});

window.vm = vm;