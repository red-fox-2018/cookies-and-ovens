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

function sleep(milliseconds) {
  var start = new Date().getTime();
  for (var i = 0; i < 1e7; i++) {
    if ((new Date().getTime() - start) > milliseconds) {
      break;
    }
  }
}

function reset_board() {
  console.log("\x1B[2J")
}

class Oven {
  constructor(cake) {
    this.set_time = 0
    this.try = []
  }

  addToTry(cake){
    this.try.push(cake)
  }

  bake(set_timer){

    let cake = this.try
    let time = 0

    this.set_time = set_timer

    for (var i = 0; i <= set_timer; i+=5) {

      console.log(`\n============================================================\n`);

      for (var j = 0; j < cake.length; j++) {

        if (time > cake[j].time) {
          cake[j].status = 'hangus'
        } else if (time == cake[j].time) {
          cake[j].status = 'matang'
        } else if (time == (cake[j].time)-5) {
          cake[j].status = 'hampir matang'
        }

        console.log(`Kue ${cake[j].name}, menit ke ${i} : ${cake[j].status}`);

      }

      time += 5

    }

    console.log(`\n============================================================\n`);

  }

}

class Cake {
  constructor(name, time) {
    this.name = name
    this.time = time || 0
    this.status = 'mentah'
  }
}

class Coklat extends Cake{
  constructor() {
    super('coklat', 20)
  }
}

class Kacang extends Cake{
  constructor() {
    super('kacang', 30)
  }
}

class Keju extends Cake{
  constructor() {
    super('keju', 35)
  }
}

let oven = new Oven()

let coklat = new Coklat()
let keju = new Keju()
let kacang = new Kacang()

oven.addToTry(coklat)
oven.addToTry(keju)
oven.addToTry(kacang)

oven.bake(40)

console.log(oven);
