// TODO: Include packages needed for this application
const fs = require("fs");
const inquirer = require("inquirer");

const generateMarkdown = require("./utils/generateMarkdown.js");


// TODO: Create an array of questions for user input
const questions = [
  "what is the title of the project?",
  "what is the general description of the project?",
  "what are the installation instructions for the project?",
  "what are the steps required to install your project?",
  "how does one use the project?(provide instructions)",
  "which license are you using for this project?",
  "if there are any, who are the collaborators for the project?",
  "which third-party assets were utilized for the project?",
  "enter tests for the application and provide an example on how to run them",
  "how should someone contact you for questions about the application?(enter contact info)"

];

inquirer.prompt([
  {
    type: 'input',
    name: 'title',
    message: 'what is the title of the project?',
  },
  {
    type: 'input',
    name: 'description',
    message: 'what is the general description of the application?',
  },
  {
    type: 'input',
    name: 'installation',
    message: 'what does the installation process consist of?',
  },
  {
    type: 'input',
    name: 'usage',
    message: 'provide a description of how to use the application',
  },
  {
    type: 'input',
    name: 'contribution',
    message: 'who are the collaborators who worked on the project?',
  },
  {
    type: 'input',
    name: 'test',
    message: 'what are the steps to perform a test oh the application?',
  },
  {
    type: 'list',
    name: 'license',
    message: 'what license have you chosen for the project?',
    choices: ['GNU AGPLv3', 'MIT', 'Apache License 2.0', 'the unlicense'],
  },
  {
    type: 'input',
    name: 'username',
    message: 'what is your Github username?',
  },
  {
    type: 'input',
    name: 'email',
    message: 'what email can you be reached at?',
  },
])
  .then((data) => {
    fs.writeFile('README.md', generateMarkdown(data), (err) =>
      err ? console.log(err) : console.log('Success!'));
    console.log(data)
  })





















// TODO: Create a function to write README file
function writeToFile(fileName, data) { }

// TODO: Create a function to initialize app
function init() { }

// Function call to initialize app
init();
