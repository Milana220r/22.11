class Position{
	constructor(name) {
		  this.name = name;
	  }
  }
  class Department{
	constructor(name) {
		  this.name = name;
	  }
  }
  class Employee {
	  constructor(name, position, department) {
		  this.name = name;
		  this.position = position;
		  this.department = department;
	  }
  }
  
  let position = new Position('Vologda');
  let department = new Department('IT');
  let employee = new Employee('Milana', position, department);
  
  console.log(employee.name);
  console.log(employee.position.name);
  console.log(employee.department.name);