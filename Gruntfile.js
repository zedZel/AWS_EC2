/*global module:false*/
module.exports = function(grunt) {

    var shell = require("shelljs");

    Project configuration.
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json');
    });

    // Tasks
    grunt.registerTask('getVolumes', function() {
        // var allVolumes;
        // shell.exec("aws ec2 describe-volumes > allVolumes.json");
        // allVolumes = grunt.file.readJSON("allVolumes.json");
        // console.log(allVolumes);
        console.log("in getVolumes");
    });
};