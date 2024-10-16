var chunk = require('lodash/array/chunk');

const f = () => {
	console.log('Hello World');
	var result = chunk(['a', 'b', 'c', 'd'], 2);
	console.log(result);
};

f();
