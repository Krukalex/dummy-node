const app = require('./app.js')

const secret = 'super secret'
const john = 'john'
const peter = 'peter'


app.sayHi('john')

console.log(app.person.name)

module.exports = { john, peter }