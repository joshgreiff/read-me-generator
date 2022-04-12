// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
    if(license === 'MIT'){
        return '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)'
    }
    if(license === 'Mozilla' ){
        return '[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)'
    }
    if(license === 'Apache'){
        return '[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)'
    }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
    if(license === 'MIT'){
        return '[MIT](https://opensource.org/licenses/MIT)'
    }
    if(license === 'Mozilla' ){
        return '[Mozilla](https://opensource.org/licenses/MPL-2.0)'
    }
    if(license === 'Apache'){
        return '[Apache](https://opensource.org/licenses/Apache-2.0)'
    }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
    if(license === 'none'){
    return ``
    }
    else{
        return`
        ##${license} 
        ${renderLicenseBadge(license)}
        ${renderLicenseLink(license)}
        `
    }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  ${renderLicenseSection(data.license)}
  ##DESCRIPTION
  ${data.description}
  ##INSTALATION
  ${data.installation}
  ##USAGE INFO
  ${data.usage}
  ##CONTRIBUTION GUIDELINES
  ${data.contribution}
  ##TESTING
  ${data.test}

`;
}

module.exports = generateMarkdown;