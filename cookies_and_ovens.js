
/**
 * @author: Iswanul Umam - Red Fox
 * 
 * What are essential classes?
 * - kue, kue coklat, kue kacang, kue keju, tukang masak.
 * 
 * What attributes will each class have?
 * - kue: name, status, waktu masak
 * - tukang masak: name
 * 
 * What interface will each class provide?
 * - kue: tidak ada
 * - tukan masak: masak(time), lihatKueDimasak(), lihatKueMatang(), lihatKueMentah()
 * 
 * How will the classes interact with each other?
 * - Decomposition or agregation
 * 
 * Which classes will inherit from others, if any?
 * kua parent of kue coklat, kue kacang, kue kaju
 */

class Kue {
  constructor(time) {
    this.timeCook = time || 60;
    this.stepTime = 0;
  }
  nextMinute() {
    this.stepTime++;
  }
}

class KueCoklat extends Kue {
  constructor(time) {
    super();
    this.name = 'Kue Coklat';
    this.timeCook = time || 20;
    this.stepCook = ['mentah', 'mentah', 'hampir matang', 'matang', 'hangus'];
    this.status = this.stepCook[this.stepTime];
  }
}

class KueKacang extends Kue {
  constructor(time) {
    super();
    this.name = 'Kue Kacang';
    this.timeCook = time || 30;
  }
}

class KueKeju extends Kue {
  constructor(time) {
    super();
    this.name = 'Kue Keju';
    this.timeCook = time || 35;
  }
}

class Koki {
  constructor(name) {
    this.allCookies = [];
  }
  tambahkanMasakan(objectKue) {
    this.allCookies.push(objectKue);
  }
  limaMenitBerikutnya() {
    if (this.allCookies.length == 0) {
      console.log(`Kamu belum memasak apapun!`);
    } else {
      for(let i = 0; i < this.allCookies.length; i++) {
        this.allCookies[i].nextMinute();
      }
    }
  }
  lihatStatusMakanan() {
    for (let c of this.allCookies) {
      console.log(`Status masakan ${c.name} adalah: ${c.status}`);
    }
  }
}

// drive code --------------------------------------

// let kue = new Kue(50);
// let kueKacang = new KueKacang();
// let kueKeju = new KueKeju();

let kueCoklat = new KueCoklat();
// console.log(kueCoklat);

let koki = new Koki();

koki.limaMenitBerikutnya();

koki.tambahkanMasakan(new KueCoklat());

koki.limaMenitBerikutnya();
koki.limaMenitBerikutnya();
// console.log(koki);

koki.lihatStatusMakanan();

koki.limaMenitBerikutnya();
koki.limaMenitBerikutnya();
koki.lihatStatusMakanan();


/*

OUTPUT:
Kue coklat, menit ke 5: mentah
Kue coklat, menit ke 10: mentah
Kue coklat, menit ke 15: hampir matang
Kue coklat, menit ke 20: matang
Kue coklat, menit ke 25: hangus

*/