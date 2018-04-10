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
  constructor() {
    this.tray = []
  }

  masukanKue(kue){
    this.tray.push(kue)
  }

  pangang(timePanggang){
    console.log(timePanggang)
    let timer = 0
    while(timer < timePanggang){
      timer+=5
      for(let i=0; i<this.tray.length; i++){
        // console.log('ini waktu matan:',this.tray[i].waktuMatang)
        // console.log('>>>>>>>>>>', timer)
        if(timer === this.tray[i].waktuMatang){
          this.tray[i].statusKue = 'matang'
        } else if(timer <= (this.tray[i].waktuMatang/2)){
          this.tray[i].statusKue = 'mentah'
        } else if(timer < (this.tray[i].waktuMatang)){
          this.tray[i].statusKue = 'hampir matang'
        } else if(timer > (this.tray[i].waktuMatang)){
          this.tray[i].statusKue = 'hangus'
        }
        console.log(`${this.tray[i].namaKue}, menit ke ${timer} : ${this.tray[i].statusKue}`)
      }
    }
  }
}

class Kue {
  constructor(namaKue, waktuMatang) {
    this.namaKue = namaKue
    this.statusKue = 'mentah'
    this.waktuMatang = waktuMatang
  }
}

class KueCokelat extends Kue {
  constructor(){
    super('Kue Cokelat', 20)
  }
}

class KueKacang extends Kue {
  constructor(){
    super('Kue Kacang', 30)
  }
}

class KueKeju extends Kue {
  constructor(){
    super('Kue Keju', 35)
  }
}

let kueCokelat = new KueCokelat()
let kueKeju = new KueKeju()
// console.log(kueCokelat)
let oven = new Oven()
oven.masukanKue(kueCokelat)
oven.masukanKue(kueKeju)
console.log(oven.tray)
oven.pangang(30)
