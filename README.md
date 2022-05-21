# Employee Management
<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="200" alt="Nest Logo" /></a>
</p>

[circleci-image]: https://img.shields.io/circleci/build/github/nestjs/nest/master?token=abc123def456
[circleci-url]: https://circleci.com/gh/nestjs/nest

  <p align="center">A progressive <a href="http://nodejs.org" target="_blank">Node.js</a> framework for building efficient and scalable server-side applications.</p>
    <p align="center">
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/v/@nestjs/core.svg" alt="NPM Version" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/l/@nestjs/core.svg" alt="Package License" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/dm/@nestjs/common.svg" alt="NPM Downloads" /></a>
<a href="https://circleci.com/gh/nestjs/nest" target="_blank"><img src="https://img.shields.io/circleci/build/github/nestjs/nest/master" alt="CircleCI" /></a>
<a href="https://coveralls.io/github/nestjs/nest?branch=master" target="_blank"><img src="https://coveralls.io/repos/github/nestjs/nest/badge.svg?branch=master#9" alt="Coverage" /></a>
<a href="https://discord.gg/G7Qnnhy" target="_blank"><img src="https://img.shields.io/badge/discord-online-brightgreen.svg" alt="Discord"/></a>
<a href="https://opencollective.com/nest#backer" target="_blank"><img src="https://opencollective.com/nest/backers/badge.svg" alt="Backers on Open Collective" /></a>
<a href="https://opencollective.com/nest#sponsor" target="_blank"><img src="https://opencollective.com/nest/sponsors/badge.svg" alt="Sponsors on Open Collective" /></a>
  <a href="https://paypal.me/kamilmysliwiec" target="_blank"><img src="https://img.shields.io/badge/Donate-PayPal-ff3f59.svg"/></a>
    <a href="https://opencollective.com/nest#sponsor"  target="_blank"><img src="https://img.shields.io/badge/Support%20us-Open%20Collective-41B883.svg" alt="Support us"></a>
  <a href="https://twitter.com/nestframework" target="_blank"><img src="https://img.shields.io/twitter/follow/nestframework.svg?style=social&label=Follow"></a>
