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
  constructor(name, baked_time, cooking_time){
    this.name = name
    this.baked_time = baked_time
    this.cooking_time = cooking_time
    this.status = 'mentah'
    this.current_time = 0
    this.cooking_status = true
  }

  bakeStatus(){
    this.current_time += 5

    if(this.current_time == this.baked_time){
      this.status = 'matang'
      this.cooking_status = false
    } else if(this.current_time > this.baked_time){
        this.status = 'hangus'
    } else if(this.current_time == this.baked_time - 5){
        this.status = 'hampir matang'
    } else if(this.current_time < this.baked_time - 5){
       this.status = 'mentah'
    }

  }

  bakeCookies(){
    while(this.current_time < this.cooking_time){
      this.bakeStatus()
      console.log(`${this.name}, menit ke ${this.current_time}: ${this.status}`);
    }
  }

}

class KueCoklat extends Cookie {
  constructor(cooking_time) {
    super('Kue Coklat', 20, cooking_time)
  }
}

class KueKacang extends Cookie {
  constructor(cooking_time) {
    super('Kue Kacang', 30, cooking_time)
  }
}

class KueKeju extends Cookie {
  constructor(cooking_time) {
    super('Kue Keju', 35, cooking_time)
  }
}


let kueCoklat = new KueCoklat(25)
kueCoklat.bakeCookies()

let kueKacang = new KueKacang(35)
kueKacang.bakeCookies()

let kueKeju = new KueKeju(40)
kueKeju.bakeCookies()
