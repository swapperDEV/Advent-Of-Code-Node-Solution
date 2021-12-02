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
    x: 0,
    y: 0
}
dataTable.forEach(e => {
    switch(e.where) {
        case 'forward':
            position.x+=e.value
            break;
        case 'up':
            position.y-=e.value
            break;
        case 'down':
            position.y+=e.value
            break;
        default:
            console.log('error')
    }
})
console.log(position.x * position.y)