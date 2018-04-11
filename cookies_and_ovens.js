// Answer These Questions:
//
// - What are essential classes?
// - What attributes will each class have?
// - What interface will each class provide?
// - How will the classes interact with each other?
// - Which classes will inherit from others, if any?
//
//
// Your code here
class Kue {
  constructor(name, waktuMasak) {
    this.name = name;
    this.waktuMasak = waktuMasak;
    this.status = 'mentah';
  }

  masak() {
    for (var i = 0; i <= this.waktuMasak + 5; i+=5) {
      if (i > 10 && i <= 15) {
        this.status = 'hampir matang'
      } else if (i == this.waktuMasak) {
        this.status = 'matang';
      } else if (i >= this.waktuMasak) {
        this.status = 'hangus'
      }
      console.log(`${this.name}, menit ke ${i} : ${this.status}`);
    }
  }
}

class KueCokelat extends Kue {
  constructor(name, waktuMasak) {
    super(name, waktuMasak);
  }


}

class Kuekacang extends Kue {
  constructor(name, waktuMasak) {
    super(name, waktuMasak);
  }
}

class KueKeju extends Kue {
  constructor(name, waktuMasak) {
    super(name, waktuMasak);
  }
}

var kueCokelat = new KueCokelat('kue cokelat', 20);
var kuekacang = new Kuekacang('kue kacang', 30);
var kueKeju = new KueKeju('kue keju', 35);

kueCokelat.masak();
kuekacang.masak()