</p>
  <!--[![Backers on Open Collective](https://opencollective.com/nest/backers/badge.svg)](https://opencollective.com/nest#backer)
  [![Sponsors on Open Collective](https://opencollective.com/nest/sponsors/badge.svg)](https://opencollective.com/nest#sponsor)-->
  
<p align="center">
    <br />
    <a href="https://github.com/nwokoyepraise/employee-mgmt"><strong>Explore the docs »</strong></a>
    <br />
    <br />
    <a href="https://employee-mgmt-32541.herokuapp.com/docs/#/">View Demo</a>
    ·
    <a href="https://github.com/nwokoyepraise/employee-mgmt/issues">Report Bug</a>
    ·
    <a href="https://github.com/nwokoyepraise/employee-mgmt/issues">Request Feature</a>
  </p>
</p>



<!-- TABLE OF CONTENTS -->
<details open="open">
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
    </li>
    <li><a href="#api-endpoints">API Endpoints</a></li>
     <li><a href="#test">Test</a></li>
    <li><a href="#roadmap">Roadmap</a></li>
    <li><a href="#contributing">Contributing</a></li>
    <li><a href="#license">License</a></li>
    <li><a href="#contact">Contact</a></li>
    <li><a href="#acknowledgements">Acknowledgements</a></li>
  </ol>
</details>

<!-- ABOUT THE PROJECT -->
## About The Project
This project is a demo backend for employee management built with NestJs framework

<!-- END POINTS -->
## Services Available on the Backend
- Add employee
- Retrieve all employees with optimized pagination
- Update employee using custom in-built plugin
- Soft-delete employee
- Retrieve all soft-deleted employees
- Restore soft-deleted employee

### Built With

The project was built natively with the following technologies
* [Node.js](https://nodejs.org)
* [NestJs](https://nestjs.com/)
* [Typescript](https://www.typescriptlang.org/)
* [MongoDB](https://mongoosejs.com/)
* [Swagger](https://swagger.io/)
* [Heroku](https://heroku.com)


<!-- GETTING STARTED -->
## Getting Started

To build the project locally, simply clone the github repository. Navigate to root project folder and run the following to install packages:

```bash
# Install packages
$ npm install
```

After packages have been installed. Proceed to run:

`npm start`

## API Endpoint

***Base API: http://localhost:3000/


## Installation

```bash
$ npm install
```

## API Endpoints
### Add Employee
This endpoint is used to add employee to the service

```http

POST /employee
Host: localhost:3000
Content-Type: application/json

{
    "name": "name",
    "email": "email@email.com",
    "phone": "+2344444444",
    "homeAddress": {
        "city": "city",
        "zipCode": 1234,
        "addressLine1": "addressLine1",
        "addressLine2": "addressLine2",
        "_id": "6288b32656d92169f3e32ed9"
    },
    "dob": "1950-01-01T00:00:00.000Z",
    "doe": "2002-12-09T00:00:00.000Z"
}


Response:
{
    "name": "name",
    "email": "email@email.com",
    "phone": "+2344444444",
    "homeAddress": {
        "city": "city",
        "zipCode": 1234,
        "addressLine1": "addressLine1",
        "addressLine2": "addressLine2",
        "_id": "6288b32656d92169f3e32ed9"
    },
    "dob": "1950-01-01T00:00:00.000Z",
    "doe": "2002-12-09T00:00:00.000Z",
    "_id": "6288b32656d92169f3e32ed8",
    "isDeleted": false,
    "deletedAt": null,
    "createdAt": "2022-05-21T09:38:46.721Z",
    "updatedAt": "2022-05-21T09:38:46.721Z",
    "__v": 0
}
```

### Update Employee
This endpoint is used to update employee using the ID in this case the Monoose Document ObjectId

```http

PATCH /employee/:id
Host: localhost:3000
Content-Type: application/json

{
    "name": "name",
    "email": "email@email.com",
    "phone": "+2344444444",
    "homeAddress": {
        "city": "city",
        "zipCode": 1234,
        "addressLine1": "addressLine1",
        "addressLine2": "addressLine2",
        "_id": "6288b32656d92169f3e32ed9"
    },
    "dob": "1950-01-01T00:00:00.000Z",
    "doe": "2002-12-09T00:00:00.000Z"
}


Response:
{
    "name": "name",
    "email": "email@email.com",
    "phone": "+2344444444",
    "homeAddress": {
        "city": "city",
        "zipCode": 1234,
        "addressLine1": "addressLine1",
        "addressLine2": "addressLine2",
        "_id": "6288b32656d92169f3e32ed9"
    },
    "dob": "1950-01-01T00:00:00.000Z",
    "doe": "2002-12-09T00:00:00.000Z",
    "_id": "6288b32656d92169f3e32ed8",
    "isDeleted": false,
    "deletedAt": null,
    "createdAt": "2022-05-21T09:38:46.721Z",
    "updatedAt": "2022-06-21T09:38:46.721Z",
    "__v": 0
}
```



### Soft-delete Employee
This endpoint is used to soft-delete employee using the ID in this case the Monoose Document ObjectId

```http

DELETE /employee/:id
Host: localhost:3000
Content-Type: application/json

Response:
{
    "name": "name",
    "email": "email@email.com",
    "phone": "+2344444444",
    "homeAddress": {
        "city": "city",
        "zipCode": 1234,
        "addressLine1": "addressLine1",
        "addressLine2": "addressLine2",
        "_id": "6288b32656d92169f3e32ed9"
    },
    "dob": "1950-01-01T00:00:00.000Z",
    "doe": "2002-12-09T00:00:00.000Z",
    "_id": "6288b32656d92169f3e32ed8",
    "isDeleted": true,
    "deletedAt": "2022-06-21T09:38:46.721Z",
    "createdAt": "2022-05-21T09:38:46.721Z",
    "updatedAt": "2022-06-21T09:38:46.721Z",
    "__v": 0
}
```



### Retrieve employees (Not soft-deleted)
This endpoint is used to retrieve employees who are not soft-deleted

```http

GET /employee?createdBefore=2022-05-20T21:51:21.010Z
Host: localhost:3000
Content-Type: application/json

Response:
[
   {
      "name": "name",
      "email": "email@email.com",
      "phone": "+2344444444",
      "homeAddress": {
          "city": "city",
          "zipCode": 1234,
          "addressLine1": "addressLine1",
          "addressLine2": "addressLine2",
          "_id": "6288b32656d92169f3e32ed9"
      },
      "dob": "1950-01-01T00:00:00.000Z",
      "doe": "2002-12-09T00:00:00.000Z",
      "_id": "6288b32656d92169f3e32ed8",
      "isDeleted": true,
      "deletedAt": "2022-06-21T09:38:46.721Z",
      "createdAt": "2022-05-21T09:38:46.721Z",
      "updatedAt": "2022-06-21T09:38:46.721Z",
      "__v": 0
  }, ...
]
```

### Restore soft-deleted Employee
This endpoint is used to restore soft-deleted employee using the ID in this case the Monoose Document ObjectId

```http

POST /employee/:id/restore
Host: localhost:3000
Content-Type: application/json

Response:
{
    "name": "name",
    "email": "email@email.com",
    "phone": "+2344444444",
    "homeAddress": {
        "city": "city",
        "zipCode": 1234,
        "addressLine1": "addressLine1",
        "addressLine2": "addressLine2",
        "_id": "6288b32656d92169f3e32ed9"
    },
    "dob": "1950-01-01T00:00:00.000Z",
    "doe": "2002-12-09T00:00:00.000Z",
    "_id": "6288b32656d92169f3e32ed8",
    "isDeleted": false,
    "deletedAt": null,
    "createdAt": "2022-05-21T09:38:46.721Z",
    "updatedAt": "2022-06-21T09:38:46.721Z",
    "__v": 0
}
```


### Retrieve soft-delete Employees
This endpoint is used to retrieve soft-deleted employee using the ID in this case the Monoose Document ObjectId

```http

GET /employee/deleted?createdBefore=2022-05-20T21:51:21.010Z
Host: localhost:3000
Content-Type: application/json

Response:
[
   {
      "name": "name",
      "email": "email@email.com",
      "phone": "+2344444444",
      "homeAddress": {
          "city": "city",
          "zipCode": 1234,
          "addressLine1": "addressLine1",
          "addressLine2": "addressLine2",
          "_id": "6288b32656d92169f3e32ed9"
      },
      "dob": "1950-01-01T00:00:00.000Z",
      "doe": "2002-12-09T00:00:00.000Z",
      "_id": "6288b32656d92169f3e32ed8",
      "isDeleted": true,
      "deletedAt": "2022-06-21T09:38:46.721Z",
      "createdAt": "2022-05-21T09:38:46.721Z",
      "updatedAt": "2022-06-21T09:38:46.721Z",
      "__v": 0
  }, ...
]
```


## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Test

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```
![Screenshot from 2022-05-21 09-21-12](https://user-images.githubusercontent.com/65955286/169649662-ce193ccc-cf19-48cb-a621-128443c528d8.png)



<!-- ROADMAP -->
## Roadmap

See the [open issues](https://github.com/nwokoyepraise/employee-mgmt/issues) for a list of proposed features (and known issues).



<!-- CONTRIBUTING -->
## Contributing

Contributions are what make the open source community such an amazing place to be learn, inspire, and create. Any contributions you make are **greatly appreciated**.

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## Support

Nest is an MIT-licensed open source project. It can grow thanks to the sponsors and support by the amazing backers. If you'd like to join them, please [read more here](https://docs.nestjs.com/support).

## Stay in touch

- Author - [Kamil Myśliwiec](https://kamilmysliwiec.com)
- Website - [https://nestjs.com](https://nestjs.com/)
- Twitter - [@nestframework](https://twitter.com/nestframework)

## License

This project is [GNU-V3](LICENSE).

Nest is [MIT licensed](LICENSE).
