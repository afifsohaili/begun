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
      scss: {
        options: {
          separator: "\n"
        },
        src: ["resources/scss/imports/*", "resources/scss/*"],
        dest: "tmp/all.scss",
      },
      js: {
        options: {
          separator: ";\n"
        },
        src: [
          "js/materialize.js",
          "resources/javascript/**"
        ],
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
    },

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

    watch: {
      js: {
        files: [
          "resources/javascript/*.js",
        ],
        tasks: [
          "concat:js",
          "notify:js"
        ],
        options: {
          interrupt: false,
          spawn: false,
        },
      },

      css: {
        files: ["resources/scss/**"],
        tasks: [
          "concat:scss",
          "sass:uncompressed",
          "notify:css"
        ],
        options: {
          interrupt: false,
          spawn: false,
        },
      }
    },

    //  Notifications
    notify: {
      watching: {
        options: {
          enabled: true,
          message: "Watching Files!",
          title: "FashionVendr",
          success: true,
          duration: 1
        }
      },

      js: {
        options: {
          enabled: true,
          message: "Javascript Compiled!",
          title: "FashionVendr",
          success: true,
          duration: 2
        }
      },

      css: {
        options: {
          enabled: true,
          message: "CSS Compiled!",
          title: "FashionVendr",
          success: true,
          duration: 2
        }
      },
    },
  });

  // load the tasks
  grunt.loadNpmTasks("grunt-sass");
  grunt.loadNpmTasks("grunt-contrib-watch");
  grunt.loadNpmTasks("grunt-contrib-copy");
  grunt.loadNpmTasks("grunt-contrib-concat");
  grunt.loadNpmTasks("grunt-contrib-uglify");
  grunt.loadNpmTasks("grunt-notify");

  // define the tasks
  grunt.registerTask("default", [
    "copy:materialize",
    "concat:scss",
    "concat:js",
    "sass:uncompressed",
  ]);
  // grunt.registerTask("production", ["copy", "concat:mainCss", "sass", "concat:allJs", "uglify", "concat:allMinJs"]);
};
