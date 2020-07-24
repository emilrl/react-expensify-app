const promise = new Promise((resolve, reject) => {
	setTimeout(() => {
		resolve({
			name: 'Emil',
			age: 30
		});
		reject('Something went wrong')
	}, 1500);
});

console.log('before');

promise.then((data) => {
	console.log(1, data);

	return new Promise((resolve, reject) => {
		setTimeout(() => {
			resolve('This is my other promise');
		}, 1500);
	});
}).then((ref) => {
	console.log('does this run?', ref);
}).catch((error) => {
	console.log('error: ', error)
});
 
console.log('after');
