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

// class Kue {
// 	constructor(hangus,matang,hampir_matang,mentah) {
// 		this.hangus=hangus;
// 		this.

// 	}

// }

class Kue {
	constructor(name,hangus,matang,hampir_matang,mentah){
		this.name=name;
		this.hangus=hangus;
		this.matang=matang;
		this.hampir_matang=hampir_matang;
		this.mentah=mentah;
	}
}

class KueCoklat extends Kue {
	constructor() {
		super('Kue Coklat',25,20,15,10)
	}

}

class KueKacang extends Kue {
	constructor() {
		super('Kue Kacang',35,30,25,20)
	}
}

class KueKeju extends Kue {
	constructor() {
		super('Kue Keju',40,35,30,25)
		
	}
}


class Oven {

	constructor(list_kue) {
		this.arr_kue=list_kue;
	}



	prosesPanggang(waktu) {
		for(let j=5;j<=waktu;j+=5){
			for(let i=0;i<this.arr_kue.length;i++) {
		 		if(this.arr_kue[i].mentah>=j) {
		 			console.log(`${this.arr_kue[i].name}, menit ke ${j} mentah `)
		 		}else if(this.arr_kue[i].matang==j){
		 			console.log(`${this.arr_kue[i].name}, menit ke ${j} matang `)
		 		}else if(this.arr_kue[i].hampir_matang==j) {
		 			console.log(`${this.arr_kue[i].name}, menit ke ${j} hampir matang `)
		 		}else {
		 			console.log(`${this.arr_kue[i].name}, menit ke ${j} hangus `)
		 		}
		 	
		 	}
		} 

	}
}


// class Oven {
// 	constructor() {
// 		this.tes="keluar kah?"
// 	}
// }




var kueCoklat = new KueCoklat();
var kueKacang= new KueKacang();
var kueKeju = new KueKeju();
var list_kue = [kueCoklat, kueKacang, kueKeju]

var oven = new Oven(list_kue);
console.log(oven.arr_kue)
oven.prosesPanggang(30)

