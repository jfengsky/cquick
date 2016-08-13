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

//var arr = [{
//    name: "aaa",
//    age: 12
//},{
//    name: "bbb",
//    age: 3
//},{
//    name: "ccc",
//    age: 5
//},{
//    name: "ddd",
//    age: 17
//}]
//
//// 收集对象中的name
//var names = _.pluck(arr, 'name')
//console.log(names);
//
//var sort = _.indexBy(arr, 'age')
//console.log(sort)
//
//var size = _.size(arr)
//console.log(size)

//console.log(_.compact([0, 1, null, 2, '', undefined, NaN,3,4]))

//console.log(_.without([1,2,3,4,5],1,2))

//console.log(_.union([1,2,3],[2,3,4,5]))
//console.log(_.intersection([1,2,3],[2,3,4]))
//console.log(_.difference([1,2,3],[3,4,5]))


//var func = function(){
//    return 'hello ' + this.name
//}
//
//func = _.bind(func, {name: "world"})
//
//console.log(func())
//
//_.bindAll
//_.after
//_.before
//_.throttle
//_.debounce

var obj = {
    one: 1,
    two: 2,
    three:{
        four: 4,
        five: 5
    }
}

var obj4 = {
    one: 1,
    two: 2,
    three:{
        four: 4,
        five: 5,
        six: 6
    }
}

var obj2 = {
    six: 6,
    three: {
        eight: 7
    }
}

var obj3 = {
    one: 1,
    two: 22,
    three:{
        six: 6
    },
    eight: 7
}

//console.log(_.invert(obj))

//console.log(_.extend(obj, obj2))

//console.log(_.pick(obj, 'one'))
//console.log(_.omit(obj,'two'))

//console.log(_.defaults(obj, obj3))

console.log(_.isEqual(obj, obj4))