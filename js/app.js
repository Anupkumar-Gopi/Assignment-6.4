// employee objects array
var emp = [
	{
		"name":"employee1",
		"age":25,
		"salary":10000,
		"city":"Mumbai",
		"state":"Maharashtra",
		"pincode":400018
	},
	{
		"name":"employee2",
		"age":25,
		"salary":15000,
		"city":"Mumbai",
		"state":"Maharashtra",
		"pincode":400018
	},
	{
		"name":"employee3",
		"age":31,
		"salary":6000,
		"city":"Delhi",
		"state":"Delhi",
		"pincode":110001
	},
	{
		"name":"employee4",
		"age":45,
		"salary":35000,
		"city":"Delhi",
		"state":"Delhi",
		"pincode":110001
	},
	{
		"name":"employee5",
		"age":55,
		"salary":12000,
		"city":"Bangalore",
		"state":"Karnataka",
		"pincode":560001
	},
	{
		"name":"employee6",
		"age":35,
		"salary":100000,
		"city":"Bangalore",
		"state":"Karnataka",
		"pincode":560001
	}
];
// for loop to display employee object in console
for(i in emp){	
	console.info("Details","Employee -",parseInt(i)+1);
	console.log("Employee Name:",emp[i].name);
	console.log("Employee Age:",emp[i].age);
	console.log("Employee Salary:",emp[i].salary);
	console.log("Employee City:",emp[i].city);
	console.log("Employee State:",emp[i].state);
	console.log("Employee Pincode:",emp[i].pincode);
	console.log("\n");
}