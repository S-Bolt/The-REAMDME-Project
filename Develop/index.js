// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
// TODO: Create an array of questions for user input
const questions = [
    {
    type: 'input',
    name: 'Title',
    message: 'What is the tile of your project?',
},
{
    type: 'input',
    name: 'Description',
    message: 'Please provide a description of your project.  What was your motivation, what problem does it solve, what did you learn ',   
},
{
    type: 'input',
    message: 'What are the steps required to install your project?',
    name: 'Installation',
},
{
    type: 'input',
    message: 'Provide instructions and examples for use:',
    name: 'Usage',
}, 
{
    type: 'input',
    message: 'List your collaborators, if any, with links to thier Github profiles',
    name: 'Credits',
},
{
    type: 'list',
    message: 'Choose a licesne for your project',
    name: 'License',
    choices: ['MIT', 'Apache', 'GPL', 'None'],
},];

inquirer
    .prompt(questions)
    .then((data) => {
        console.log(data);

     //Naming file name
     const fileName = 'README.md';
        //calling writetoFile Function and passing filename/data
     writeToFile(fileName, data);
     });

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    const readmeContent =JSON.stringify(data, null, 2);

    fs.writeFile(fileName, readmeContent, (err) => {
        if (err){
            console.error('Error writing REAME file', err);
        } else{
            console.log('README file written successfully!')
        }
    });
};

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
