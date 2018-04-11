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



class Kue{
  constructor(name, timer) {
    this.name = name
    this.timer = timer
    this.status = 'mentah'
  }
}

class KueCoklat extends Kue{
  constructor() {
    super('Kue coklat', 20)
  }
}

class KueKacang extends Kue{
  constructor() {
    super('Kue kacang', 30)
  }
}

class KueKeju extends Kue{
  constructor() {
    super('Kue keju', 35)
  }
}

class Oven{
  constructor() {
    this.tray = []
  }

  onTray(objCookie) {
    this.tray.push(objCookie)
  }

  bake(time) {
    var menit = 5;
    for(var j = 5; j <= time; j+=5) {
      for(let i in this.tray) {
        if(j >= 10 && j < this.tray[i].timer) {
          this.tray[i].status = 'hampir matang'
        } else if(j === this.tray[i].timer) {
          this.tray[i].status = 'matang'
        } else if(j > this.tray[i].timer){
          this.tray[i].status = 'hangus'
        }
        console.log(`${this.tray[i].name}, menit ke ${j} : ${this.tray[i].status}`)
      }
    }
  }

}

var kueCoklat = new KueCoklat()
var kueKeju = new KueKeju()
// console.log(kueCoklat);
var baked = new Oven()
baked.onTray(kueCoklat)
baked.bake(30);
