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

class Oven {
  static start(cake, time) {
    let status = ['mentah', 'hampir matang', 'matang', 'hangus']
    for (let i = 5; i <= time; i += 5) {
      if (i < cake.matureTime - 5) {
        console.log(`${cake.name}, menit ke-${i} : ${status[0]}`)
      } else if (i == cake.matureTime - 5) {
        console.log(`${cake.name}, menit ke-${i} : ${status[1]}`)
      } else if (i == cake.matureTime) {
        console.log(`${cake.name}, menit ke-${i} : ${status[2]}`)
      } else {
        console.log(`${cake.name}, menit ke-${i} : ${status[3]}`)
      }
    }
  }
}

class Kue_coklat {
  constructor(param_nama, param_time) {
    this.name = param_nama;
    this.matureTime = param_time;
  }
}

class Kue_kacang {
  constructor(param_nama, param_time) {
    this.name = param_nama;
    this.matureTime = param_time;
  }
}

class Kue_keju {
  constructor(param_nama, param_time) {
    this.name = param_nama;
    this.matureTime = param_time;
  }
}
let cakes = ['Kue Coklat', 'Kue Keju', 'Kue Kacang'];
console.log(`=================> ${cakes[0]} <===================`)
let kue_coklat = new Kue_coklat(cakes[0], 20);
Oven.start(kue_coklat, 25);
console.log(`=================> ${cakes[1]} <===================`)
let kue_keju = new Kue_keju(cakes[1], 25);
Oven.start(kue_keju, 30);
console.log(`=================> ${cakes[2]} <===================`)
let kue_kacang = new Kue_kacang(cakes[2], 15);
Oven.start(kue_kacang, 20);
Oven.start();
