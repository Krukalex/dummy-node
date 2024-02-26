const os = require('os')
const path = require('path')
const {readFileSync, writeFileSync} = require('fs')

// info on current use

const user = os.userInfo()

console.log(user)

console.log(path.sep)

const first = readFileSync('./first.txt', 'utf8')
const second = readFileSync('./second.txt', 'utf8')

const newFile = writeFileSync('./third.txt', first)

console.log(first, second)