const fs = require('fs');
const inquirer = require('inquirer');


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
            choices: ['Apache 2.0', 'MIT', 'Eclipse Public 1.0', 'Mozilla Public 2.0', 'The Unlicense']
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

.then((input) => {

    JSON.stringify(input, null, '\t');

    const filename = `${input.proTitle}_README.md`;

// WHEN I click on the links in the Table of Contents
// THEN I am taken to the corresponding section of the README

    var badgeIcon;
    if (input.license === "Apache 2.0") {
        badgeIcon = `[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)`
    } else if (input.license === "MIT") {
        badgeIcon = `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`
    } else if (input.license === "Eclipse Public 1.0") {
        badgeIcon = `[![License](https://img.shields.io/badge/License-EPL_1.0-red.svg)](https://opensource.org/licenses/EPL-1.0)`
    } else if (input.license === "Mozilla Public 2.0") {
        badgeIcon = `[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)`
    } else if (input.license === "The Unlicense") {
        badgeIcon = `[![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)](http://unlicense.org/)`
    };

    const content = `# ${input.proTitle}
    \n${badgeIcon}
    \n### Table of Contents
    \n- [Description](#description)
    \n- [Installation](#installation)
    \n- [Usage](#usage)
    \n- [Contributing](#contributing)
    \n- [Tests](#tests)
    \n- [License](#license)
    \n- [Questions](#questions)
    \n<br>
    \n## Description
    \n${input.description}
    \n<br>
    \n## Installation
    \n${input.installation}
    \n<br>
    \n## Usage
    \n${input.usage}
    \n<br>
    \n## Contributing
    \n${input.contributing}
    \n<br>
    \n## Tests
    \n${input.tests}
    \n<br>
    \n## License
    \nThis application is covered by the ${input.license} license.
    \n<br>
    \n## Questions
    \nFind me on GitHub by searching for ${input.githubUsername},
    \nOr send me an email at ${input.email}`;


    fs.writeFile(filename, content, (err) =>
      err ? console.log(err) : console.log('Success!')
    );
});