const fs =require('fs')
const inquirer = require('inquirer');

const Intern = require('./lib/Intern');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const generateHTML = require('./src/generateHTML');





const teamMembers = [];

function getManager(){
    inquirer
        .prompt([
            {
                type: 'input',
                name: 'name',
                message: 'Name of the manager of this team?', 
            },
            {
                type: 'input',
                name: 'id',
                message: "Please enter the manager's ID.",
            },
            {
                type: 'input',
                name: 'email',
                message: "Please enter the manager's email.",
            },
            {
                type: 'input',
                name: 'officeNumber',
                message: "Please enter the manager's office number",
            }
        ]).then(ans =>{
            const manager = new Manager(ans.name, ans.id, ans.email, ans.officeNumber);
            teamMembers.push(manager)
            console.log(manager)
            addTeamMember()
        })
}

function addTeamMember() {
  inquirer
    .prompt([
      {
        type: "list",
        name: "type",
        message: "Add an engineer or intern to the team?",
        choices: ["Engineer", "Intern", "Not at this time"],
      },
    ])
    .then((ans) => {
      if (ans.type === "Engineer") {
        getEngineer();
      } else if (ans.type === "Intern") {
        getIntern();
      } else {
        writeFile();
      }
    });
}

function getEngineer(){
    inquirer
    .prompt([
        {
            type: "input",
            name: "name",
            message: "What is the engineer's name?"
          },
    
          {
            type: "input",
            name: "id",
            message: "What is the engineer's employee ID number?" 
          },
    
          {
            type: "input",
            name: "email",
            message: "What is the engineer's email addanss?"
          },
    
          {
            type: "input",
            name: "github",
            message: "What is the engineer's GitHub username?"
          }
   ]).then(ans =>{
        const engineer = new Engineer(ans.name, ans.id, ans.email, ans.github);
        teamMembers.push(engineer)
        addTeamMember();
        console.log(engineer) 
    })
}

function getIntern(){
    inquirer
    .prompt([
        {
            type: "input",
            name: "name",
            message: "What is the intern's name?"
          },
    
          {
            type: "input",
            name: "id",
            message: "What is the intern's employee ID number?" 
          },
    
          {
            type: "input",
            name: "email",
            message: "What is the intern's email addanss?"
          },
    
          {
            type: "input",
            name: "school",
            message: "What school does the intern attend?"
          }
         ]).then(ans =>{
        const intern = new Intern(ans.name, ans.id, ans.email, ans.school);
        teamMembers.push(intern)
        console.log(intern) 
        addTeamMember();
          })
}

