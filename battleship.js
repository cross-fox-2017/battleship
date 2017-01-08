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

    var random = Math.ceil(Math.random() * 4)
    var ramdom2 = Math.ceil(Math.random()*2)
    for (var i = 0; i < 5; i++) {
        papan[random+i][random] = "AC" //5
    }
    for (var i = 0; i < 4; i++) {
        papan[random+i][random+1+ramdom2] = "BS" //4
    }
    for (var i = 0; i < 3; i++) {
        papan[random+i+ramdom2][random+2+ramdom2] = "CR" //3
    }
    for (var i = 0; i < 2; i++) {
        papan[random+i+ramdom2][random+3+ramdom2+1] = "DS" //2
    }

    return papan;
}
console.log(battleship());

function run() {
    var status = 0
    for (var i = 1; i < 11; i++) {
        if (papan[i].indexOf("AC") != -1 || papan[i].indexOf("CR") != -1 || papan[i].indexOf("BS") != -1 || papan[i].indexOf("DS") != -1) {
            status++
            break;
        }
    }
    if (status == 0) {
        console.log(`Selamat Kamu Menang`)
        rl.close()
        return
    }

    rl.question("Luncurkan Misil :", (misil) => {
        misil = misil.toString().split("")
        var kode1 = (misil[0].toUpperCase().charCodeAt()) - 64
        var kode2 = Number(misil[1])
        if (misil.length == 3) {
            kode2 = Number(misil[1] + misil[2])
        }
        if (typeof(kode1) == "number" && typeof(kode2) == "number" && misil.length < 4 && misil.length > 1) {
            papan[kode1][kode2] = " "
            console.log(papan);
            return run()
        } else {
            console.log(`Kode Misil Salah`);
            return run()
            rl.close()
        }
    })
}

run()
