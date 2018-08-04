//object destructuring

// const person = {
//   name: 'Jaini',
//   age: 31,
//   location: {
//     city: 'Ortigas',
//     temp: 29
//   }
// }

// const { name: firstName = 'Anonymous', age } = person
// console.log(`${firstName} is ${age}.`)

// const { city, temp: temperature } = person.location
// if (city && temperature) {
//   console.log(`It's ${temperature} in ${city}.`)
// }

// const book = {
//   title: 'The Bhagavat Gita',
//   author: 'Sri Aurobindo',
//   publisher: {
//     //name: 'Test'
//   }
// }

// const { name : publisherName = 'Self-Published' } = book.publisher
// console.log(publisherName);


//array destructuring

const address = ['213123 Panday Pira', 'Tondo', 'Manila', '1012']

const [ , city = 'Knowhere', state ] = address

console.log(`You are in ${city}, ${state}`)


const item = ['Coffee (iced)', '$3.00', '$3.50', '$3.75']

const [ menuItem, , medium ] = item

console.log(`A medium ${menuItem} costs ${medium}`)