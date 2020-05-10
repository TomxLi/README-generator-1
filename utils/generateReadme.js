// Generate the Readme function
function generateReadme(answers) {
    return `
# README.md_Generator
Using Node.js, generate a template README.md file with users input to generate the README.
${answers.projectTitle}

        
## Table of Contents
- [Description](#description)
- [Installation](#installation)
- [Dependencies](#dependencies)
- [Usage](#usage)
- [Built With](#built-with)
- [Questions](#questions)
- [License](#license)
- [Contributors](#contributors)
- [Acknowledgments](#acknowledgments)
- [Images](#images)
- [Copyright](#copyright)
        
## Description    
${answers.description}

### Installation
${answers.installation}

### Usage
${answers.usage}

### Built With
* [VScode](https://code.visualstudio.com/)
* [Gitbash](https://gitforwindows.org/)

### Questions
${answers.questions}
        
### License${answers.license}
[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)

### Contributors
${answers.contributing}

### Acknowledgments
${answers.acknowledgements}

### GitHub Username
${answers.username}
${answers.email}

### Avatar Image
<img src="${answers.avatar_url}"/>
/n* Copyright 2020 &copy;
    `;
  }
  
  module.exports = generateReadme;