class Point {
    constructor(x, y) {
        this.x = x
        this.y = y
        console.log('constructor')
    }

    toString() {
        return '(' + this.x + ',' + this.y + ')'
    }
}

const p1 = new Point(2, 3)

// console.log(p1.toString())

function Points(x,y){
    this.x = x
    this.y = y
    this.toString = function(){
        return '(' + this.x + ',' + this.y + ')'
    }
}

const p2 = new Points(2,3)
// console.log(p2.toString())

console.log(p1.constructor)
console.log(p2.constructor)

console.log(Object.keys(Point.prototype))
console.log(Object.getOwnPropertyNames(Point.prototype))