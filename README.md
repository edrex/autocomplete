Demo at: https://edrex.github.io/autocomplete

## Run

### Install dependencies

```
npm install
node_modules/.bin/jspm install
```

### Run tests

```
node_modules/.bin/karma start
```

### Build

Watch source files and rebuild bundle.js:

```
node_modules/.bin/jspm bundle app/app.js -wid
```

This output is development mode. There are flags to minify etc.

## Technologies used

This project uses (but does not necessarily endorse):

 - React 0.15
 - ES6 Modules, loaded using SystemJS
 - Babel
 - JSPM

Probably if this were a real project I'd move to Webpack or Browserify and NPM for client-side dependencies.

