// function to generate markdown for README
function generateMarkdown(data) {
  const installationSteps = data.installation
  .split('\n')
  .filter((line) => line.trim() !== '')
  .map((line, index) => {
    return `${index + 1}. ${line}`;
  }).join('\n');

  const contributingSteps = data.contributing
  .split('\n')
  .filter((line) => line.trim() !== '')
  .map((line, index) => {
    return `${index + 1}. ${line}`;
  }).join('\n');

  // generate badge URL based on the selected license
  let licenseBadge = '';
  switch (data.license) {
    case 'MIT':
      licenseBadge = '![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)';
      break;
    case 'Apache 2.0':
      licenseBadge = '![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)';
      break;
    case 'GPL 3.0':
      licenseBadge = '![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)';
      break;
    case 'BSD 3':
      licenseBadge = '![License](https://img.shields.io/badge/License-BSD%203--Clause-blue.svg)';
      break;
    default:
      licenseBadge = '';
      break;
  }

  return `# ${data.title}
  ${licenseBadge}

## Description

${data.description}

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Contributing](#contributing)
- [Tests](#tests)
- [Questions](#questions)

## Installation

To install this project, follow these steps:

${installationSteps}

## Usage

${data.usage}

## License

This project is licensed under the ${data.license} license.

## Contributing

${contributingSteps}

## Tests

${data.tests}

## Questions

If you have any questions, please contact me at ${data.email}. You can find more of my work at https://github.com/${data.github}.
`;
}

module.exports = generateMarkdown;
