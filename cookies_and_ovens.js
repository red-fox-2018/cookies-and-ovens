// import { SSL_OP_COOKIE_EXCHANGE } from "constants";

// Answer These Questions:
//
// - What are essential classes? cookies,oven,coklat,kacang,kejur
// - What attributes will each class have? name, status, roasted time
// - What interface will each class provide?
// - How will the classes interact with each other?
// - Which classes will inherit from others, if any? coklat,kacang,keju
//
//
// Your code here

class Cookies{
    constructor(name){
        this.name = name || 'cookies'
        this.status = 'mentah'
        this.cooking_time = 0
    }
}

class Coklat extends Cookies{
    constructor(){
        super('coklat')
        this.done = 20
    }
}

class Kacang extends Cookies{
    constructor(){
        super('kacang')
        this.done = 30
    }
}

class Keju extends Cookies{
    constructor(){
        super('keju')
        this.done = 35
    }
}

let coklat = new Coklat()
let kacang = new Kacang()
let keju = new Keju()
let cookies = [coklat,kacang,keju]

class Oven{
    static bake(cookies){
        for(let i=0;i<cookies.length;i++){
            if((cookies[i].cooking_time+5)==cookies[i].done-5){
                cookies[i].status = 'hampir matang'
            }
            if((cookies[i].cooking_time+5)==cookies[i].done){
                cookies[i].status = 'matang'
            }
            if((cookies[i].cooking_time+5)>cookies[i].done){
                cookies[i].status = 'hangus'
            }
            cookies[i].cooking_time+=5
        }
        return cookies
    }
}
for(let time=0;time<=30;time+=5){
    Oven.bake(cookies)
    let coklat = cookies[0]
    let kacang = cookies[1]
    let keju = cookies[2]
    console.log()  
    console.log(`-------------- Menit ke ${time+5} -----------------`)  
    console.log(`Kue ${coklat.name}, menit ke ${coklat.cooking_time} : ${coklat.status} `)
    console.log(`Kue ${kacang.name}, menit ke ${kacang.cooking_time} : ${kacang.status} `)
    console.log(`Kue ${keju.name}, menit ke ${keju.cooking_time} : ${keju.status} `)
}
