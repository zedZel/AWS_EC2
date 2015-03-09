/*global module:false*/
module.exports = function(grunt) {

    var shell = require('shelljs');

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json')
    });

    // Default task(s).
    grunt.registerTask('default', function(){
        var allVolumes;
        shell.exec("aws ec2 describe-volumes > allVolumes.json");
        allVolumes = grunt.file.readJSON("allVolumes.json");
        console.log(allVolumes);
    });
};