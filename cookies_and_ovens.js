/*jshint esversion:6*/

class Cake {
  constructor(name, timeCooked) {
    this.name = name;
    this.timeBake = 0;
    this.timeCooked = timeCooked;
    this.status = 'mentah';
  }
}

class ChocolateCake extends Cake {
  constructor(name, timeCooked) {
    super(name, 20);
  }
}

class PeanutCake extends Cake {
  constructor(name, timeCooked) {
    super(name, 30);
  }
}

class CheeseCake extends Cake {
  constructor(name, timeCooked) {
    super(name, 35);
  }
}

class Oven {
  static bake(kue, time) {
    for(let i=5; i<=time; i+=5) {
      if(i > kue.timeCooked) {
        kue.status = 'hangus';
        console.log(`${kue.name}, menit ke ${i} : ${kue.status}`);
      } else if(i == kue.timeCooked) {
        kue.status = 'matang';
        console.log(`${kue.name}, menit ke ${i} : ${kue.status}`);
      } else {
        console.log(`${kue.name}, menit ke ${i} : ${kue.status}`);
      }
    }
  }
}


let coklat = new ChocolateCake('Chocolate Cake');
let kacang = new PeanutCake('Peanut Cake');
let keju = new CheeseCake('Cheese Cake');

Oven.bake(kacang, 30);
