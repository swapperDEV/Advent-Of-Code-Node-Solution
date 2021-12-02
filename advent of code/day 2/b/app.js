const fs = require('fs')
let data = fs.readFileSync('./data.txt').toString()
const dataTable = data.split('\r\n')
dataTable.forEach((e, index) => {
    const splitData = e.split(' ')
    let where = splitData[0]
    let value = splitData[1]
    dataTable[index] = {
        where: where,
        value: parseInt(value),
    }
})

let position = {
    horizontal: 0,
    depth: 0,
    aim: 0
}

dataTable.forEach(e => {
    switch(e.where) {
        case 'forward':
            position.horizontal += e.value
            position.depth += e.value * position.aim
            break;
        case 'up':
            position.aim -= e.value
            break;
        case 'down':
            position.aim += e.value
            break;
        default:
            console.log('error')
    }
})
console.log(position.horizontal * position.depth)