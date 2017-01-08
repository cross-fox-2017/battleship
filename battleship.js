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
