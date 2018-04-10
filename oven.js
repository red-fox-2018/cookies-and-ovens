class Oven {
  constructor() {
    this._tray = []
  }

  set tray(jumlah){
    for(let i=1; i<=jumlah; i++){
      this._tray.push({no: i, kue: []})
    }
  }

  tambahKue(noTray, kue){
    this._tray.forEach(function(tray){
      if(tray.no === noTray){
        tray.kue.push(kue)
      }
    })
  }

  panggang(waktu){
    for(let i = 0; i <= waktu; i+=5){
      console.log(`\n ======== Menit ke ${i} ========`);
      for(let j = 0; j < this._tray.length; j++){
        // console.log(this._tray[j].kue.length);
        for(let k = 0; k < this._tray[j].kue.length; k++){
          // console.log(this._tray[j].kue[k]);
          if(i < this._tray[j].kue[k].waktuMatang/2){
            console.log(`${this._tray[j].kue[k].name}, menit ke ${i} : mentah`);
          } else if(i >= this._tray[j].kue[k].waktuMatang/2 && i < this._tray[j].kue[k].waktuMatang){
            console.log(`${this._tray[j].kue[k].name}, menit ke ${i} : hampir matang`);
          } else if(i == this._tray[j].kue[k].waktuMatang){
            console.log(`${this._tray[j].kue[k].name}, menit ke ${i} : matang`);
          } else {
            console.log(`${this._tray[j].kue[k].name}, menit ke ${i} : hangus`);
          }
        }
      }
    }
  }

}

module.exports = Oven;
