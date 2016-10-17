# ANG2-wp-startup
Angular2 Webpack startup

Startup Application of WebPack and Angular created by following the Angular.io documentation

## Table of Content

- [Prerequisites](#prerequisites)
- [Run application](#run-the-application)
    - [Install package](#install-packages)
    - [Npm scripts](#npm-scripts)
        - [Develop](#develop)
        - [Testing](#testing)
        - [Coverage](#coverage)
        - [Build](#build)
        - [Warnings and Errors](#warning-and-errors)

## Prerequisites

To be able to contribute to this repository the following tools should be installed:

1. NodeJs 6.x.x (see: [Download NodeJs](NodeJs: https://nodejs.org/en/download/current/))
    *this includes node package manager (npm)*
2. Git (see [Download Git](https://git-scm.com/))

## Run the application

### Install packages

Before running the application NPM packages should be installed. The NPM
packages that are needed are defined in the *package.json* file.
Run the following command for installing packages:
```
$ npm i
# short for 'npm install'
```

### Npm scripts

#### Develop

Several scripts are defined in the *package.json* file. These scripts are tasks
that can be started using NPM.  
*It is possible to open multiple command prompts and execute scripts side-by-side*

Start development server, which continiously builds the application and refreshes the server
Open a browser on http://localhost:8080 to see the website.
```
$ npm start
# Stop console using CTRL+C
```

If you want to make the webpack developement server to expose the website for external access
```
$ npm run start:host
# Stop console using CTRL+C
```

#### Testing

Run unit tests of the application, this will keep watching for changes and
runs the unit tests on the fly.
```
$ npm test
# Stop console using CTRL+C
```

Run unit tests of the application (single run), this will *NOT* keep watching for changes
```
$ npm run test:single
```

##### Debug Unit Tests

For testing the application the headless browser **PhantomJS** is used.
When you want to debug a unit test the headless browser cannot be used and
Chrome should be used. Follow the steps below to debug a unit test:

1. Define which test you want to debug, by using 'fit' or 'fdescribe' in the 'spec.ts' files
    ```javascript
    # If you want to test the whole describe
    fdescribe('...', () => {})

    # If you want to test one or multiple tests
    fit('...' => {})
    ```
2. Run the test scripts
    ```
    $ npm run debug:test
    ```
    *A browser will be started with a 'Debug' button*
4. Press the 'Debug' button, which start the test
5. Open the Developer Tools of the browser (F12 for Chrome)
6. Navigate to the 'spec.ts' file in the Sources
7. Set the breakpoint in the method you want to debug
8. Refresh the browser

**Note:** To stop the unit tests, use *CTRL+C* in the command window

#### Coverage

During unit tests the coverage is determined for the application. Coverage can be found
at the '/coverage/' directory. In the 'coverage/html' directory open the *index.html* file
to see the coverage. If you like to see the coverage updated live during development you can
use the following command:
```
$ npm run showcoverage
# Stop console using CTRL+C
```

#### Build

Build distribution output for production, this will create the files that can be
deployed to production in the /dist folder
```
$ npm run build
```

#### Warnings and Errors

Run the TSLint (check warnings and errors) seperately use the following command
```
$ npm run lint
```