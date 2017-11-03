
function Employee(first,last,ssn,eid,dept){
    this.firstName=first;
    this.lastName=last;
    this.ssn=ssn;
    this.eid=eid;
    this.dept=dept;
}
var eJohnDoe= new Employee("John","Doe","123-34-1234","001234","acct");
var eSallyRally = new Employee("Sally","Rally","123-34-1235","001235","h");
//document.getElementsByClassName("demo").innerHTML="Employee First Name:"+eJohnDoe.first;
console.log("Employee Specification:");
console.log("First Name: "+ eJohnDoe.firstName);
console.log("Last Name: " +eJohnDoe.lastName);
console.log("Social security Number: " + eJohnDoe.ssn);
console.log("Employee Id: " +eJohnDoe.eid);
console.log("Department: " + eJohnDoe.dept);


