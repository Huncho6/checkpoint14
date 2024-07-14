const generator = require('generate-password');

const password = generator.generate({
	length: 10,
	numbers: true
});


console.log(password);

//to generate multiple passwords
const passwords = generator.generateMultiple(5, { //specify num of password to be generated 
	length: 10, //length of the passwords
	uppercase: true
});

console.log(passwords);
