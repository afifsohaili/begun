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

1. Node Package Manager (http://nodejs.org/)
2. Bower (http://bower.io) `npm install -g bower`
3. Grunt CLI (http://gruntjs.com/getting-started) `npm install -g grunt-cli`

Steps:

1. Git clone this repo
2. `npm install` to install Node packages required by the project
3. `bower install` to install Bower components required by the project
4. Initialize with `grunt init`
5. Watch for any changes in files using `grunt watch`
6. Happy editing!

`grunt watch` will automatically watch all files under `resources/scss` and `resources/js` for changes, and compile them to CSS and concatenate everything to just one single file (`all.css` and `all.js` respectively).

### Compress CSS and JavaScript files

Run `grunt production`
