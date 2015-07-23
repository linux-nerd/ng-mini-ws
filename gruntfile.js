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
        }
    });

    // Load Grunt tasks declared in the package.json file
    require('matchdep').filterDev('grunt-*').forEach(grunt.loadNpmTasks);

    grunt.registerTask('default', ['open', 'connect:public']);
};