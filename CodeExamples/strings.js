// // //strings
// //
// // var aStr = 'This is a string'
// // console.log(aStr)
//
// //scope (visibility)
// //global file scope
// //function scope
//
// //hoisting
// //a = 5
//
// // //iefe for scope
// // (function () {
// //     var a
// // })()
//
// // function series(end) {
// //     let result = 0
// //     for (let counter = 0; counter < end; counter++) {
// //         result = result + counter
// //     }
// //     return counter
// // }
//
// const a = 5
// {
//     let stuff
//     {
//         let a
//         a = 6
//     }
// }
// a = 9
// //let result = series (8)
// console.log('Result is', a)

// let a = 9
// const aStr = 'This is my string with the value'
// console.log(aStr, a)
// console.log(aStr + ' ' + a)
// console.log(`This is my string with the value $${a}`)
// console.log(`${aStr} ${a}`)
// const str2 = 'This is a\nmulti-line\nstring'
// console.log(str2)
// const str3 = `THIS
// is a
// multi-line
// string.`
// console.log(str3)

//coercion
let a = 1.0
let b = '1'
console.log(a == b)
console.log(b === a)
console.log(typeof a, typeof b)

