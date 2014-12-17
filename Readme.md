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
|   |____javascript
|__Gruntfile.js
|__package.json
|__bower.json
```

### Included libraries
- jQuery 2.1.1
- MaterializeCSS framework

### How to use

Prerequisites:
1. Grunt CLI
2. Node.js
3. Bower

Steps:
1. git clone this repo
2. Install required NodeJS packages
```npm install```
3. Install required bower packages
```bower install```
4. Watch for any changes in files
```grunt watch```
5. Happy editing!

`grunt watch` will automatically watch all files under `resources/scss` and `resources/js` for changes

### Compress CSS and JavaScript files

Run `grunt production`
