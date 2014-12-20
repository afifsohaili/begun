# Begun

This is a boilerplate for starting a new HTML, CSS and JavaScript project.

### Folder structure
```
project
|__index.html
|__css
|__js
|__img
|__resources
|   |__scss
|   |__javascript
|__Gruntfile.js
|__package.json
|__bower.json
```

### Included libraries
- jQuery 2.1.1
- MaterializeCSS framework

### How to use

Prerequisites:

1. Bower
2. NodeJS
3. Grunt CLI

Steps:

1. Git clone this repo
2. `npm install` to install required NodeJS packages
3. `bower install` to install required Bower packages
4. Initialize with `grunt init`
5. Watch for any changes in files using `grunt watch`
6. Happy editing!

`grunt watch` will automatically watch all files under `resources/scss` and `resources/js` for changes

### Compress CSS and JavaScript files

Run `grunt production`
