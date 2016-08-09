import test from './mod1'
test("test3111.js")
let color = ['red', 'green', 'white']
let color2 = [...color, 'yellow' ]

console.log(color2)

let obj = {
    aaa: 1,
    bbb: 2,
    ccc: 3
}

let newObj = {
    ...obj,
    ddd: 4
}
console.log(newObj)