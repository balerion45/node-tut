// GLOBALS - NO WINDOW !!!!

// __dirname - path to current directory
// __filename - file name
// require    - function to use module(Common JS)
// module - info about current module(file)
// process - info about env where the program is being executed

// console.log(__dirname)
// setInterval(()=>{
// console.log('hello world')
// },1000)

// CommonJS, every file is module (by default)
// Modules - Encapsulated Code (only share minimum)
const secret = 'SUPER SECRET'
const timir = 'timir'
const vivek = 'vivek'

const names = require('./4-names')
const sayHi = require('./5-utils')
const data = require('./6-alternative-flavor')
require('./7-mind-grenade')

// sayHi("Tisha")
// sayHi(names.timir)
// sayHi(names.vivek)