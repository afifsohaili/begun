module.exports = function(grunt) {
  grunt.initConfig({
    copy: {
      materialize: {
        expand: true,
        files: {
          "./" : "bower_components/materialize/dist/**",
          "js/jquery.js" : "bower_components/jquery/dist/jquery.min.js"
        },
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
          "js/jquery.js",
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
          "css/all.css": "css/all.css",
        }
      },
    },

    uglify: {
      materializeJs: {
        options: {

        },
        files: {
          "js/all.js": ["js/all.js"]
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
    },
    compress: {
      main: {
        options: {
          archive: "production.zip"
        },
        files: [
          {
            src: ["img/**"],
            dest: "./"
          },
          {
            src: ["css/all.css"],
            dest: "./"
          },
          {
            src: ["js/all.js"],
            dest: "./"
          },
          {
            src: ["index.html"],
            dest: "./"
          },
        ]
      }
    }
  });


  // load the tasks
  grunt.loadNpmTasks("grunt-sass");
  grunt.loadNpmTasks("grunt-contrib-watch");
  grunt.loadNpmTasks("grunt-contrib-copy");
  grunt.loadNpmTasks("grunt-contrib-concat");
  grunt.loadNpmTasks("grunt-contrib-uglify");
  grunt.loadNpmTasks('grunt-contrib-compress');
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
    "uglify",
    "compress"
  ]);
};
