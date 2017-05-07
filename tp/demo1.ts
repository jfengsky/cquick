// class Person {
//   name: string
//   age: number
//   constructor(name: string, age: number){
//     this.name = name
//     this.age = age
//   }
//   print(){
//     return this.name + ':' + this.age
//   }
// }

// const p1 = new Person('zhangsan', 18)
// p1.print()


let x:[string, number] = ['aa', 10]

enum Color {
  Red = 4, Green = 2, Blue
}

let c:Color = Color.Red

console.log(c); // => 4

let colorName = Color[2]
console.log(colorName); // => Green