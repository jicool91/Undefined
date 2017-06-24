// Кофемашина learn.javascript.ru

function CoffeeMachine(power) {
  this.waterAmount = 0;

  var WATER_HEAT_CAPACITY = 4200;

  var self = this;
  var timeOutId;

  function getBoilTime() {
    return self.waterAmount * WATER_HEAT_CAPACITY * 80 / power;
  }

  function onReady() {
    alert('Кофе готово!');
  }

  this.run = function () {
    timeOutId = setTimeout(onReady, getBoilTime());
  };

  this.stop = function (timeOutId) {
    clearTimeout(this.timeOutId);
    console.log(timeOutId);
  }

}