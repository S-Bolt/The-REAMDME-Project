// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown')
// TODO: Create an array of questions for user input
const questions = [
    {
    type: 'input',
    name: 'title',
    message: 'What is the tile of your project?',
},
{
    type: 'input',
    name: 'description',
    message: 'Please provide a description of your project.  What was your motivation, what problem does it solve, what did you learn? ',   
},
{
    type: 'input',
    message: 'What are the steps required to install your project?',
    name: 'installation',
},
{
    type: 'input',
    message: 'Provide instructions and examples for use:',
    name: 'usage',
}, 
{
    type: 'input',
    message: 'List your collaborators, if any, with links to thier Github profiles',
    name: 'credits',
},
{
    type: 'input',
    message: 'What is your github username?',
    name: 'githubUsername',
},
{
    type: 'input',
    message: 'What is your email?',
    name: 'email',
},
{
    type: 'list',
    message: 'Choose a licesne for your project',
    name: 'license',
    choices: ['MIT', 'Apache', 'GPL', 'None'],
},];



// TODO: Create a function to write README file
function writeToFile(fileName, readmeContent) {

    fs.writeFile(fileName, readmeContent, (err) => {
        if (err){
            console.error('Error writing REAME file', err);
        } else{
            console.log('README file written successfully!')
        }
    });
};

// TODO: Create a function to initialize app
function init() {
    console.log('Welcome to the README generator!');

    inquirer
    .prompt(questions)
    .then((data) => {
        console.log(data);
    //generate markdown content
    const readmeContent = generateMarkdown(data);
    console.log(readmeContent);
     //Naming file name
     const fileName = 'README.md';
        //calling writetoFile Function and passing filename/data
     writeToFile(fileName, readmeContent);
     });
}

// Function call to initialize app
init();
