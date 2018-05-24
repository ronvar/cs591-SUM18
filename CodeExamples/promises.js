//ES5-ish syntax
//
const request = require('request-promise')
//const request = require('request')

const rates = function () {
    return new Promise((resolve, reject) => {
        try {
            let fx = request('http://apilayer.net/api/live?access_key=707d4d2111a1976c7c4bbd767a9bf3a6&source=USD&currencies=EUR&format=2')
            resolve(fx)
        }
        catch (err) {
            reject(err)
        }
    })
}

rates()
    .then(function (fx) {
            console.log(`Rate is ${fx}`)
        },
        (err) => console.log(`${err}`)
    )
    .then(() => console.log('All done.'))