const fs = require('fs')
let data = fs.readFileSync('./data.txt').toString()
const dataTable = data.split('\r\n')

let epsilion = '';
let gamma = '';
for(let i=0; i<(dataTable[0].length); i++) {
    let state = []
    dataTable.forEach((e, index) => {
        state.push(e[i].toString())
    })
    let nullNumber = 0;
    let one = 0;
    state.forEach((e) => {
        if(e === '0') {
            nullNumber++
        } else {
            one++
        }
    })
    if(nullNumber > one) {
        gamma+= '0'
        epsilion+= '1'
    } else {
        gamma+= '1'
        epsilion+= '0'
    }


}

epsilion = parseInt(epsilion,2)
gamma = parseInt(gamma, 2)

let energyWaste = epsilion * gamma
console.log(energyWaste)