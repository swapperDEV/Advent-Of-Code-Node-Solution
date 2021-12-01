const fs = require('fs');
let allNumber = fs.readFileSync('./data.txt')
allNumber = allNumber.toString()
const numberTable = allNumber.split('\r\n').map(x => parseInt(x));
let count = 0

for(let i=0; i<numberTable.length; i++) {
    if(numberTable[i] > numberTable[i-1]) {
        count++
    }
}
console.log(count)