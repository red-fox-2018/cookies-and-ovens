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
class Cookie {
  constructor(time,name) {
    this.name = name
    this.cookingTime = time
    this.status = 'mentah'
  }
}

class Chocolate extends Cookie {
  constructor(){
    super(20,'cokelat')
  }
}
class Peanut extends Cookie {
  constructor(){
    super(30,'kacang')
  }
}
class Cheese extends Cookie {
  constructor(){
    super(25,'keju')
  }
}

class Oven {
  constructor (){
    this.tray = []
  }
  addCookie(cookie){
    this.tray.push(cookie)
  }
  bake(bakeTime){
    for (var time = 0; time <= bakeTime; time+=5) {
      for (var i = 0; i < this.tray.length; i++) {
        if (this.tray[i].cookingTime === time) {
          this.tray[i].status = 'matang'
        } else if (this.tray[i].cookingTime-5 === time) {
          this.tray[i].status = 'hampir matang'
        } else if (this.tray[i].cookingTime-5 > time) {
          this.tray[i].status = 'mentah'
        } else {
          this.tray[i].status = 'hangus'
        }
        console.log(`Kue ${this.tray[i].name}, menit ke ${time} : ${this.tray[i].status}`);
      }
      console.log('\n');
    }
  }
}
let oven = new Oven()
let chocolate = new Chocolate()
let peanut = new Peanut()
let cheese = new Cheese()
oven.addCookie(chocolate)
oven.addCookie(peanut)
oven.addCookie(cheese)
oven.bake(30)
