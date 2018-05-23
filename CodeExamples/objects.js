//JSON

let egg = {
    color: 'white',
    size: 'medium'

}

let printColor = function ({size, color, weight}) {
    console.log(`size is ${size}`)
}

let printC = ({size = 'large', color = 'blue', weight = 5}) => console.log(`size is ${size} at weight ${weight}`)


let foo = printC(egg)

//
// console.log(`The egg color is ${egg.color}`)
// console.log(egg)
// let strEgg = JSON.stringify(egg)
// console.log(strEgg)
//
// let parsedEgg = JSON.parse(strEgg)
// console.log(parsedEgg)