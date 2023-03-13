// function to generate markdown for README
function generateMarkdown(data) {
  const installationSteps = data.installation.split('\n').map((line, index) => {
    return `${index + 1}. ${line}`;
  }).join('\n');

  const contributingSteps = data.contributing.split('\n').map((line, index) => {
    return `${index + 1}. ${line}`;
  }).join('\n');

  return `# ${data.title}
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
