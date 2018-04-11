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






// class Cookies{
//     constructor(){
//         this.cookieName = null
//         this.cookieCondition = 'mentah'
//         this.halfFinish = null
//         this.timeToFinishCook = null
//     }
// }

class PeanutCookie{
    constructor(){
        // super()
        this.cookieName = 'Peanut Cookie'
        this.cookieCondition = 'mentah'
        this.halfFinish = 15
        this.timeToFinishCook = 20
    }
}

class ChocolateCookie{
    constructor(){
        // super()
        this.cookieName = 'Chocolate Cookie'
        this.cookieCondition = 'mentah'
        this.halfFinish = 25
        this.timeToFinishCook = 30
    }
}

class CheeseCookie{
    constructor(){
        // super()
        this.cookieName = 'Cheese Cookie'
        this.cookieCondition = 'mentah'
        this.halfFinish = 30
        this.timeToFinishCook = 35
    }
}

let peanutCookie = new PeanutCookie()
let chocolateCookie = new ChocolateCookie()
let cheeseCookie = new CheeseCookie()

class Oven{
    
    static bake(time, cookie){
        let bakingTime = 0;
        while(bakingTime <= time){
            if(bakingTime === cookie.halfFinish){
                cookie.cookieCondition = 'setengah matang'
            }
            else if(bakingTime === cookie.timeToFinishCook){
                cookie.cookieCondition = 'matang'
            }
            else if(bakingTime > cookie.timeToFinishCook){
                cookie.cookieCondition = 'hangus'
            }
            else{
                cookie.cookieCondition = 'mentah'
            }
            console.log(cookie.cookieName+', '+' menit ke '+bakingTime+' : '+cookie.cookieCondition)
            bakingTime += 5;
        }
    }

}

Oven.bake(35,peanutCookie)
// Oven.bake(25,chocolateCookie)
// Oven.bake(30,cheeseCookie)