class Kue {
  constructor(name, waktuMatang) {
    this.name = name
    this.waktuMatang = waktuMatang || 0
  }
}

class KueCoklat extends Kue {
  constructor() {
    super("Kue Coklat", 20)
  }
}

class KueKacang extends Kue {
  constructor() {
    super("Kue Kacang",30)
  }
}

class KueKeju extends Kue {
  constructor() {
    super("Kue Keju",35)
  }
}

module.exports = {
                    KueKacang,
                    KueCoklat,
                    KueKeju
                  };
