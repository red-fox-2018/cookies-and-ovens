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

class Oven{
    constructor(){
      this.tray = []
    }
    addCookie(cookie){
      this.tray.push(cookie)
    }
    bake(timeBake){
      let time = 0
      while(time <timeBake){
        time +=5
        console.log(`===============time : ${time} minutes===============`)
        let len = this.tray.length
        for(let i=0;i<len;i++){
          let  kue = this.tray[i]
          if(time === kue.matang){
            kue.status = 'matang'
          }else if(time <= kue.matang/2){
            kue.status = 'mentah'
          }else if(time < kue.matang){
            kue.status = 'hampir matang'
          }else{
              kue.status = 'hangus'
          }
          console.log(`${kue.name}, menit ke ${time} : ${kue.status}`)
        }
      }
    }
}

class Cookie{
  constructor(name,matang){
      this.name = name
      this.matang = matang
      this.status = 'mentah'
  }
}

class Kacang extends Cookie{
  constructor(){
    super('Kue kacang',30)
  }
}

class Coklat extends Cookie{
  constructor(){
    super('Kue coklat', 20)
  }
}

class Keju extends Cookie{
  constructor(){
    super('Kue keju',35)
  }
}
let oven = new Oven()
let kacang = new Kacang()
let coklat = new Coklat()
let keju = new Keju()
oven.addCookie(kacang)
oven.addCookie(coklat)
oven.addCookie(keju)
oven.bake(30)
