// Object Destructuring

// const person = {
// 	name: 'Andrew',
// 	age: 30,
// 	location: {
// 		city: 'Tokyo',
// 		temp: 28
// 	}
// };

// const { name: firstName = 'Anonymous', age } = person
// console.log(`${firstName} is ${age} years old.`)

// const { temp: temperature, city } = person.location
// if (city && temperature) {
// 	console.log(`It's ${temperature} degrees in ${city}`)
// }

// const book = {
// 	title: "Ego is the enemy",
// 	author: 'Ryan Holiday',
// 	publisher: {
// 		name: 'Penguin'
// 	}
// };

// const { name: publisherName = 'Self-Published' } = book.publisher

// console.log(publisherName)


// Array Destructuring

// const address = ['1299 S Juniper Street', 'Philadelphia', 'Pennsylvania', '19147'];
// const [, city, state = 'New York'] = address;
// console.log(`You are in ${city} ${state}.`)

const item = ['Coffee (iced)', '$2.00', '$3.50', '$2.75'];
const [itemName, , mediumPrice] = item;

console.log(`A medium ${itemName} costs ${mediumPrice}`);