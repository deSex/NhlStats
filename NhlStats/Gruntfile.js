/// <binding ProjectOpened='default' />
module.exports = function (grunt) {

    var scriptsToBundle = ['node_modules/angular/angular.js', 'node_modules/angular-route/angular-route.js', 'node_modules/jquery/jquery.js', 'node_modules/bootstrap/dist/js/bootstrap.js'];
    var appScriptsToBundle = ['Scripts/app/**/*.js'];
    var stylesToBundle = ['node_modules/bootstrap/dist/css/bootstrap.css', 'Styles/main.css'];

    grunt.initConfig({
        concat: {
            options: {
                stripBanners: true,
                banner: '/*!<%= grunt.template.today("yyyy-mm-dd") %> */'
            },
            scripts: {
                src: scriptsToBundle,
                dest: 'scripts/script-bundle.js'
            },
            styles: {
                src: stylesToBundle,
                dest: 'Styles/styles-bundle.css'
            },
            app: {
                src: appScriptsToBundle,
                dest: 'Scripts/App/app-bundle.js'
            }
        },
        sass: {
            dist: {
                options: {
                    style: 'expanded'
                },
                files: {
                    'Styles/main.css': 'Styles/sass/main.scss'
                }
            }
        },
        cssmin: {
            options: {
                shorthandCompacting: false,
                roundingPrecision: -1
            },
            target: {
                files: {
                    'Styles/main.min.css': 'Styles/main.css'
                }
            }
        },
        uglify: {
            options: {
                mangle: false
            },
            my_target: {
                files: {
                    'Scripts/script-bundle.min.js' : 'Scripts/script-bundle.js'
                }
            }
        },
        watch: {
            concatScripts: {
                files: scriptsToBundle,
                tasks: ['concat:scripts']
            },
            concatApp: {
                files: appScriptsToBundle,
                tasks: ['concat:app']
            },
            concatStyles: {
                files: stylesToBundle,
                tasks: ['concat:styles']
            },
            sass: {
                files: 'Styles/**/*.scss',
                tasks: ['sass']
            },
            cssmin: {
                files: 'Styles/main.css',
                tasks: ['cssmin']
            },

            uglify: {
                files: 'Scripts/**/*.js',
                tasks: ['uglify']
            }
        }
    });

    grunt.loadNpmTasks('grunt-sass');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-concat');

    grunt.registerTask('default', ['watch']);
};
