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


class Kue {
  constructor(nameParam) {
    this.name = nameParam;
    this.status = 'mentah';
  }
}

class KueCoklat extends Kue{
  constructor(nameParam) {
    super(nameParam)
    this._cookTime = 20; //minutes
    this._cookInterval = 10;
  }
}

class KueKacang extends Kue{
  constructor(nameParam) {
    super(nameParam)
    this._cookTime = 30; //minutes
    this._cookInterval = 15;
  }
}

class KueKeju extends Kue{
  constructor(nameParam) {
    super(nameParam)
    this._cookTime = 35; //minutes
    this._cookInterval = 5
  }
}

class Oven {
  constructor() {

  }

  static bake(kue) {
    let toProccess = []
    for (var i = 0; i < kue.length; i++) {
      if (kue[i] === 'kue coklat') {
        toProccess.push(new KueCoklat(kue[i]));
      } else if (kue[i] === 'kue kacang') {
        toProccess.push(new KueKacang(kue[i]))
      } else if (kue[i] === 'kue keju') {
        toProccess.push(new KueKeju(kue[i]))
      }
    }
    return toProccess;
  }

  static bakingRecommendation(nama_param, arr) {
    let statusArr = [];
    for (var i = 0; i < arr.length; i++) {
      if (arr[i].name === nama_param) {
        console.log(arr[i]);
        let limitCook = arr[i]._cookTime
        let interval = arr[i]._cookInterval
        for (var j = 0; j <= limitCook + interval; j += interval) {
          if (j < limitCook - interval) {
            statusArr.push(new Baking(j, 'mentah'))
          } else if (j < limitCook) {
            statusArr.push(new Baking(j, 'hampir matang'))
          } else if (j === limitCook) {
            statusArr.push(new Baking(j, 'matang'))
          } else {
            statusArr.push(new Baking(j, 'hangus'))
          }
        }
      }
    }
    return statusArr;
  }
}

class Baking {
  constructor(timeParam, statusParam) {
    this.time = timeParam;
    this.status = statusParam;
  }
}

let kueArr = ['kue coklat', 'kue kacang', 'kue keju'];
let anekaKue = Oven.bake(kueArr);
console.log(anekaKue);
console.log('\n==========================\n');
let bakeKueCoklat = Oven.bakingRecommendation('kue coklat', anekaKue);
console.log(bakeKueCoklat);
console.log('\n==========================\n');
for (var i = 0; i < bakeKueCoklat.length; i++) {
  console.log(`kue coklat, menit ke ${bakeKueCoklat[i].time} : ${bakeKueCoklat[i].status}`);
}
