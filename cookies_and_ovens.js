// Answer These Questions:
//
// - What are essential classes? Cook, Cake
// - What attributes will each class have? 
// - What interface will each class provide?
// - How will the classes interact with each other?
// - Which classes will inherit from others, if any?
//
//
// Your code here

class Cook {

    static cooking (loyang, waktu) {

        let index = 0
        let cookingTime = loyang[index].cookTime
        
        for (let i = 0; i < loyang.length; i++) {
            index += i
            let cookingStatus = loyang[i].status
            let baked = loyang[i].baked
            for (let j = 0; j < waktu; j+=5) {

                if (cookingTime < 10) {

                    cookingStatus = 'mentah'
                } else if (cookingTime < baked) {

                    cookingStatus = 'hampir matang'
                } else if (cookingTime == baked) {

                    cookingStatus = 'matang'
                } else {

                    cookingStatus = 'gosong'
                }

                console.log('Kue '+loyang[i].name+', menit ke '+cookingTime+' : '+cookingStatus)

                cookingTime += 5
            }
            
        }
    }
}

class Cake {

    constructor(name, time){

        this.name = name
        this.cookTime = 0
        this.baked = time
        this.status = 'mentah'
    }
}

class Coklat extends Cake {

    constructor(){
        super('coklat',20)
    }
}

class Kacang extends Cake {

    constructor(){
        super('kacang',30)
    }
}

class Keju extends Cake {

    constructor(){
        super('keju',35)
    }
}

let coklat = new Coklat()
let kacang = new Kacang()
let keju = new Kacang()

Cook.cooking([coklat,kacang], 40)