# MongoDB Social Thoughts DB

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
  
## Description
A social network database that uses MongoDB and Mongoose to create a back-end for a social media network, supporting the creation, reading, updating, and deleting of users, their thoughts, their friends, and reactions to thoughts.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Screenshots](#screenshots)
- [License](#license)
- [Contributing](#contributing)
- [Questions](#questions)

  
## Installation
The site does not have a front-end, so it can only be accessed using Node and a terminal. The routes can be tested using POSTMAN or Insomnia.

## Usage
Enter the route, with the appropriate body to be sent if necessary, and watch the routes return 200 response of ok. The screenshot below shows the get all users functionality being tested in POSTMAN. Routes that can be testing are CREATE, READ, UPDATE, and DELETE for users and thoughts. There is also the ability to get by ID for users and thoughts. The user may also add friends and delete them via the user model friends parameter, which references back to the user model.

## Screenshots

![MongoDB-DB-Test](/assets/MongoSC.png)

## License

MIT
Copyright <2024> <PETER MARTINEZ>

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the “Software”), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED “AS IS”, WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

## Contributing
Please reach out to the developer at GitHub or email via the links below.

## Questions
For questions about this project, please reach out to me on GitHub, https://github/reasonablep or via e-mail at, pmrtnz@me.com. Thanks for reading. 
