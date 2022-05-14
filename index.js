const fs =require('fs')
const inquirer = require('inquirer');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');

//const Intern = require('./lib/Intern');
const Manager = require('./lib/Manager');
//const Engineer = require('./lib/Engineer');

const team =[];

function getManager(){
    console.log('good');
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
            team.push(manager)
            console.log(manager)
        })
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
            message: "What is the engineer's email address?"
          },
    
          {
            type: "input",
            name: "github",
            message: "What is the engineer's GitHub username?"
          }
   ]).then(ans =>{
        const engineer = new Engineer(ans.name, ans.id, ans.email, ans.github);
        team.push(engineer)
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
            message: "What is the intern's email address?"
          },
    
          {
            type: "input",
            name: "school",
            message: "What school does the intern attend?"
          }
         ]).then(ans =>{
        const intern = new Intern(ans.name, ans.id, ans.email, ans.school);
        team.push(intern)
        console.log(intern) 
          })
}

getIntern()