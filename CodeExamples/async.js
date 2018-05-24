//Doesn't work!

const request = require('request-promise')

const rates = function (cb) {
    let fx = request('http://apilayer.net/api/live?access_key=707d4d2111a1976c7c4bbd767a9bf3a6&source=USD&currencies=EUR&format=2')
//    return JSON.parse(fx)
    cb( JSON.parse(fx))
}
const cb = rate => console.log(`Rates are ${rate}`)

rates(cb)

//rates (rate => console.log(`Rates are ${rate}`))

//PROMISES