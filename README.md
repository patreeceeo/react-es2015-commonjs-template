### React project template utilizing ES2015 (ES6) and CommonJS

## Features

1. Use ES2015 and JSX syntax in all JavaScript files
1. Compile and bundle code automatically in development
1. Easily unit test your code with one command
1. Automatically verify correct syntax and style (if you install `eslint` and the relevant integration for your editor/IDE)
1. Hopefully helpful and not excessive code comments


## Opinions

...everyone's got 'em. I created this in hopes that someone else out there might find it useful and/or informative but also to give myself a good starting point for future projects. In the interest of helping you decide if this template could help you, I've tried to enumerate the opinion-based choices I've made in putting together this template. They can be broken down into two categories:

__TECHNOLOGIES__

Since ES6 and CommonJS are just standards and not technologies, I've picked corresponding technologies that I think are a solid choice while trying to not make this template too tightly coupled to those choices. The technologies I've chosen are:

- [Babel](https://babeljs.io/) for ES6
- [Browserify](http://browserify.org/) for CommonJS
- [Gulp](http://gulpjs.com/) for running tasks
- [Jest](https://facebook.github.io/jest/) for unit testing

__STRUCTURE__

This currently assumes and encourages using the LIFT project structure. See http://bguiz.github.io/js-standards/angularjs/application-structure-lift-principle/, which applies equally well to React projects. At a glance, here's my vision for LIFT with this type of project:

```
my-project/
  - README.md
  - gulpfile.js
  - index.html
  - package.json
  - build/
    - my-project.js
    - my-project.css *
      * this template doesn't build CSS, yet
  - node_modules/
  - src/
    - index.js
      index.js is the execution entry point and where all the dependencies are brought together
    - component-1/
      - component-1.js
      - component-1.css
      - component-1-data.json
      - a-private-dependency.js
      - __tests__/
        - component-1_tests.js
        - a-private-dependency_tests.js
    - component-2/
      Analogous to the structure for component-1
    - shared/
      - shared-component-1/
        - index.js
        - a-private-dependency.js
        __tests__
          - a-private-dependency_tests.js
      - shared-component-2/
        Analogous to the structure for shared-component-1

```


## Starting Development

1. Clone the project and install dependencies

```bash 
git clone https://github.com/pzatrick/react-es2015-commonjs-template.git my-project
cd my-project

# The next two lines sqaush all of my commits into one commit by you (optional)
git update-ref -d refs/heads/master
git commit -s -m "Initial commit based on https://github.com/pzatrick/react-es2015-commonjs-template"

# Don't forget to set up a git remote
git remote set-url origin https://github.com/me/my-project.git
git push -u origin master

npm install
npm install -g eslint # If you want to use eslint 
```

2. You should find and replace a few placeholders. Those are:


* PROJECT_NAME
* PROJECT_DESCRIPTION
* PROJECT_AUTHOR


3. Compile and bundle the source

```bash
gulp watch
```

4. Start a simple HTTP server from the project root

```bash
python -m SimpleHTTPServer
```

5. And open index.html in your browser

```bash
open index.html
```

__TESTING__

To run the unit tests, do

```bash
npm test
```
