function yearOfBirth(age){
	return 2017 - age;
}

function whoAmI(name, age) {
	let yob = yearOfBirth(age);
	console.log(`My name is ${name} and I'm ${age} years old.`);
	console.log(`I was born in ${yob}.`);
}

whoAmI("Chris", 29);

