class Employee {
	#name;
	#age;
	#salary;
	
	  setName(name) {
		  this.#name = name;
		  return this;
	  }
	  setAge(age){
	  	if (age > 0 & age < 120) {
			  this.#age = age;
			  return this;
		  } else {
			throw new Error('age is incorrect');
		  }
	  }
	  setSalary(salary) {
		  this.#salary = salary + '$';
		  return this;
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
employee.setName('Patrick_Bateman').setAge(27).setSalary(340000);

console.log(employee.getName());
console.log(employee.getAge());
console.log(employee.getSalary());