module.exports = function(grunt){
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        connect: {
            public: {
                port: 9001,
                base: './public'
            }
        },
        open: {
            all: {
                path: 'http://localhost:<%= connect.public.port%>'
            }
        },
        bowercopy: {
            scripts: {
                options: {
                    destPrefix: 'public/scripts/vendor'
                },
                files: {
                    'jquery.js': 'jquery/jquery.js',
                    'angular.js': 'angular/angular.js',
                    'angular-route.js': 'angular-route/angular-route.js',
                    'bootstrap.js': 'bootstrap/dist/js/bootstrap.js'
                }
            },
            css: {
                options: {
                    destPrefix: "public/css"
                },
                files: {
                    'vendor/css/bootstrap.css': 'bootstrap/dist/css/bootstrap.css'
                }
            },
            folders: {
                files: {
                    'public/css/vendor/fonts': 'bootstrap/dist/fonts'
                }
            }
        }
    });

    // Load Grunt tasks declared in the package.json file
    require('matchdep').filterDev('grunt-*').forEach(grunt.loadNpmTasks);

    grunt.registerTask('default', ['open', 'connect:public']);
    grunt.registerTask('startDev', ['bowercopy']);
};