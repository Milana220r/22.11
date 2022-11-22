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
	  getSalary() {
		  return this.#salary;
	  }
  }