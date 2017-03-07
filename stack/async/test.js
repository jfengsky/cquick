const f = () => {
    return new Promise((resolve, reject) => {
        setTimeout(function() {
            // resolve(123)
            reject(234)
        }, 2000);
    })
}

const testAsync = async () => {
    const t = await f()
    console.log(t)
    console.log(1111)
}



// const testAsync = () => {
//     f().then(t => {
//         console.log(t)
//     })
//     console.log(222)
// }


// const testAsync = () => {
//     try {
//         const t = await f()
//         console.log(t)
//     } catch (err) {
//         console.log(err)
//     }
// }

testAsync()