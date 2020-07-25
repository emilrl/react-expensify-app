import * as firebase from 'firebase';

const config = {
	apiKey: process.env.FIREBASE_API_KEY,
	authDomain: process.env.FIREBASE_AUTH_DOMAIN,
	databaseURL: process.env.FIREBASE_DATABASE_URL,
	projectId: process.env.FIREBASE_PROJECT_ID,
	storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
	messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID
};

firebase.initializeApp(config);

const database = firebase.database();

export { firebase, database as default };

// // child_removed

// database.ref('expenses').on('child_removed', (snapshot) => {
// 	console.log(snapshot.key, snapshot.val());
// });

// // child_changed

// database.ref('expenses').on('child_changed', (snapshot) => {
// 	console.log(snapshot.key, snapshot.val());
// });

// // child_added

// database.ref('expenses').on('child_added', (snapshot) => {
// 	console.log(snapshot.key, snapshot.val());
// });

// database.ref('expenses')
// 	.once('value')
// 	.then((snapshot) => {
// 		const expenses = [];

// 		snapshot.forEach((childSnapshot) => {
// 			expenses.push({
// 				id: childSnapshot.key,
// 				...childSnapshot.val()
// 			});
// 		});

// 	console.log(expenses);
// 	});


// const onValueChange = database.ref('expenses').on('value', (snapshot) => {
// 	const expenses = [];

// 	snapshot.forEach((childSnapshot) => {
// 		expenses.push({
// 			id: childSnapshot.key,
// 			...childSnapshot.val()
// 		});
// 	});
// 	console.log(expenses)
// });

// database.ref('expenses').push({
// 	description: "Coffee",
// 	note: "",
// 	amount: 450,
// 	createdAt: 32958723
// });















// database.ref('notes/-MC9jo5gyGoFMYqioODa').remove();

// database.ref('notes').push({
// 	title: 'Course Topics',
// 	body: 'React Native, Agular, Python'
// });

// const onValueChange = database.ref().on('value', (snapshot) => {
// 	const data = snapshot.val();
// 	console.log(`${data.name} is a ${data.job.title} at ${data.job.company}.`)
// }, (e) => {
// 	console.log('Error fetching the data', e)
// });

// database.ref().update({
// 	name: 'Emil',
// 	'job/title': 'Data Analyst',
// 	'job/company': 'Bloomberg'
// })

// const onValueChange = database.ref().on('value', (snapshot) => {
// 	console.log(snapshot.val())
// }, (e) => {
// 	console.log('Error with data fecthing', e)
// });

// setTimeout(() => {
// 	database.ref('age').set(29)
// }, 3500);

// setTimeout(() => {
// 	database.ref().off(onValueChange)
// }, 7000);

// setTimeout(() => {
// 	database.ref('age').set(30)
// }, 10500);

// database.ref('location/city').
// 	once('value')
// 	.then((snapshot) => {
// 		const val = snapshot.val();
// 		console.log(val);
// 	})
// 	.catch((e) => {
// 		console.log('Error fetching data: ', e)
// 	});

// database.ref().set({
// 	name: 'Andrew Mead',
// 	age: 26,
// 	stresslevel: 6,
// 	job: {
// 		title: 'Software Developer',
// 		company: 'Google'
// 	},
// 	location: {
// 		city: 'Philadelphia',
// 		country: 'United States'
// 	}
// }).then(() => {
// 	console.log('Data is saved');
// }).catch((e) => {
// 	console.log('This failed.', e);
// });

// database.ref().update({
// 	stresslevel: 9,
// 	'job/company': 'Amazon',
// 	'location/city': 'Seattle'
// });

// database.ref()
// .remove()
// .then(() => {
// 	console.log('Remove succeeded')
// }).catch((e) => {
// 	console.log('Remove failed: ', e)
// });