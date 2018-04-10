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
    static bake(kue,timeBake){
      let time = 0
      while(time <timeBake){
        time +=5
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

let kacang = new Kacang()
Oven.bake(kacang,30)
let coklat = new Coklat()
Oven.bake(coklat,25)
let keju = new Keju()
Oven.bake(keju,25)
