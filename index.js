const fs = require('fs');
const inquirer = require('inquirer');

// GIVEN a command-line application that accepts user input
// WHEN I am prompted for information about my application repository
// THEN a high-quality, professional README.md is generated with the title of my project and sections entitled Description, Table of Contents, Installation, Usage, License, Contributing, Tests, and Questions

inquirer
    .prompt([

// WHEN I enter my project title
// THEN this is displayed as the title of the README
        {
            type: 'input',
            message: 'What is the title of your project?',
            name: 'proTitle',
        },

// WHEN I enter a description, installation instructions, usage information, contribution guidelines, and test instructions
// THEN this information is added to the sections of the README entitled Description, Installation, Usage, Contributing, and Tests
        {
            type: 'input',
            message: 'Enter a description for your project:',
            name: 'description',
        },
        {
            type: 'input',
            message: 'Enter any installation instructions for your project:',
            name: 'installation',
        },
        {
            type: 'input',
            message: 'Enter the usage of your project:',
            name: 'usage',
        },
        {
            type: 'input',
            message: 'Enter the names of any contributors:',
            name: 'contributing',
        },
        {
            type: 'input',
            message: 'Enter any tests for your project:',
            name: 'tests',
        },

// WHEN I choose a license for my application from a list of options
// THEN a badge for that license is added near the top of the README and a notice is added to the section of the README entitled License that explains which license the application is covered under
        {
            type: 'list',
            message: 'Choose a license for your project:',
            name: 'license',
            choices: ['Apache 2.0', 'MIT', 'Eclipse 2.0', 'The Unlicense']
        },

// WHEN I enter my GitHub username
// THEN this is added to the section of the README entitled Questions, with a link to my GitHub profile
        {
            type: 'input',
            message: 'What is your GitHub username?',
            name: 'githubUsername',
        },

// WHEN I enter my email address
// THEN this is added to the section of the README entitled Questions, with instructions on how to reach me with additional questions
        {
            type: 'input',
            message: 'What is your email?',
            name: 'email',
        }
        

    ])

.then((data) => {

    JSON.stringify(data, null, '\t');

    const filename = `${data.proTitle}_README.md`;


// WHEN I click on the links in the Table of Contents
// THEN I am taken to the corresponding section of the README

    const content = `# ${data.proTitle}
    \n## Table of Contents
    \n[1. Description](#desc)
    \n[2. Installation](#inst)
    \n[3. Usage](#use)
    \n[4. Contributing](#cont)
    \n[5. Tests](#test)
    \n[6. License](#lic)
    \n[7. Questions?](#ques)
    \n<br>
    \n<a name="desc"></a>
    \n## 1. Description
    \n${data.description}
    \n<a name="inst"></a>
    \n## 2. Installation
    \n${data.installation}
    \n<a name="use"></a>
    \n## 3. Usage
    \n${data.usage}
    \n<a name="cont"></a>
    \n## 4. Contributing
    \n${data.contributing}
    \n<a name="test"></a>
    \n## 5. Tests
    \n${data.tests}
    \n<a name="lic"></a>
    \n## 6. License
    \n${data.license}
    \n<a name="ques"></a>
    \n## 7. Questions
    \nGitHub Username: ${data.githubUsername}
    \nEmail: ${data.email}`;


    fs.writeFile(filename, content, (err) =>
      err ? console.log(err) : console.log('Success!')
    );
});