const {KueKeju, KueCoklat, KueKacang} = require('./kue.js');
const Oven = require('./oven.js');



let kueCoklat = new KueCoklat()
let kueKacang = new KueKacang()
let kueKeju = new KueKeju()

let oven = new Oven()
oven.tray = 3 //memasukkan jumlah tray

//Menambah kue ke dalam Oven oven.tambahKue(nomor_tray, kue)
oven.tambahKue(1, kueCoklat)
oven.tambahKue(1, kueKacang)
oven.tambahKue(2, kueKacang)
oven.tambahKue(3, kueKeju)
oven.tambahKue(3, kueKeju)

oven.panggang(30)
