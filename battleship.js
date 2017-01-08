// Your code here
const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

var papan = [];
function battleship() {
    console.log("AC : Aircraft carrier(5)");
    console.log("BS : Battleship(4)");
    console.log("CR : Cruiser(3)");
    console.log("DS : Destroyer(2)\n");
    var huruf = "ABCDEFGHIJ"
    huruf = huruf.split("")
    for (var i = 0; i < 11; i++) {
        var blok = [];
        for (var j = 0; j < 11; j++) {
            if (papan.length == 0) {
                if (j == 0) {
                    blok.push(" ")
                } else {
                    blok.push(`${j}`)
                }
            } else {
                if (j == 0) {
                    blok.push(huruf[i - 1])
                } else {
                    blok.push(" ")
                }
            }
        }
        papan.push(blok)
    }
    var tmp1 = []
    var tmp2 = []
    var i = 0
    while (i < 14) {
        var random1 = Math.ceil(Math.random() * 10)
        var random2 = Math.ceil(Math.random() * 10)
        tmp1.push(random1)
        tmp2.push(random2)
        if (tmp1.indexOf(random1) != -1 && tmp2.indexOf(random2) != -1) {
            if (i < 2) {
                papan[random1][random2] = "DS"
            } else if (i < 7) {
                papan[random1][random2] = "AC"
            } else if (i < 11) {
                papan[random1][random2] = "BS"
            } else if (i < 14) {
                papan[random1][random2] = "CR"
            }
            i++
        }
    }
    return papan;
}
console.log(battleship());

function run(){
  var status = 0
  for (var i = 1; i < 11; i++) {
    if(papan[i].indexOf("AC") != -1 || papan[i].indexOf("CR") != -1 || papan[i].indexOf("BS") != -1 || papan[i].indexOf("DS") != -1){
      status ++
      break;
    }
  }
  if(status == 0 ){
    console.log(`Selamat Kamu Menang`)
    rl.close()
    return
  }

    rl.question("Luncurkan Misil :", (misil) => {
      misil = misil.toString().split("")
      var kode1 = (misil[0].toUpperCase().charCodeAt())-64
      var kode2 = Number(misil[1])
      if(misil.length==3){
          kode2 = Number(misil[1]+misil[2])
      }
      if(typeof(kode1)=="number" && typeof(kode2)=="number" && misil.length < 4 && misil.length>1){
        papan[kode1][kode2] = " "
        console.log(papan);
        return run()
      }else{
        console.log(`Kode Misil Salah`);
        return run()
        rl.close()
      }
    })
}

run()
