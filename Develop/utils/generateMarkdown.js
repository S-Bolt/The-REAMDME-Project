// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  const licenseBadges = {
    'MIT': '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)',

    'Apache': '[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)',

    'GPL': '[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)'
  };
  return licenseBadges[license] || ''
};

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  const licenseLinks = {
  'MIT': 'https://opensource.org/licenses/MIT',
  'Apache':'https://opensource.org/licenses/Apache-2.0',
  'GPL': 'https://www.gnu.org/licenses/gpl-3.0',
  'None': ''
};
return licenseLinks[license] || '';
}
// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license === 'None'){
    return '';
  };
  return `## License 

  This project is licensed under the ${license} ${renderLicenseBadge(license)}license. Click [here](${renderLicenseLink(license)}) for more information.`;

}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `
  # ${data.title}

  ## Description 

  ${data.description}

  ## Table of Contents

  - [Installation](#installation)
  - [Usage](#usage)
  - [License](#license)

  ## Installation

   ${data.installation}

  ## Usage

   ${data.usage}

   ${renderLicenseSection(data.license)}

`;
}

module.exports = generateMarkdown;
