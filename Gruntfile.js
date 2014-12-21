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
        src: ["css/materialize.css", "resources/scss/imports/*", "resources/scss/*"],
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
          outputStyle: "nested",
          sourcemap: "none"
        },
        files: {
          "css/all.css": "tmp/all.scss",
        }
      },
      compressed: {
        options: {
          outputStyle: "compressed",
          sourcemap: "none"
        },
        files: {
          "css/all.min.css": "css/all.css",
        }
      },
    },

    uglify: {
      materializeJs: {
        options: {

        },
        files: {
          "js/all.min.js": ["js/all.js"]
        }
      },
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
    watch: {
      js: {
        files: [
        "resources/javascript/**",
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
          "notify:css",
        ],
        options: {
          interrupt: false,
          spawn: false,
        },
      }
    }
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
    "sass:uncompressed"
  ]);
  grunt.registerTask("production", [
    "copy:materialize",
    "concat:scss",
    "concat:js",
    "sass:compressed",
    "uglify"
  ]);
};
