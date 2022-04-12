const inquirer = require('inquirer');
const fs = require('fs')
const generateMarkdown = require('./generateMarkdown')

const promptUser = () => {
    return inquirer.prompt([
            // project title
            {
                name: 'title',
                type: 'input',
                message: 'Enter the title of your project'
            },
            // description 
            {
                name: 'description',
                type: 'input',
                message: 'Enter a description of your project, including: Your motivation for the project, what problem does it solve, etc.'
            },
            // installation instructions
            {
                name: 'installation',
                type: 'input',
                message: 'Enter instructions to intall and use your project, provide a step-by-step description of how to get the development enviornment ready.'
            },
            // usage information
            {
                name: 'usage',
                type: 'input',
                message: 'Enter any additional information about using your project'
            },
            // contribution guidelines
            {
                name: 'contribution',
                type: 'input',
                message: 'Enter contribution guidelines for your project, list collaborators or cite any outside sources you used.'
            },
            // test instructions
            {
                name: 'test',
                type: 'input',
                message: 'Enter test instructions for your project'
            },
            // which badge 
            {
                name: 'license',
                type: 'list',
                message: 'Which license would you like to attatch to your project?',
                choices: ['MIT', 'Mozilla', 'Apache', 'none']
            },
            // Enter your github username
            {
                name: 'ghuser',
                type: 'input',
                message: 'What is your GitHub username?',
            },
             // Enter your email
             {
                name: 'email',
                type: 'input',
                message: 'What is your email address?',
            },
            
        ]).then((answers) => {
            
            writeToFile('README.md', generateMarkdown(answers))

        })

    }  

    promptUser()

    function writeToFile(fileName, data) {

        return fs.writeFileSync(fileName, data)

    }


    
    // TODO: Include packages needed for this application

// // TODO: Create an array of questions for user input
// const questions = [];

// // TODO: Create a function to write README file
// function writeToFile(fileName, data) {}

// // TODO: Create a function to initialize app
// function init() {}

// Function call to initialize app
// init();