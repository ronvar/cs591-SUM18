//
// const calc = (value, callback) => {
//     let result = value + 30
// //    return result
//     callback(result)
// }
//
// let result = calc (12, function(result) {
//     console.log(`Result is ${result}`)
// })
//
//

const delayedFunction = () => {
    setTimeout(function () {
        console.log('All done!')
    }, 5000)
}
let a = 5

delayedFunction()
console.log(a)