// Answer These Questions:
//
// - What are essential classes?
// - What attributes will each class have?
// - What interface will each class provide?
// - How will the classes interact with each other?
// - Which classes will inherit from others, if any?
//
//
class Cookie{
    constructor(name,matang){
       this.name = name
       this.matang = matang
       this.status = 'mentah'
    }
}

class KueCoklat extends Cookie{
    constructor(){
        super()
        this.name = "Kue Coklat"
        this.matang = 20
    }
}

class KueKacang extends Cookie{
    constructor(){
        super()
        this.name = "Kue Kacang"
        this.matang = 30
    }
}

class KueKeju extends Cookie{
    constructor(){
        super()
        this.name = "Kue Keju"
        this.matang = 35
    }
}

class OvenCookie{
    static make(cake){
        let timer = 0
        let result = []
        while(timer < cake.matang+5) {
            timer += 5
            if (timer > cake.matang+5)
                timer = cake.matang
                if(timer<=10){
                    result.push(`${cake.name}, Menit ke ${timer} : ${cake.status}`);
                }
                else if (timer < cake.matang){
                    result.push(`${cake.name}, Menit ke ${timer} : ${cake.status="hampir matang"}`);
                }else if (timer == cake.matang){
                    result.push(`${cake.name}, Menit ke ${timer} : ${cake.status="matang"}`);
                }else{
                    result.push(`${cake.name}, Menit ke ${timer} : ${cake.status='hangus'}`);
                }
            
        }
        return result
    }
}

let kuecoklat = new KueCoklat()
let kuekeju = new KueKeju()
let kuekacang = new KueKacang()

let cook_cookie = OvenCookie.make(kuecoklat)

for(let i=0;i<cook_cookie.length;i++){
    console.log(cook_cookie[i])
}

