class Employee {
	#name;
	#salary;
	
	constructor(name, salary) {
		this.#name = name;
		this.#salary = salary;
	}
	getName() {
		return this.#name;
	}
	getSalary(){
	  return this.#salary
	}
}

let employees = [
  new Employee('Anna', 4500),
  new Employee('Tanya', 2700),
  new Employee('Andrey', 3200),
  new Employee('Milana', 6400)
  ]
  
for (let employee of employees) {
	console.log(employee.getName() + " " + employee.getSalary());
}