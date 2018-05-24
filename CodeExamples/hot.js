let temps = [
    {name: 'boston', temp: 70},
    {name: 'nyc', temp: 60},
    {name: 'dc', temp: 65}
    ]

let hottest = Math.max(...Array.from(temps, city => city.temp))

let hotCity = temps.find(city => city.temp == hottest)

console.log(`The hottest city is ${hotCity.name} at ${hottest} degrees `)

//console.log(temps)