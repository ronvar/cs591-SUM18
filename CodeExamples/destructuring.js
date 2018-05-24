//spreads

let a = [1,2,4,5,6];
console.log(a);
[1,2,3].map(function () {
    
})

let [x, b, ...c] = [...a] //...c is 'the rest of'

console.log(c) //spread operator

function returnArray () {
    return [1,2]
}


let returnArrayArrow = (x) => [x+2, x+3]

let returnLonger = (x) => {
    let y = x+2
    let z = x + 1
    return [y,z]
}



let [a1, a2] = returnLonger(2)
console.log(a1, a2)
//destructuring


