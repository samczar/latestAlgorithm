class User {
	constructor(firstName, lastName, gender) {
		this.firstName = firstName
		this.lastName = lastName
		this.gender = gender
	}
	static bio() {
		return `This is the first name ${this.firstName}`
	}
}

// let user = new User('Sam', 'Anyanka', 'male')

class Details extends User {
	constructor(firstName, lastName) {
		super(firstName, lastName)
		this.fullName = this.bio()
	}
}

// let detail = new Details('Anyanka ', 'Samczar')
// console.log(User.bio())

const Person = function (firstName, lastName) {
	this.firstName = firstName
	this.lastName = lastName
}

let person1 = new Person('JJ', 'Austine')

Person.prototype.education = 'PHD'

console.log(person1.education)
