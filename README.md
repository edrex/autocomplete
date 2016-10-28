Demo at: https://edrex.github.io/autocomplete

## Dependencies

```
npm install
node_modules/.bin/jspm install
```

# Slipsum

Testing Gerrit integration.

Now that we know who you are, I know who I am. I'm not a mistake! It all makes sense! In a comic, you know how you can tell who the arch-villain's going to be? He's the exact opposite of the hero. And most times they're friends, like you and me! I should've known way back when... You know why, David? Because of the kids. They called me Mr Glass.

## Tests

```
node_modules/.bin/karma start
```

### Loose Mode

The `master` branch includes an `index.html` that loads code following the contents of `jspm.config.js`. This can either be "loose mode", where all files are loaded individually - this can be quite slow over HTTP/1.1 but doesn't require a build step - or "bundled mode" (the default). Serve the project directory using any static webserver. 

To watch source files and rebuild `bundle.js`:

```
node_modules/.bin/jspm bundle app/app.js -wid
```


### Bundled

The `gh-pages` branch contains an `index.html` which loads all code from a single `build.js`. This build differs from the above bundle in that it is self-contained and doesn't require `jspm.config.js` to be loaded first. The build is commited to the repository, which is convenient because the  deployment target is Github pages.

To rebuild, run 

```
jspm build app --minify
```

To update the branch, rebase master:

```
git checkout gh-pages
git rebase master
```

(hopefully no conflicts)


## Technologies used

This project uses (but does not necessarily endorse):

 - React 0.15
 - ES6 Modules, loaded using SystemJS
 - Babel
 - JSPM

Probably if this were a real project I'd move to Webpack or Browserify and NPM for client-side dependencies.

