### React project template utilizing ES2015 (ES6) and CommonJS

## Features

1. Use ES2015 and JSX syntax in all JavaScript files
1. Compile and bundle code automatically in development
1. Easily unit test your code with one command
1. Automatically verify correct syntax and style (if you install `eslint` and the relevant integration for your editor/IDE)
1. Hopefully helpful and not excessive code comments


## Opinions

I created this in hopes that someone else out there might find it useful and/or informative and also to give myself a good starting point for future projects. Since ES6 and CommonJS are just standards and not technologies, I've picked corresponding technologies that I think are a solid choice while trying to not make this template too tightly coupled to those choices. The technologies I've chosen are:

#### TECHNOLOGIES

- [Babel](https://babeljs.io/) for ES6
- [Browserify](http://browserify.org/) for CommonJS
- [Gulp](http://gulpjs.com/) for running tasks
- [Jest](https://facebook.github.io/jest/) for unit testing

#### STRUCTURE

This currently assumes and encourages using the LIFT project structure. See http://bguiz.github.io/js-standards/angularjs/application-structure-lift-principle/, which applies equally well to React projects.

## Starting Development

1. Clone the project and install dependencies

```bash 
git clone https://github.com/pzatrick/react-es2015-commonjs-template.git my-project
cd my-project
npm install
npm install -g eslint # If you want to use eslint 
```

1. You should find and replace a few placeholders. Those are:

- PROJECT_NAME
- PROJECT_DESCRIPTION
- PROJECT_AUTHOR

1. Compile and bundle the source

```bash
gulp watch
```

1. Start a simple HTTP server from the project root

```bash
python -m SimpleHTTPServer
```

1. And open index.html in your browser

```bash
open index.html
```

### TESTING

To run the unit tests, do

```bash
npm test
```
