'use strict'

class Kue {
  constructor(name, timeCooked) {
    this.name = name
    this.timeBake = 0
    this.timeCooked = timeCooked
    this.status = 'mentah'
  }
}

class KueCoklat extends Kue {
  constructor(name, timeCooked) {
    super(name, 20)
  }
}

class KueKacang extends Kue {
  constructor(name, timeCooked) {
    super(name, 30)
  }
}

class KueKeju extends Kue {
  constructor(name, timeCooked) {
    super(name, 35)
  }
}

class Oven {
  static bake(list, time) {
    for(let i=0; i<list.length; i++) {
      console.log(`===================${list[i].name}======================`)
      for(let j=5; j<=time; j+=5) {

        if(j > list[i].timeCooked) {
          list[i].status = 'hangus'
          console.log(`${list[i].name}, menit ke ${j} : ${list[i].status}`)
        } else if(j == list[i].timeCooked) {
          list[i].status = 'matang'
          console.log(`${list[i].name}, menit ke ${j} : ${list[i].status}`)
        } else if(j + 5 == list[i].timeCooked) {
          list[i].status = 'hampir matang'
          console.log(`${list[i].name}, menit ke ${j} : ${list[i].status}`)
        } else {
          console.log(`${list[i].name}, menit ke ${j} : ${list[i].status}`)
        }
      }
    }
  }
}

let kueCoklat = new KueCoklat('Kue Coklat')
let kueKacang = new KueKacang('Kue Kacang')
let kueKeju = new KueKeju('Kue Keju')

let list = []
list.push(kueCoklat)
list.push(kueKacang)
list.push(kueKeju)

Oven.bake(list, 30)
