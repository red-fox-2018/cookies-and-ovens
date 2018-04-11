class Kue{
    constructor(name,cook){
        this.name=name
        this.cookedTime=cook
        this.currentTime=0
        this.status="mentah"
    }

    masakKue(){
        var str=""
        for(var i=0; i<this.cookedTime+5; i+=5){
            this.currentTime+=5
            this.statusKue()
            str+= "Menit ke "+this.currentTime +" " + this.name+" " + this.status +"\n"
        }
        console.log(str)
    }

    statusKue(){
        if(this.currentTime<=Math.round(this.cookedTime/2)){
            this.status="mentah"
        }
        else if(this.currentTime<=this.cookedTime-10){
            this.status="hampir mateng"
        }
        else if(this.currentTime<=this.cookedTime){
            this.status="mateng"
        }
        else if(this.currentTime>=this.cookedTime+5){
            this.status="gosong"
        }
    }
}


class KueCoklat extends Kue{
    constructor(name,cook){
        super(name,cook)
    }
}

class KueKeju extends Kue{
    constructor(name,cook){
        super(name,cook)
    }
}

class KuePisang extends Kue{
    constructor(name,cook){
        super(name,cook)
    }
}

let kue = new Kue()
let kuecoklat=new KueCoklat("Kue coklat",25)
let kuekeju=new KueKeju("Kue Keju",35)
let kuepisang=new KuePisang("Kue Pisang",30)
kuecoklat.masakKue()
kuekeju.masakKue()
kuepisang.masakKue()

