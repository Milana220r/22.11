class Employee {
	#name;
	#age;
	#salary;
	
	  setName(name) {
		  this.#name = name;
	  }
	  setAge(age){
	  	if (age > 0 & age < 120) {
			  this.#age = age;
		  } else {
			throw new Error('age is incorrect');
		  }
	  }
	  setSalary(salary) {
		  this.#salary = salary + '$';
	  }
	  
	  getName() {
		  return this.#name;
	  }
	  getAge(){
	    return this.#age;
	  }
	  getSalary() {
		  return this.#salary;
	  }
  }

let employee = new Employee;
employee.setName('Milana');
employee.setAge(18);
employee.setSalary(4300)

console.log(employee.getName());
console.log(employee.getAge());
console.log(employee.getSalary());