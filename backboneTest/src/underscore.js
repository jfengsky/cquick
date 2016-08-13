// _.each([1,2,3, 4,5], (val, key)=>{
//     console.log('key:' + key + ';' + 'val:' + val)
// })

// _.each({one:1, two: 2, three: 3}, (_index, _item) => {
//     console.log('_item:' + _item + ';' + '_index:' + _index)
// })

// var sum = _.reduce([1, 2, 3, 4], (meo, num) => {
//     console.log('meo:' + meo);
//     console.log('num:' + num);
//     return meo + num
// }, 10)

// console.log(sum);

// find 找到之后不再找了
// var even = _.find([1, 2, 3, 4, 5], num => {
//     return num % 2 === 0
// })


// console.log(even);

// filter 寻找所有满足条件的
// var even = _.filter([1, 2, 3, 4, 5, 6], num => {
//     return num % 2 === 0
// })

// console.log(even);

// 只要一个满足就返回true
// var someVal = _.some([1, 2, 3, 4, 5, 6, 7], val => {
//     return val > 5
// })

// console.log(someVal)

// 每一个满足才返回true
// var someVal = _.every([1, 2, 3, 4, 5, 6, 7], val => {
//     return val > 5
// })

// console.log(someVal)

var arr = [{
    name: "aaa",
    age: 10
},{
    name: "bbbb",
    age: 20
}]

// 收集对象中的name
var names = _.pluck(arr, 'name')
console.log(names);