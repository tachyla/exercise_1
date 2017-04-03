function yearOfBirth(age){
	if(age < 0) {
		throw new Error("Age can not be negative");
	}

	else {
		return 2017 - age;
	}
	
}

function whoAmI(name, age) {
	if(typeof age !== 'number' && typeof name !== 'string') {
		throw new Error("Please enter a number in the age parameter and a string in the name parameter! ")
	}
	
	if(typeof age !== 'number') {
		throw new Error("Please enter a number in the age parameter!");
	}
	if (typeof name !== 'string') {
		throw new Error("Please enter a string in the name parameter!");
	}
	let yob = yearOfBirth(age);
	
	console.log(`My name is ${name} and I'm ${age} years old.`);
	console.log(`I was born in ${yob}.`);
}

try {
	whoAmI("Hello", "hi");
}
catch(e) {
	console.log(e.message);
}


