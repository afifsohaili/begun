module.exports = function(grunt) {
  grunt.initConfig({
    copy: {
      materialize: {
        expand: true,
        cwd: "bower_components/materialize/dist",
        src: ["**"],
        dest: "./",
      }
    },
    concat: {
      options: {
        separator: ";\n"
      },
      scss: {
        cwd: "resources/scss/",
        src: ["*"],
        dest: "tmp/all.scss",
      },
      js: {
        cwd: "resources/javascript",
        src: ["**"],
        dest: "js/all.js"
      }
    },
    sass: {
      uncompressed: {
        options: {
          style: "nested",
          sourcemap: "none"
        },
        files: {
          "css/all.css": "tmp/all.scss",
        }
      },
    }

    // sass: {
    //   materializeCss: {
    //     options: {
    //       style: "nested",
    //       sourcemap: "none"
    //     },
    //     files: {
    //       "css/materialize.css": "resources/scss/materialize/materialize.scss",
    //     }
    //   },
    //   expanded: {
    //     options: {
    //       style: "expanded",
    //       sourcemap: "none"
    //     },
    //     files: {
    //       "css/all.min.css": "resources/scss/main.uncompiled.scss",
    //     }
    //   },
    //
    //   min: {
    //     options: {
    //       style: "compressed",
    //       sourcemap: "none"
    //     },
    //     files: {
    //       "css/all.min.css": "resources/scss/main.uncompiled.scss",
    //     }
    //   },
    // },
    //
    // //  Concat
    // concat: {
    //   options: {
    //     separator: ";\n"
    //   },
    //   mainCss: {
    //     src: [
    //       "css/materialize.css",
    //       "resources/scss/main.scss"
    //     ],
    //     dest: "resources/scss/main.uncompiled.scss"
    //   },
    //   materializeJs: {
    //     // the files to concatenate
    //     src: [
    //       "bower_components/jquery/dist/jquery.min.js",
    //       "resources/javascript/materialize/jquery.easing.1.3.js",
    //       "resources/javascript/materialize/velocity.min.js",
    //       "resources/javascript/materialize/hammer.min.js",
    //       "resources/javascript/materialize/jquery.hammer.js",
    //       "resources/javascript/materialize/collapsible.js",
    //       "resources/javascript/materialize/dropdown.js",
    //       "resources/javascript/materialize/leanModal.js",
    //       "resources/javascript/materialize/materialbox.js",
    //       "resources/javascript/materialize/parallax.js",
    //       "resources/javascript/materialize/tabs.js",
    //       "resources/javascript/materialize/tooltip.js",
    //       "resources/javascript/materialize/waves.js",
    //       "resources/javascript/materialize/toasts.js",
    //       "resources/javascript/materialize/sideNav.js",
    //       "resources/javascript/materialize/scrollspy.js",
    //       "resources/javascript/materialize/forms.js",
    //       "resources/javascript/materialize/date_picker/picker.js",
    //       "resources/javascript/materialize/date_picker/picker.date.js",
    //     ],
    //     // the location of the resulting JS file
    //     dest: "js/materialize.js"
    //   },
    //   mainJs: {
    //     src: ["resources/javascript/main.js"],
    //     dest: "js/main.js",
    //   },
    //   allJs: {
    //     src: [
    //       "js/materialize.js",
    //       "js/main.js"
    //     ],
    //     dest: "js/all.min.js"
    //   },
    //   allMinJs: {
    //     src: [
    //       "js/materialize.min.js",
    //       "js/main.min.js"
    //     ],
    //     dest: "js/all.min.js"
    //   }
    // },
    //
    // uglify: {
    //   options: {
    //
    //   },
    //   materializeJs: {
    //     files: {
    //       "js/materialize.min.js": ["js/materialize.js"]
    //     }
    //   },
    //   mainJs: {
    //     files: {
    //       "js/main.min.js": ["resources/javascript/main.js"]
    //     }
    //   }
    // },
    //
    // //  Watch Files
    // watch: {
    //   js: {
    //     files: [
    //       "resources/javascript/main.js",
    //     ],
    //     tasks: ["js_compile"],
    //     options: {
    //       interrupt: false,
    //       spawn: false,
    //     },
    //   },
    //
    //   sass: {
    //     files: ["resources/scss/**/*"],
    //     tasks: ["sass_compile"],
    //     options: {
    //       interrupt: false,
    //       spawn: false,
    //     },
    //   }
    // },
    //
    // //  Notifications
    // notify: {
    //   watching: {
    //     options: {
    //       enabled: true,
    //       message: "Watching Files!",
    //       title: "FashionVendr", // defaults to the name in package.json, or will use project directory"s name
    //       success: true, // whether successful grunt executions should be notified automatically
    //       duration: 1 // the duration of notification in seconds, for `notify-send only
    //     }
    //   },
    //
    //   sass_compile: {
    //     options: {
    //       enabled: true,
    //       message: "Sass Compiled!",
    //       title: "FashionVendr", // defaults to the name in package.json, or will use project directory"s name
    //       success: true, // whether successful grunt executions should be notified automatically
    //       duration: 2 // the duration of notification in seconds, for `notify-send only
    //     }
    //   },
    //
    //   js_compile: {
    //     options: {
    //       enabled: true,
    //       message: "JS Compiled!",
    //       title: "FashionVendr", // defaults to the name in package.json, or will use project directory"s name
    //       success: true, // whether successful grunt executions should be notified automatically
    //       duration: 2 // the duration of notification in seconds, for `notify-send only
    //     }
    //   },
    //
    //   server: {
    //     options: {
    //       enabled: true,
    //       message: "Server Running!",
    //       title: "FashionVendr", // defaults to the name in package.json, or will use project directory"s name
    //       success: true, // whether successful grunt executions should be notified automatically
    //       duration: 1 // the duration of notification in seconds, for `notify-send only
    //     }
    //   }
    // },
  });

  // load the tasks
  grunt.loadNpmTasks("grunt-sass");
  grunt.loadNpmTasks("grunt-contrib-watch");
  grunt.loadNpmTasks("grunt-contrib-copy");
  grunt.loadNpmTasks("grunt-contrib-concat");
  grunt.loadNpmTasks("grunt-contrib-uglify");
  grunt.loadNpmTasks("grunt-notify");

  // define the tasks
  grunt.registerTask("init", [
    "copy:materialize",
    "concat:scss",
    "concat:js",
    "sass:uncompressed",
  ]);
  grunt.registerTask("default", ["copy", "concat:materializeJs", "sass:materializeCss", "sass:expanded", "js_compile", "concat:allJs"]);
  grunt.registerTask("production", ["copy", "concat:mainCss", "sass", "concat:allJs", "uglify", "concat:allMinJs"]);

  grunt.registerTask("js_compile", ["concat:mainJs", "concat:allJs", "notify:js_compile"]);
  grunt.registerTask("sass_compile", ["concat:mainCss", "sass:expanded", "notify:sass_compile"]);
};
