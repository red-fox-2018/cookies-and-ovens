// Answer These Questions:
//
// - What are essential classes?
// - What attributes will each class have?
// - What interface will each class provide?
// - How will the classes interact with each other?
// - Which classes will inherit from others, if any?
//
//
/*jshint esversion:6*/
/*jshint -W097*/
/*jshint -W117*/
/*jshint -W030*/
/*jshint -W083*/
// Your code here


class Cookies {
  constructor(name) {
    this.name = name;
    this.status = ['Mentah', 'Hampir Matang', ' Matang', 'Hangus'];
  }
}

class KueKacang extends Cookies {
  constructor(name) {
    super(name);
    this.sudahMatang = 20;
    this.belum_matang = 15;
  }
}

class KueCokelat extends Cookies {
  constructor(name) {
    super(name);
    this.sudahMatang = 25;
    this.belumMatang = 10;
  }
}

class KueKeju extends Cookies {
  constructor(name) {
    super(name);
    this.sudahMatang = 25;
    this.belumMatang = 20;
  }
}

class Ovens {
  constructor() {
    this.timeCookies = 35;
  }

  bake(kue) {
    let cookie = kue;
    for (let i = 0; i < this.timeCookies; i += 5) {
      if (i < cookie.belumMatang) {
        console.log(`${cookie.name}, menit ke ${i} : ${cookie.status[0]}`);
      } else if (i == cookie.belumMatang) {
        console.log(`${cookie.name}, menit ke ${i} : ${cookie.status[1]}`);
      } else if (i == cookie.sudahMatang) {
        console.log(`${cookie.name}, menit ke ${i} : ${cookie.status[2]}`);
      } else {
        console.log(`${cookie.name}, menit ke ${i} : ${cookie.status[3]}`);
      }
    }
  }
}

let kueCoklat = new KueCokelat('Kue coklat');
let kueKacang = new KueKacang('Kue kacang');
let kueKeju = new KueKeju('Kue keju');
let oven = new Ovens();
console.log('============== BAKE ===============');
oven.bake(kueCoklat);
console.log('============== BAKE ===============');
oven.bake(kueKacang);
console.log('============== BAKE ===============');
oven.bake(kueKeju);
