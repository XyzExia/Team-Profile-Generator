const inquirer = require('inquirer');
const fs = require('fs');

const Employee = require('./lib/Employee');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');

const employees = [];



function getmanager() {
	inquirer
		.prompt([
			{
				name: 'name',
				type: 'input',
				message: "Please enter Manager's name:",
				
			},
			{
				name: 'id',
				type: 'input',
				message: "Enter Manager's ID number:",
			},
			{
				name: 'email',
				type: 'input',
				message: "Enter Manager's email addanss:",
			},
			{
				name: 'officeNumber',
				type: 'input',
				message: "Enter Manager's office number:",

			},
			{
				name: 'newemployee',
				type: 'confirm',
				message: 'Would you like to add another employee?',
			},
		])
		.then((ans, err) => {
			if (err) console.error(err);
			const newManager = new Manager(ans.name,ans.id,ans.email,ans.officeNumber);
			employees.push(newManager);
			console.log(Manager)
			if (ans.newemployee) {
				newperson();
			} else {
				console.log(employees);
				renderTeam();
			}
		});
}

// if user chooses to add new member, prompt will provide choices for Engineer, Intern or "finish"
// If user opts to finish -> render existing team
function newperson() {
	inquirer
		.prompt([
			{
				name: 'empType',
				type: 'list',
				message: 'Please select member role:',
				choices: ['Engineer', 'Intern', '-- Finish Team --'],
			},
		])
		.then((ans, err) => {
			if (err) console.error(err);
			switch (ans.empType) {
				case 'Engineer':
					getengineer();
					break;
				case 'Intern':
					getintern();
					break;
				case '-- Finish Team --':
					renderTeam();
			}
		});
}

function getengineer() {
	inquirer
		.prompt([
			{
				name: 'name',
				type: 'input',
				message: "What is your Engineer's name?",
			},
			{
				name: 'id',
				type: 'input',
				message: "Enter Engineer's Employee ID number:",
			},
			{
				name: 'email',
				type: 'input',
				message: "Enter Engineer's email addanss:",
			},
			{
				name: 'gitHub',
				type: 'input',
				message: "Enter Engineer's GitHub username:",
			},
			{
				name: 'newemployee',
				type: 'confirm',
				message: 'Would you like to add another employee?',
			},
		])
		.then((ans, err) => {
			if (err) console.error(err);
			const newEngineer = new Engineer(ans.name,ans.id,ans.email,ans.gitHub);
			employees.push(newEngineer);
			console.log(Engineer)
			if (ans.newemployee) {
				newperson();
			} else {
				renderTeam();
			}
		});
}

function getintern() {
	inquirer
		.prompt([
			{
				name: 'name',
				type: 'input',
				message: "What is your Intern's name?",
			},
			{
				name: 'id',
				type: 'input',
				message: "Enter Intern's Employee ID number:",
			},
			{
				name: 'email',
				type: 'input',
				message: "Enter Intern's email addanss:",
			},
			{
				name: 'school',
				type: 'input',
				message: "Enter Intern's School:",
			},
			{
				name: 'newemployee',
				type: 'confirm',
				message: 'Would you like to add another employee?',
			},
		])
		.then((ans, err) => {
			if (err) console.error(err);
			const newIntern = new Intern(ans.name,ans.id,ans.email,ans.school);
			employees.push(newIntern);
			console.log(employees);
			if (ans.newemployee) {
				newperson();
			} else {
				renderTeam();
			}
		});
}


function renderTeam() {
	const htmlPageContent = [];
	const htmlPageHead = `
	<!DOCTYPE html>
	<head>
		<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0-beta1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-0evHe/X+R7YkIZDRvuzKMRqM+OrBnVFBL6DOitfPri4tjfHxaWutUpFmBp4vmVor" crossorigin="anonymous">
		<link rel="stylesheet" href="./style.css" />
		<title>Team profiles</title>
	</head>
	<body>
		<div class="container">
			<div class="jumbotron text-center">
				<div class="container">
					<h1 class="display-2">Team profiles</h1>
				</div>
			</div>
		</div>
    
		<div class="container">
			<div class="row p-4 justify-content-center">
				<div class="row p-3 d-flex justify-content-between">`

	htmlPageContent.push(htmlPageHead);

	for (let i = 0; i < employees.length; i++) {
		let card = `
					<div class="card" style="width: 19rem">
						<div class="card-body">
							<h3 class="card-title">${employees[i].name}</h3>
							<h5 class="card-subtitle">${employees[i].getRole}</h5>
							<ul class="list-group list-group-flush">
								<li class="list-group-item">
									<strong>ID:</strong> ${employees[i].id}
								</li>
								<li class="list-group-item">
									<strong>Email:</strong>
								<a href="mailto:${employees[i].email}"
									>${employees[i].email}</a
									>
								</li>`;
			if (employees[i].officeNumber) {
				card += `
								<li class="list-group-item">
									<strong>Office Number: </strong>${employees[i].officeNumber}
								</li>`;
			}if (employees[i].gitHub) {
				card += `
								<li class="list-group-item">
									<strong>GitHub:</strong> <a href="https://github.com/${employees[i].gitHub}">${employees[i].gitHub}</a>
								</li>`;
			}if (employees[i].school) {
			card += `
								<li class="list-group-item">
									<strong>School:</strong> ${employees[i].school}
								</li>`;
			}
			card += `
							</ul>			
						</div>
					</div>`;

		htmlPageContent.push(card);
	}

	
	const htmlFoot = `
				</div >
			</div >
  		</div >
	  
		<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta2/dist/js/	bootstrap.bundle.min.js"
        integrity="sha384-b5kHyXgcpbZJO/tY9Ul7kGkf1S0CWuKcCD38l8YkeH8z8QjE0GmW1gYU5S9FOnJ0"
        crossorigin="anonymous"></script>
    </body>
    
</html>`;
	htmlPageContent.push(htmlFoot);

	fs.writeFile('dist/index.html', htmlPageContent.join(''), (err) =>
		err ? console.log(err) : console.log('created')
	);
}

getmanager();